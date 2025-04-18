import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  flatlistContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: color.primary,
    padding: 3,
    backgroundColor: color.white,
  },
  itemTitleText: {
    fontSize: 14,
    fontFamily: fonts.montserratMedium,
    color: color.black,
  },
});
export default styles;
