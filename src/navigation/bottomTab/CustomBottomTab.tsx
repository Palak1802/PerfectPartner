import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import SvgIndex from '@svgIndex';
import {TouchableOpacity, View} from 'react-native';
import styles from './customBottomTab.style';

const CustomHomeBottomTabs: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const isFocused = state?.index;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => {}}>
        {isFocused === 0 ? <SvgIndex.HomeBold /> : <SvgIndex.HomeRegular />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => {}}>
        {isFocused === 1 ? (
          <SvgIndex.Favourite height={24} width={24} />
        ) : (
          <SvgIndex.Heart />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => {}}>
        {isFocused === 2 ? (
          <SvgIndex.ProfileFocus height={24} width={24} />
        ) : (
          <SvgIndex.ProfileFocus height={24} width={24} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowView}
        activeOpacity={0.7}
        onPress={() => {}}>
        {isFocused === 3 ? <SvgIndex.HomeBold /> : <SvgIndex.HomeRegular />}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeBottomTabs;
