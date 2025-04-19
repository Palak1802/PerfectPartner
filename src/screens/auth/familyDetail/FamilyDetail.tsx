import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './familyDetail.style';
import useFamilyDetail from './useFamilyDetail';
import {
  Button,
  CustomStatusBar,
  Header,
  Input,
  ModalComponent,
} from '@components';
import svgIndex from '@svgIndex';
import {
  fatherStatusList,
  motherStatusList,
} from '../otherExtraDetail/otherExtraDetail.const';

const FamilyDetail: React.FC = () => {
  const {
    value,
    onPressItem,
    onPressLeftText,
    onCloseModal,
    onNextPress,
    onInputClick,
  } = useFamilyDetail();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header
        title="Family Details"
        leftText
        onPressLeftText={onPressLeftText}
      />
      <KeyboardAvoidingView
        style={styles.keyboardStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.titleText}>
            Please fill some details about your family
          </Text>
          <Input
            placeholder="Select your father status"
            value={value?.fatherStatus}
            editable={false}
            onPressInput={() => onInputClick('father')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="Select your mother status"
            value={value?.motherStatus}
            editable={false}
            onPressInput={() => onInputClick('mother')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="Select your no. of brothers"
            value={value?.brotherStatus}
            editable={false}
            onPressInput={() => onInputClick('brother')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="Select your no. of sisters"
            value={value?.sisterStatus}
            editable={false}
            onPressInput={() => onInputClick('sister')}
            rightIcon={svgIndex.DownArrow}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        onPress={onNextPress}
        title="Next"
        containerStyle={styles.buttonContainer}
      />
      <ModalComponent
        visible={value.fatherStatusModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Father Status</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <svgIndex.Close height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={fatherStatusList}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'father')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.motherStatusModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Mother Status</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <svgIndex.Close height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={motherStatusList}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'mother')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.brotherStatusModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Brother Status</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <svgIndex.Close height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['No brother', '1', '1']}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'brother')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.sisterStatusModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Sister Status</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <svgIndex.Close height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['No sisters', '1', '2', '3']}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'sister')}
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

export default FamilyDetail;
