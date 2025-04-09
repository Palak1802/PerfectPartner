import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './createProfile.style';
import {
  Button,
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
          />
          <Input
            value={value.lastName}
            onChangeText={(text: string) =>
              setValue('lastName', text?.toLocaleLowerCase())
            }
            placeholder="Last name"
          />
          <Input
            value={value.mobile}
            onChangeText={(text: string) =>
              setValue('mobile', text?.toLocaleLowerCase())
            }
            placeholder="Mobile Number"
            inputProps={{keyboardType: 'numeric'}}
          />
          <Input
            value={value.email}
            onChangeText={(text: string) =>
              setValue('email', text?.toLocaleLowerCase())
            }
            placeholder="Email"
          />
          <View style={styles.rowContainer}>
            <Input
              value={value.gender}
              onChangeText={(text: string) =>
                setValue('gender', text?.toLocaleLowerCase())
              }
              placeholder="Gender"
              containerStyle={styles.genderInputContainer}
              editable={false}
              rightIcon={svgIndex.DownArrow}
              onRightIcon={onGenderClick}
            />
            <Input
              value={value.dateOfBirth}
              onChangeText={(text: string) =>
                setValue('dateOfBirth', text?.toLocaleLowerCase())
              }
              placeholder="Date of Birth"
              containerStyle={styles.dobInputContainer}
            />
          </View>
          <Input
            value={value.password}
            onChangeText={(text: string) =>
              setValue('password', text?.toLocaleLowerCase())
            }
            placeholder="Password"
            hideText
            secureTextEntry
          />
          <Input
            value={value.confirmPassword}
            onChangeText={(text: string) =>
              setValue('confirmPassword', text?.toLocaleLowerCase())
            }
            placeholder="Confirm Password"
            hideText
            secureTextEntry
          />
          <Input
            value={value.aboutUs}
            onChangeText={(text: string) =>
              setValue('aboutUs', text?.toLocaleLowerCase())
            }
            placeholder="About Us"
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
              <SvgIndex.BackIcon height={20} width={20} />
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
