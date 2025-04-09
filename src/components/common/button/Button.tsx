import React, {memo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './buttonProps';
import color from '@theme/color';
import style from './button.style';

const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.disable ?? props.loading}
      style={[
        style.container,
        {opacity: props.loading || props.disable ? 0.5 : 1},
        props.containerStyle,
      ]}
      onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator
          size="small"
          color={props?.spinnerColor ?? color.white}
        />
      ) : (
        <View style={style.titleContainer}>
          {props.firstIcon && (
            <View style={style.fistIcon}>
              <props.firstIcon />
            </View>
          )}
          <Text
            style={[style.title, props.titleStyle]}
            allowFontScaling={false}>
            {props.title}
          </Text>
          {props.icon && (
            <View style={style.icon}>
              <props.icon />
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
