import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  TouchableOpacity,
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
import color from '@theme/color';
import fonts from '@theme/fonts';
import SvgIndex from '@svgIndex';

const CreateProfile: React.FC = () => {
  const {value, setValue, onNext, onGenderClick, onCloseModal, onPressItem} =
    useCreateProfile();
  console.log(value?.genderModal);
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Create Profile" />
      <KeyboardAvoidingView style={{flex: 1, marginTop: 10}}>
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Input
              value={value.gender}
              onChangeText={(text: string) =>
                setValue('gender', text?.toLocaleLowerCase())
              }
              placeholder="Gender"
              containerStyle={{
                width: '45%',
                marginHorizontal: 0,
                marginLeft: 20,
                marginRight: 10,
              }}
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
              containerStyle={{
                width: '42%',
                marginHorizontal: 0,
                marginRight: 20,
              }}
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
            mainContainerStyle={{height: 120, paddingTop: 12}}
            inputProps={{multiline: true, textAlignVertical: 'top'}}
          />
          <Button
            title="NEXT"
            onPress={onNext}
            containerStyle={{marginHorizontal: 20, marginTop: 80}}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <ModalComponent
        visible={value.genderModal}
        onRequestClose={onCloseModal}
        containerStyle={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 30,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: color.black,
                fontFamily: fonts.montserratSemiBold,
                marginHorizontal: 25,
                marginBottom: 12,
                flex: 1,
              }}>
              Gender
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCloseModal}
              style={{
                marginRight: 15,
                marginBottom: 8,
                padding: 5,
              }}>
              <SvgIndex.BackIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={['Female', 'Male', 'Others']}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onPressItem(item)}
                  style={{
                    marginHorizontal: 15,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    marginVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: color.black,
                      fontFamily: fonts.montserratRegular,
                    }}>
                    {item}
                  </Text>
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
