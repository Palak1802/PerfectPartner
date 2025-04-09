import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  modalFlatlistItemText: {
    fontSize: 16,
    color: color.black,
    fontFamily: fonts.montserratRegular,
  },
  modalFlatlistItemTouch: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 5,
  },
  modalFlatlistContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  modalCloseTouch: {
    marginRight: 15,
    marginBottom: 8,
    padding: 5,
  },
  modalHeaderText: {
    fontSize: 16,
    color: color.black,
    fontFamily: fonts.montserratSemiBold,
    marginHorizontal: 25,
    marginBottom: 12,
    flex: 1,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalMainContainer: {
    backgroundColor: 'white',
    paddingTop: 30,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  keyboardStyle: {
    flex: 1,
  },
});

export default styles;
