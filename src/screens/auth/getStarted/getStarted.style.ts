import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  loginButtonContainerStyle: {
    backgroundColor: color.offWhite,
    marginBottom: 30,
  },
  loginButtonText: {
    color: color.primary,
  },
});

export default styles;
