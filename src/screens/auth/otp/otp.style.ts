import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  headingText: {
    marginTop: 20,
    fontFamily: fonts.montserratBold,
    fontSize: 24,
    color: color.black,
    textAlign: 'center',
  },
  subHeadingText: {
    marginTop: 15,
    fontFamily: fonts.montserratSemiBold,
    fontSize: 16,
    color: color.black,
    textAlign: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  otpContainer: {
    marginTop: 28,
    marginHorizontal: 25,
  },
  otp: {
    fontFamily: fonts.montserratRegular,
    fontSize: 20,
    lineHeight: 27,
    color: color.black,
  },
  cell: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderRadius: 62 / 2,
    backgroundColor: color.offWhite,
    borderColor: color.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorLabel: {
    marginBottom: 10,
  },
  resendOtp: {
    fontSize: 12,
    fontFamily: fonts.montserratSemiBold,
    lineHeight: 16.34,
    color: color.primary,
  },
  buttonContainer: {
    marginBottom: 30,
  },
  rememberLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.black,
    fontFamily: fonts.montserratRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 16,
  },
  loginLabel: {
    fontFamily: fonts.montserratRegular,
    fontWeight: '700',
    color: color.black,
    textDecorationLine: 'underline',
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  btnContainerStyle: {
    marginHorizontal: 20,
    marginTop: 30,
  },
});

export default styles;
