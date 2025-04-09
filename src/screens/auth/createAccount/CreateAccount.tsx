import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './createAccount.style';
import {CustomStatusBar, Header} from '@components';
import {profileType} from './createAccount.const';
import color from '@theme/color';
import useCreateAccount from './useCreateAccount';
import fonts from '@theme/fonts';

const CreateAccount: React.FC = () => {
  const {onItemClick} = useCreateAccount();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="" />
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text
          style={{
            fontSize: 20,
            color: color.black,
            fontFamily: fonts.montserratBold,
          }}>
          This Profile is for
        </Text>
        <FlatList
          numColumns={2}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}
          showsVerticalScrollIndicator={false}
          data={profileType}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => onItemClick(item)}
                style={{
                  backgroundColor: 'grey',
                  marginTop: 15,
                  marginRight: 8,
                  width: '48%',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 20,
                }}>
                <item.icon width={30} height={30} style={{marginBottom: 16}} />
                <Text
                  style={{
                    fontSize: 18,
                    color: color.black,
                    fontFamily: fonts.montserratSemiBold,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CreateAccount;
