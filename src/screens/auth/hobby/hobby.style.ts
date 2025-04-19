import color from '@theme/color';
import fonts from '@theme/fonts';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flatlistContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    marginHorizontal: 16,
    marginTop: 15,
    width: width - 150,
  },
  titleText: {
    fontSize: 18,
    fontFamily: fonts.montserratSemiBold,
    color: color.black,
    marginHorizontal: 16,
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    fontFamily: fonts.montserratMedium,
    color: color.black,
    marginHorizontal: 16,
    marginTop: 4,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: color.primary,
    backgroundColor: color.white,
    margin: 5,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  itemTitleText: {
    fontSize: 14,
    fontFamily: fonts.montserratMedium,
    color: color.black,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
export default styles;
