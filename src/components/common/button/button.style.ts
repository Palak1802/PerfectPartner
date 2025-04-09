import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 20,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
    borderWidth: 1,
    width: 16,
    height: 16,
    borderRadius: 9,
    borderColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fistIcon: {
    marginRight: 10,
    justifyContent: 'center',
  },
  title: {
    color: color.white,
    fontFamily: fonts.montserratBold,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default style;
