import {Button} from '@components';
import color from '@theme/color';
import React, {FC, RefObject} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import styles from './otp.style';
import useOtp from './useOtp';

export interface VerifyOTPProps {
  OTPRef: RefObject<TextInput>;
  otp: string | undefined;
  verifyOtpError: string | undefined;
  updateVerifyOtpInputValue: () => void;
  onSubmitEditing: () => void;
  onValidateVerifyOTP: () => void;
  navigateToLogin: () => void;
}

const Otp: FC = () => {
  const {OTPRef, onSubmitEditing, onValidateVerifyOTP, setValue, value} =
    useOtp();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <Text allowFontScaling={false} style={styles.headingText}>
          OTP Verification
        </Text>
        <Text allowFontScaling={false} style={styles.subHeadingText}>
          We have sent OTP to verify your email
        </Text>
        <View style={styles.otpContainer}>
          <CodeField
            ref={OTPRef}
            value={value?.otp}
            onChangeText={(text: string) => setValue('otp', text)}
            cellCount={4}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            allowFontScaling={false}
            onSubmitEditing={onSubmitEditing}
            renderCell={({index, symbol, isFocused}) => (
              <View
                key={index}
                style={[
                  styles.cell,
                  {
                    borderColor: value?.otpError
                      ? color.error
                      : !isFocused
                      ? color.offWhite
                      : color.primary,
                    borderWidth: value?.otpError ? 1.5 : !isFocused ? 1 : 1.5,
                  },
                ]}>
                <Text allowFontScaling={false} key={index} style={styles.otp}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 18,
            alignSelf: 'flex-end',
            marginRight: 20,
            padding: 5,
          }}>
          <Text allowFontScaling={false} style={styles.resendOtp}>
            Resend OTP
          </Text>
        </TouchableOpacity>
        <Button
          title="Submit"
          onPress={onValidateVerifyOTP}
          containerStyle={styles.btnContainerStyle}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Otp;
