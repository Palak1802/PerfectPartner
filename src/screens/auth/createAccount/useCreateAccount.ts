import {useAuthNavigation} from '@hooks/useAppNavigation';

const useCreateAccount = () => {
  const navigation = useAuthNavigation();

  const onItemClick = (item: any) => {
    navigation.navigate('createProfile');
  };
  return {onItemClick};
};

export default useCreateAccount;
