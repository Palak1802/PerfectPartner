import {View, Text} from 'react-native';
import React from 'react';
import styles from './educationDetail.style';
import {CustomStatusBar} from '@components';

const EducationDetail: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text>EducationDetail</Text>
    </View>
  );
};

export default EducationDetail;
