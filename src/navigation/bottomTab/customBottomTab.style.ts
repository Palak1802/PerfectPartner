import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  rowView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
