import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useAdditionalPhoto = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState({});
  const onNextPress = () => {
    // navigation.navigate('')
  };
  const onPressItem = (index: number) => {};
  return {onPressItem};
};

export default useAdditionalPhoto;
