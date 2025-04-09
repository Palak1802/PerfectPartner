import {View, Text} from 'react-native';
import React from 'react';
import styles from './hobby.style';
import useHobby from './useHobby';

const Hobby: React.FC = () => {
  const {} = useHobby();
  return (
    <View style={styles.container}>
      <Text>Hobby</Text>
    </View>
  );
};

export default Hobby;
