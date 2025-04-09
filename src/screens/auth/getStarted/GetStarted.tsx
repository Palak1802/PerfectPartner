import {View, Text} from 'react-native';
import React from 'react';
import styles from './getStarted.style';
import useGetStarted from './useGetStarted';
import {Button, CustomStatusBar} from '@components';

const GetStarted: React.FC = () => {
  const {onLoginButton, onSignupButton} = useGetStarted();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.subContainer}>
        <Button
          title="Login"
          onPress={onLoginButton}
          containerStyle={styles.loginButtonContainerStyle}
          titleStyle={styles.loginButtonText}
        />
        <Button title="Create Account" onPress={onSignupButton} />
      </View>
    </View>
  );
};

export default GetStarted;
