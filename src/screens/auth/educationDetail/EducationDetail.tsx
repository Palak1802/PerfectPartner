import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './educationDetail.style';
import {
  Button,
  CustomStatusBar,
  Header,
  Input,
  ModalComponent,
} from '@components';
import svgIndex from '@svgIndex';
import useEducationDetail from './useEducationDetail';
import SvgIndex from '@svgIndex';
import {FlatList} from 'react-native-gesture-handler';
import {
  graduateOrNotList,
  yourAnnualIncomeList,
  youWorkWithList,
} from '../otherExtraDetail/otherExtraDetail.const';

const EducationDetail: React.FC = () => {
  const {
    value,
    setValue,
    onInputPress,
    onCloseModal,
    onPressItem,
    onNextPress,
  } = useEducationDetail();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header back title="Education & career detail" />
      <KeyboardAvoidingView
        style={styles.keyboardStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Input
            placeholder="Study"
            value={value?.study}
            editable={false}
            rightIcon={svgIndex.DownArrow}
            onRightIcon={() => onInputPress('study')}
          />
          {value?.study && (
            <Input
              placeholder="School/College Name"
              value={value?.schoolName}
              onChangeText={(text: string) => setValue('schoolName', text)}
            />
          )}
          <Input
            placeholder="Sector"
            value={value?.sector}
            editable={false}
            rightIcon={svgIndex.DownArrow}
            onRightIcon={() => onInputPress('sector')}
          />
          {value?.sector && (
            <>
              <Input
                placeholder="You work as"
                value={value?.workAs}
                onChangeText={(text: string) => setValue('workAs', text)}
              />
              <Input
                placeholder="Your current company name"
                value={value?.currentCompany}
                onChangeText={(text: string) =>
                  setValue('currentCompany', text)
                }
              />
            </>
          )}
          {value?.study !== 'Less than high school' && (
            <Input
              placeholder="CTC"
              value={value?.ctc}
              editable={false}
              rightIcon={svgIndex.DownArrow}
              onRightIcon={() => onInputPress('CTC')}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        onPress={onNextPress}
        title="Next"
        containerStyle={styles.buttonContainer}
      />
      <ModalComponent
        visible={value.studyModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Study</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={graduateOrNotList}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'study')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.sectorModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Sector</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={youWorkWithList}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'sector')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.ctcModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>CTC</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={yourAnnualIncomeList}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            style={styles.flatlistStyleCTC}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item, 'CTC')}
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

export default EducationDetail;
