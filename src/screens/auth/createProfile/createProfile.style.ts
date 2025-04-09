import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  flatlistItemText: {
    fontSize: 16,
    color: color.black,
    fontFamily: fonts.montserratRegular,
  },
  flatlistItemTouch: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 5,
  },
  flatlistContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  closeIcon: {
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
    marginBottom: 40,
  },
  aboutUsMainContainer: {
    height: 120,
    paddingTop: 12,
  },
  dobInputContainer: {
    width: '42%',
    marginHorizontal: 0,
    marginRight: 20,
  },
  genderInputContainer: {
    width: '45%',
    marginHorizontal: 0,
    marginLeft: 20,
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  keyboardStyle: {
    flex: 1,
    marginTop: 10,
  },
});

export default styles;
