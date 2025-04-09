import {View, Text} from 'react-native';
import React from 'react';
import styles from './familyDetail.style';
import useFamilyDetail from './useFamilyDetail';

const FamilyDetail: React.FC = () => {
  const {} = useFamilyDetail();
  return (
    <View style={styles.container}>
      <Text>FamilyDetail</Text>
    </View>
  );
};

export default FamilyDetail;
