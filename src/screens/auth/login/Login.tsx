import {View, Text} from 'react-native';
import React from 'react';
import styles from './login.style';
import {CustomStatusBar} from '@components';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text>Login</Text>
    </View>
  );
};

export default Login;
