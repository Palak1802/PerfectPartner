import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authStackData} from './authStack.const';
import {useAppSelector} from '@hooks/useRedux';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  const {token} = useAppSelector(state => state?.userReducer);
  //** Handle initial screen  */
  const getInitialRouteName = () => {
    return token ? 'getStarted' : 'getStarted';
  };
  const initialRoute = useMemo(() => getInitialRouteName(), [token]);

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
      }}>
      {authStackData?.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
