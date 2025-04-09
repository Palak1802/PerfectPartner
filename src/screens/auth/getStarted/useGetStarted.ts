import {useAuthNavigation} from '@hooks/useAppNavigation';

const useGetStarted = () => {
  const navigation = useAuthNavigation();
  const onLoginButton = () => {
    navigation.navigate('login');
  };
  const onSignupButton = () => {
    navigation.navigate('createAccount');
  };
  return {
    onLoginButton,
    onSignupButton,
  };
};

export default useGetStarted;
