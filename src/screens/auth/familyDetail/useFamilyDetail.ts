import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useFamilyDetail = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState({});
  const onNextPress = () => {
    // navigation.navigate('')
  };
  return {};
};

export default useFamilyDetail;
