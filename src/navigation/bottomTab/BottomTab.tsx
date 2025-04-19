import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomTabList} from './bottomTab.const';
import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator();

export type BottomTabProps = {Home: undefined};

export type BottomTabNavigationProps = BottomTabNavigationProp<BottomTabProps>;

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      {BottomTabList?.map(screen => (
        <Tab.Screen
          key={screen?.id}
          name={screen?.name}
          component={screen?.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
