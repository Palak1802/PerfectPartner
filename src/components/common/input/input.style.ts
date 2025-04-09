import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  container: {
    height: 54,
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: color.offWhite,
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    color: color.black,
    fontFamily: fonts.montserratRegular,
    fontWeight: '400',
    height: 54,
    padding: 0,
    marginLeft: 10,
  },
  rightIcon: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 20,
    zIndex: 1,
    overflow: 'visible',
  },
  error: {
    color: color.error,
    fontFamily: fonts.montserratRegular,
    marginLeft: 10,
    fontSize: 12,
    marginTop: 5,
  },
  rightTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  lable: {
    fontFamily: fonts.montserratSemiBold,
    fontWeight: '600',
    fontSize: 14,
    color: color.black,
    lineHeight: 21,
  },
});

export default style;
