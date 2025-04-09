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
import styles from './socialDetail.style';
import {
  Button,
  CustomStatusBar,
  Header,
  Input,
  ModalComponent,
} from '@components';
import svgIndex from '@svgIndex';
import useSocialDetail from './useSocialDetail';
import SvgIndex from '@svgIndex';
import {communityConst, religionConst} from './socialDetail.const';

const SocialDetail: React.FC = () => {
  const {value, onInputClick, onCloseModal, onPressReligionItem, onNextPress} =
    useSocialDetail();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Social Detail" />
      <KeyboardAvoidingView
        style={styles.keyboardStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Input
            placeholder="Select your religion"
            value={value?.religion}
            editable={false}
            onRightIcon={() => onInputClick('religion')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="Select your community"
            value={value?.community}
            editable={false}
            onRightIcon={() => onInputClick('community')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="Living In"
            value={value?.livingIn}
            editable={false}
            onRightIcon={() => onInputClick('livingIn')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="Sate you live in"
            value={value?.state}
            editable={false}
            onRightIcon={() => onInputClick('state')}
            rightIcon={svgIndex.DownArrow}
          />
          <Input
            placeholder="City you live in"
            value={value?.city}
            editable={false}
            onRightIcon={() => onInputClick('city')}
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
        visible={value.religionModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Religion</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={religionConst}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressReligionItem(item, 'religion')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.communityModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Community</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={communityConst}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressReligionItem(item, 'community')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.stateModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>State</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['Female', 'Male', 'Others']}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressReligionItem(item, 'state')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.cityModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>City</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['Female', 'Male', 'Others']}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressReligionItem(item, 'city')}
                  style={styles.modalFlatlistItemTouch}>
                  <Text style={styles.modalFlatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
      <ModalComponent
        visible={value.livingInModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalHeaderText}>Living In</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.modalCloseTouch}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['Female', 'Male', 'Others']}
            contentContainerStyle={styles.modalFlatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressReligionItem(item, 'livingIn')}
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

export default SocialDetail;
