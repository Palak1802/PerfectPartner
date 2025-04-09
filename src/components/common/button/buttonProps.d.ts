import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  icon?: any;
  spinnerColor?: string;
  disable?: boolean;
  firstIcon?: any;
}
