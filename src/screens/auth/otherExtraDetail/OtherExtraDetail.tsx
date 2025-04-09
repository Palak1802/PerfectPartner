import {View, Text} from 'react-native';
import React from 'react';
import styles from './otherExtraDetail.style';
import {CustomStatusBar} from '@components';

const OtherExtraDetail: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text>OtherExtraDetail</Text>
    </View>
  );
};

export default OtherExtraDetail;
