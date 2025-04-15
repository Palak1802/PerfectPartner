import {View, Text} from 'react-native';
import React from 'react';
import styles from './hobby.style';
import useHobby from './useHobby';
import {CustomStatusBar, Header} from '@components';

const Hobby: React.FC = () => {
  const {onPressLeftText} = useHobby();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Hobby" leftText onPressLeftText={onPressLeftText} />
      <Text>Now let's add your hobbies & interests</Text>
      <Text>This will help find your better match</Text>
    </View>
  );
};

export default Hobby;
