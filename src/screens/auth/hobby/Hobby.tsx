import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
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
        <View style={{flex: 1}}>
          <Text style={styles.itemTitleText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Hobby" leftText onPressLeftText={onPressLeftText} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>
          Now let's add your hobbies & interests
        </Text>
        <Text style={styles.detailText}>
          This will help find your better match
        </Text>
        <FlatList
          data={hobbiesList}
          numColumns={3}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlistContainer}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
        <Button
          title="Continue"
          onPress={onContinue}
          containerStyle={styles.buttonContainer}
        />
      </ScrollView>
    </View>
  );
};

export default Hobby;
