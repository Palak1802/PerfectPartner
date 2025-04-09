import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './otherExtraDetail.style';
import {
  Button,
  CustomStatusBar,
  Header,
  Input,
  ModalComponent,
} from '@components';
import svgIndex from '@svgIndex';
import useOtherExtraDetail from './useOtherExtraDetail';
import SvgIndex from '@svgIndex';
import {
  anyChildrenList,
  dietList,
  heightList,
  maritalStatusList,
} from './otherExtraDetail.const';

const OtherExtraDetail: React.FC = () => {
  const {
    value,
    setValue,
    onCloseModal,
    onInputClick,
    onNextPress,
    onPressItem,
  } = useOtherExtraDetail();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title={`Now let's fill your other detail`} />
      <KeyboardAvoidingView
        style={styles.keyboardStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Input
            placeholder="Your marital status"
            value={value?.maritalStatus}
            editable={false}
            rightIcon={svgIndex.DownArrow}
            onRightIcon={() => onInputClick('marital')}
          />
          {value?.isChildren && (
            <Input
              placeholder="Do you have any children?"
              value={value?.children}
              editable={false}
              rightIcon={svgIndex.DownArrow}
              onRightIcon={() => onInputClick('children')}
            />
          )}
          <Input
            placeholder="Your diet"
            value={value?.diet}
            editable={false}
            rightIcon={svgIndex.DownArrow}
            onRightIcon={() => onInputClick('diet')}
          />
          <Input
            placeholder="Your height"
            value={value?.height}
            editable={false}
            rightIcon={svgIndex.DownArrow}
            onRightIcon={() => onInputClick('height')}
          />
          <Input
            placeholder="Community (surname)"
            value={value?.community}
            onChangeText={(text: string) => setValue('community', text)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        onPress={onNextPress}
        title="Next"
        containerStyle={styles.buttonContainer}
      />
      <ModalComponent
        visible={value.maritalStatusModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Marital Status</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={maritalStatusList}
            contentContainerStyle={styles.modalFlatlistContainer}
            style={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'marital')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.childrenModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Children</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={anyChildrenList}
            contentContainerStyle={styles.modalFlatlistContainer}
            style={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'children')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.dietModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Diet</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={dietList}
            contentContainerStyle={styles.modalFlatlistContainer}
            style={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'diet')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.heightModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Height</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={heightList}
            contentContainerStyle={styles.modalFlatlistContainer}
            style={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'height')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
    </View>
  );
};

export default OtherExtraDetail;
