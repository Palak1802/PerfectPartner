import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';
import {useCallback, useRef} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {OTPProps} from './otpProps';

const useOtp = () => {
  const navigation = useAuthNavigation();
  const OTPRef = useRef<TextInput>(null);
  const [value, setValue] = useAppState<OTPProps>({
    otp: undefined,
    loading: false,
    otpError: undefined,
  });
  //** Handle keyboard down on enter otp */
  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, [value?.otp]);
  //**  Validate otp verification */
  const onValidateVerifyOTP = useCallback(() => {
    if (value?.otp?.length !== 4) {
      //   setVerifyOtpError(validationMessage.invalidOtp);
    } else {
      setValue('otpError', undefined);
      setValue('loading', true);
      onVerifyOTP();
    }
  }, [value?.otp]);
  //** Submit verifyOtp */
  const onVerifyOTP = async () => {
    navigation.navigate('socialDetail');
  };
  return {
    OTPRef,
    onSubmitEditing,
    onValidateVerifyOTP,
    value,
    setValue,
  };
};

export default useOtp;
