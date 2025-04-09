import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  Platform,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import style from './dropdown.style';
import font from '@theme/fonts';

export interface DropdownProps {
  containerStyle?: ViewStyle;
  dropdownContainerStyle?: ViewStyle;
  data?: DataProps[];
  placeholder?: string;
  placeholderStyle?: StyleProp<TextStyle>;
  labelStyle?: TextStyle;
  value?: string;
  setValue?: (title: string) => void;
  label?: string;
  lableStyle?: TextStyle;
  innerLabel?: string;
  mainViewStyle?: ViewStyle;
  showRightIcon?: boolean;
  onPressRight?: () => void;
  onPressClick?: () => void;
  filterRowContainer?: ViewStyle;
  arrowHeight?: number;
  arrowWidth?: number;
  isShowType?: boolean;
  typeData?: DataProps[];
  typeValue?: string;
  setTypeValue?: (title: string) => void;
  isDoneButtonHide?: boolean;
  error?: string;
  mainFilterIconStyle?: ViewStyle;
  isShowScaleFilterIcon?: boolean;
  clickDisable?: boolean;
}
interface Dropdown {
  isOpen: boolean;
  dropdownData: Array<string>;
  selectedItem: string;
  selectedIndex: number;
  typeData: Array<string>;
  typeSelectedItem: string;
}
interface DataProps {
  title: string;
}
const Dropdown: FC<DropdownProps> = ({
  placeholder,
  containerStyle,
  dropdownContainerStyle,
  value,
  data,
  setValue,
  placeholderStyle,
  label,
  lableStyle,
  innerLabel,
  mainViewStyle,
  showRightIcon,
  onPressRight,
  filterRowContainer,
  arrowHeight,
  arrowWidth,
  typeData,
  typeValue,
  setTypeValue,
  isDoneButtonHide,
  error,
  mainFilterIconStyle,
  isShowScaleFilterIcon,
  clickDisable,
  onPressClick,
}) => {
  const refDropdown = useRef<any>(null);
  const [dropdownState, setDropdownState] = useState<Dropdown>({
    dropdownData: [],
    typeData: [],
    isOpen: false,
    selectedItem: value || '',
    selectedIndex: 0,
    typeSelectedItem: '',
  });
  //** Update dropdown state value */
  const updateDropdownState = useCallback(
    (key: string, value: unknown) => {
      setDropdownState(prevState => ({...prevState, [key]: value}));
    },
    [dropdownState],
  );
  //** Set dropdown data and row data as required to scrollpicker */
  useEffect(() => {
    updateDropdownState(
      'dropdownData',
      data?.map(item => item.title),
    );
  }, [data]);
  const getSelectedIndex = useCallback(
    (value?: string) => {
      for (let i = 0; i < dropdownState?.dropdownData?.length; i++) {
        if (dropdownState?.dropdownData[i] === value?.toString()) {
          return i;
        }
      }
      return -1;
    },
    [dropdownState],
  );
  const alreadyValueSelected = getSelectedIndex(value);
  useEffect(() => {
    updateDropdownState('selectedIndex', alreadyValueSelected);
    updateDropdownState(
      'selectedItem',
      dropdownState.dropdownData[alreadyValueSelected],
    );
  }, [alreadyValueSelected]);
  useEffect(() => {
    typeData?.map(item => {
      dropdownState?.typeData.push(item.title);
    });
    updateDropdownState('typeData', [...dropdownState.typeData]);
  }, [typeData]);
  //** Open bottomsheet */
  const onOpen = () => {
    refDropdown?.current?.open();
    if (Keyboard) {
      Keyboard.dismiss();
    }
  };
  //** Set value default and if user select */
  const onDone = () => {
    refDropdown?.current?.close();
    if (!dropdownState.selectedItem) {
      setValue?.(dropdownState?.dropdownData[0]);
    } else {
      setValue?.(dropdownState.selectedItem);
    }
    if (!dropdownState?.typeSelectedItem) {
      setTypeValue?.(dropdownState?.typeData[0]);
    } else {
      setTypeValue?.(dropdownState.typeSelectedItem);
    }
  };
  //** Set index default and if user select */
  const onItemSelected = (selectedIndex: number) => {
    updateDropdownState('selectedIndex', selectedIndex);
    updateDropdownState(
      'selectedItem',
      dropdownState.dropdownData[selectedIndex],
    );
  };
  return (
    <View style={[style.mainView, mainViewStyle]}>
      {label && (
        <Text
          allowFontScaling={false}
          style={[style.label, lableStyle]}
          numberOfLines={1}>
          {label}
        </Text>
      )}
      <View style={[style.filterRowContainer, filterRowContainer]}>
        <TouchableOpacity
          style={[style.container, containerStyle]}
          activeOpacity={0.8}
          onPress={onPressClick ?? onOpen}>
          <View style={style.innerLableView}>
            {innerLabel && (
              <Text allowFontScaling={false} style={style.innerLable}>
                {innerLabel}
              </Text>
            )}
            <View style={style.valueView}>
              <Text
                allowFontScaling={false}
                style={[
                  value ? style.valueText : style.placeholderText,
                  placeholderStyle,
                ]}>
                {value ? value : placeholder}
              </Text>
            </View>
          </View>
          <View style={style.arrowView}>
            <SvgIndex.DownArrow height={arrowHeight} width={arrowWidth} />
          </View>
        </TouchableOpacity>
        {showRightIcon && (
          <TouchableOpacity
            onPress={onPressRight}
            activeOpacity={0.8}
            style={[style.filterIconStyle, mainFilterIconStyle]}>
            {isShowScaleFilterIcon ? (
              <SvgIndex.HideEye height={15} width={20} />
            ) : (
              <SvgIndex.HideEye />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text allowFontScaling={false} style={[style.errorLabel]}>
          {error}
        </Text>
      )}
      <RBSheet
        ref={refDropdown}
        height={150}
        customStyles={{
          container: style.bottomSheetList,
        }}>
        <View>
          <TouchableOpacity onPress={onDone} activeOpacity={0.6}>
            <Text style={style.doneLabelStyle} allowFontScaling={false}>
              Done
            </Text>
          </TouchableOpacity>
          <View style={style.dropdownView}>
            {Platform.OS === 'android' ? (
              <View style={style.sheetContent}>
                {/* <WheelPicker
                  selectedItem={dropdownState?.selectedIndex}
                  data={data?.map(item => item.title)!}
                  onItemSelected={onItemSelected}
                  selectedItemTextColor={color.black}
                  selectedItemTextSize={18}
                  selectedItemTextFontFamily={font.openSansSemiBold}
                  itemTextFontFamily={font.openSansRegular}
                  itemTextColor={color.secondaryText}
                  itemTextSize={16}
                  indicatorColor={color.lightgray}
                  style={style.wheelPicker}
                /> */}
              </View>
            ) : (
              <View style={style.sheetContent}>
                {/* <Picker
                  selectedValue={
                    dropdownState?.selectedItem
                      ? dropdownState?.selectedItem
                      : data!!?.[alreadyValueSelected]?.title
                  }
                  itemStyle={style.itemFontStyle}
                  onValueChange={data =>
                    updateDropdownState('selectedItem', data)
                  }>
                  {data?.map(item => (
                    <Picker.Item
                      label={
                        item.title?.charAt(0)?.toUpperCase() +
                        item.title?.slice(1)
                      }
                      value={item.title}
                      key={item.title}
                      color={color.black}
                    />
                  ))}
                </Picker> */}
              </View>
            )}
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default memo(Dropdown);
