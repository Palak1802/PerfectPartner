import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useHobby = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState({});
  const onNextPress = () => {
    // navigation.navigate('')
  };
  const onPressLeftText = () => {};
  return {onPressLeftText};
};

export default useHobby;
