import {StyleProp, ViewStyle} from 'react-native';

interface HeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPressSearch?: () => void;
  type?: 'normal' | 'home';
  backgroundColor?: string;
  title?: string;
  backIcon?: () => void;
  onPressLeftText?: () => void;
  rightText?: boolean;
  leftIcon?: boolean;
}
