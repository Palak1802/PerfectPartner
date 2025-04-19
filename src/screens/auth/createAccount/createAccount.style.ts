import {StyleSheet} from 'react-native';
import fonts from '@theme/fonts';
import color from '@theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  flatlistItemIconStyle: {
    marginBottom: 16,
  },
  flatlistItemText: {
    fontSize: 18,
    color: color.black,
    fontFamily: fonts.montserratSemiBold,
  },
  flatlistItemTouch: {
    backgroundColor: color.lightGrey,
    marginTop: 15,
    marginRight: 8,
    width: '48%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  flatlistContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 20,
    color: color.black,
    fontFamily: fonts.montserratBold,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default styles;
