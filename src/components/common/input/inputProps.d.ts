import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface InputProps {
  value: string | undefined;
  onChangeText?: (value: string) => void;
  placeholder: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputProps?: TextInputProps;
  secureTextEntry?: boolean;
  error?: string | null;
  rightIcon?: any;
  hideText?: any;
  spinner?: boolean;
  rightIconColor?: string;
  onRightIcon?: () => void;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
  placeholderColor?: string;
  rightText?: boolean | string;
  rightIconStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
}
