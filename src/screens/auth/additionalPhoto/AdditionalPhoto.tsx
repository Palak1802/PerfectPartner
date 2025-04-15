import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './additionalPhoto.style';
import useAdditionalPhoto from './useAdditionalPhoto';
import {Button, CustomStatusBar, Header} from '@components';

const AdditionalPhoto: React.FC = () => {
  const {onPressItem, selectImage, onPressLeftText, onNextPress} =
    useAdditionalPhoto();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header
        title="Additional Photos"
        leftText
        onPressLeftText={onPressLeftText}
      />
      <KeyboardAvoidingView
        style={styles.keyboardStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.titleText}>
            Please upload you photos (Min. 3 photos)
          </Text>
          <FlatList
            data={Array.from({length: 5})}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => selectImage(index)}
                  style={styles.itemBorder}>
                  <Text>{index + 1}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        onPress={onNextPress}
        title="Next"
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

export default AdditionalPhoto;
