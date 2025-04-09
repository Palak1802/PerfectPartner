import color from '@theme/color';
import React, {memo, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './input.style';
import {InputProps} from './inputProps';
import SvgIndex from '@svgIndex';

const Input: React.FC<InputProps> = props => {
  const [passwordVisible, setPasswordVisible] = useState<boolean | undefined>(
    !props?.secureTextEntry,
  );
  return (
    <View style={[style.mainContainer, props.containerStyle]}>
      {props?.label && (
        <Text
          allowFontScaling={false}
          style={[style.lable, props?.labelStyle]}
          numberOfLines={1}>
          {props?.label}
        </Text>
      )}
      <View style={[style.container, props.mainContainerStyle]}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          style={[style.input, props.inputStyle]}
          placeholder={props.placeholder}
          placeholderTextColor={color.black && props.placeholderColor}
          allowFontScaling={false}
          autoCorrect={false}
          cursorColor={color.black}
          keyboardType={props.inputProps?.keyboardType ?? 'default'}
          secureTextEntry={!passwordVisible}
          editable={props?.editable}
          {...props.inputProps}
        />
        {props.rightIcon && (
          <View style={style.rightIcon}>
            {props.spinner ? (
              <ActivityIndicator color={color.black} />
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={props.onRightIcon}
                style={[style.rightTouchable, props.rightIconStyle]}>
                <props.rightIcon color={color.primary} />
              </TouchableOpacity>
            )}
          </View>
        )}
        {props?.hideText && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            activeOpacity={0.7}
            style={style.rightIcon}>
            {!passwordVisible ? <SvgIndex.HideEye /> : <SvgIndex.UnHideIcon />}
          </TouchableOpacity>
        )}
        {props.rightText && (
          <View style={style.rightIcon}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={props.onRightIcon}
              style={style.rightTouchable}>
              <Text>{props?.rightText}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {props.error && <Text style={style.error}>{props.error}</Text>}
    </View>
  );
};

export default memo(Input);
