import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './createAccount.style';
import {CustomStatusBar, Header} from '@components';
import {profileType} from './createAccount.const';
import useCreateAccount from './useCreateAccount';

const CreateAccount: React.FC = () => {
  const {onItemClick} = useCreateAccount();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="" />
      <View style={styles.subContainer}>
        <Text style={styles.headerText}>This Profile is for</Text>
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.flatlistContainer}
          showsVerticalScrollIndicator={false}
          data={profileType}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => onItemClick(item)}
                style={styles.flatlistItemTouch}>
                <item.icon
                  width={30}
                  height={30}
                  style={styles.flatlistItemIconStyle}
                />
                <Text style={styles.flatlistItemText}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CreateAccount;
