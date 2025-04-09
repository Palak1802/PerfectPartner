import {View, Text} from 'react-native';
import React from 'react';
import styles from './additionalPhoto.style';
import useAdditionalPhoto from './useAdditionalPhoto';

const AdditionalPhoto: React.FC = () => {
  const {} = useAdditionalPhoto();
  return (
    <View style={styles.container}>
      <Text>AdditionalPhoto</Text>
    </View>
  );
};

export default AdditionalPhoto;
