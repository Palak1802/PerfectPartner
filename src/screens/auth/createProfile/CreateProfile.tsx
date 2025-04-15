import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './createProfile.style';
import {
  Button,
  CountryCodeInputDropdown,
  CustomStatusBar,
  Header,
  Input,
  ModalComponent,
} from '@components';
import useCreateProfile from './useCreateProfile';
import svgIndex from '@svgIndex';
import SvgIndex from '@svgIndex';
import {genderList} from './createProfile.const';

const CreateProfile: React.FC = () => {
  const {value, setValue, onNext, onGenderClick, onCloseModal, onPressItem} =
    useCreateProfile();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Create Profile" />
      <KeyboardAvoidingView
        style={styles.keyboardStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Input
            value={value.firstName}
            onChangeText={(text: string) =>
              setValue('firstName', text?.toLocaleLowerCase())
            }
            placeholder="First name"
            disabled
          />
          <Input
            value={value.lastName}
            onChangeText={(text: string) =>
              setValue('lastName', text?.toLocaleLowerCase())
            }
            placeholder="Last name"
            disabled
          />
          <CountryCodeInputDropdown
            setSelectedCountry={(item: any) =>
              setValue('countryCode', item?.dialling_code)
            }
            placeholder="Mobile Number"
            selectedCountry={value?.countryCode ?? '+91'}
            inputValue={value?.mobile}
            setValue={(text: string) => setValue('mobile', text)}
            inputProps={{keyboardType: 'numeric'}}
            maxLength={10}
          />
          <Input
            value={value.email}
            onChangeText={(text: string) =>
              setValue('email', text?.toLocaleLowerCase())
            }
            placeholder="Email"
            disabled
          />
          <View style={styles.rowContainer}>
            <Input
              value={value.gender}
              placeholder="Gender"
              containerStyle={styles.genderInputContainer}
              editable={false}
              rightIcon={svgIndex.DownArrow}
              onPressInput={onGenderClick}
            />
            <Input
              value={value.dateOfBirth}
              onChangeText={(text: string) =>
                setValue('dateOfBirth', text?.toLocaleLowerCase())
              }
              placeholder="Date of Birth"
              containerStyle={styles.dobInputContainer}
              disabled
            />
          </View>
          <Input
            value={value.password}
            onChangeText={(text: string) =>
              setValue('password', text?.toLocaleLowerCase())
            }
            placeholder="Password"
            hideText
            disabled
            secureTextEntry
          />
          <Input
            value={value.confirmPassword}
            onChangeText={(text: string) =>
              setValue('confirmPassword', text?.toLocaleLowerCase())
            }
            placeholder="Confirm Password"
            hideText
            disabled
            secureTextEntry
          />
          <Input
            value={value.aboutUs}
            onChangeText={(text: string) =>
              setValue('aboutUs', text?.toLocaleLowerCase())
            }
            placeholder="About Us"
            disabled
            mainContainerStyle={styles.aboutUsMainContainer}
            inputProps={{multiline: true, textAlignVertical: 'top'}}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        title="Next"
        onPress={onNext}
        containerStyle={styles.buttonContainer}
      />
      <ModalComponent
        visible={value.genderModal}
        onRequestClose={onCloseModal}
        containerStyle={styles.modalContainer}>
        <View style={styles.modalMainContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.modalHeaderText}>Gender</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={styles.closeIcon}>
              <SvgIndex.Close height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={genderList}
            contentContainerStyle={styles.flatlistContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item)}
                  style={styles.flatlistItemTouch}>
                  <Text style={styles.flatlistItemText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ModalComponent>
    </View>
  );
};

export default CreateProfile;
