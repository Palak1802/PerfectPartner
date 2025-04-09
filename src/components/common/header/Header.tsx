import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HeaderProps} from './headerProps';
import style from './header.style';
import SvgIndex from '@svgIndex';
import {useAuthNavigation} from '@hooks/useAppNavigation';

const Header: React.FC<HeaderProps> = ({
  containerStyle,
  backgroundColor,
  title,
  backIcon,
  back,
}) => {
  const navigation = useAuthNavigation();
  return (
    <View
      style={[
        style.mainContainer,
        containerStyle,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={style.container}>
        <TouchableOpacity
          style={style.backIconContainer}
          activeOpacity={0.5}
          hitSlop={20}
          onPress={() => {
            backIcon ? backIcon() : navigation.goBack();
          }}>
          <SvgIndex.BackIcon />
        </TouchableOpacity>
        <Text style={style.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={style.backIconContainer} />
      </View>
    </View>
  );
};

export default memo(Header);
