import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './home.style';
import useHome from './useHome';
import imageIndex from '@imageIndex';
import {CustomStatusBar, Header} from '@components';

const Home: React.FC = () => {
  const {value, setValue, onItemPress, onPressWishlist} = useHome();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header title="Home" leftIcon containerStyle={{marginLeft: 30}} />
      <FlatList
        data={value?.userList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onItemPress(item)}
              style={styles.itemContainer}
              key={index}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onPressWishlist(item)}
                style={styles.wishlistIconTouch}>
                <Image
                  source={
                    !value?.liked?.includes(item?.title)
                      ? imageIndex.heart
                      : imageIndex.heart
                  }
                  style={styles.wishlistIcon}
                />
              </TouchableOpacity>
              <Image source={{uri: item?.image}} style={styles.itemImage} />
              <View style={styles.titlePriceContainer}>
                <Text style={styles.itemTitle} numberOfLines={1}>
                  {item?.title}
                </Text>
                <View style={styles.rowViewStyle}>
                  <Text style={styles.itemPrice}>{item?.price}</Text>
                  <Text style={styles.itemRating}>{item?.rating?.rate} </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
