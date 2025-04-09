import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  keyboardStyle: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  titleText: {
    fontSize: 20,
    color: color.black,
    fontFamily: fonts.montserratSemiBold,
    marginHorizontal: 20,
    marginTop: 15,
  },
  itemBorder: {
    borderWidth: 1,
    borderColor: color.lightGrey,
    backgroundColor: color.offWhite,
    width: '40%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
  },
  itemText: {
    fontSize: 22,
    color: color.black,
  },
});
export default styles;
