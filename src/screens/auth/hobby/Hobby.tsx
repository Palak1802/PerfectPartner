import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './hobby.style';
import useHobby from './useHobby';
import {Button, CustomStatusBar, Header} from '@components';
import {hobbiesList} from './hobby.const';

const Hobby: React.FC = () => {
  const {onPressLeftText, onContinue, onItemPress} = useHobby();
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onItemPress(item)}
        style={styles.itemContainer}>
        <Text style={styles.itemTitleText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Hobby" leftText onPressLeftText={onPressLeftText} />
      <Text>Now let's add your hobbies & interests</Text>
      <Text>This will help find your better match</Text>
      <FlatList
        data={hobbiesList}
        numColumns={3}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Continue" onPress={onContinue} />
    </View>
  );
};

export default Hobby;
