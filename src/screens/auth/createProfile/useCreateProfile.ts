import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useCreateProfile = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState<CreateProfileValueProps>({
    firstName: undefined,
    lastName: undefined,
    mobile: undefined,
    email: undefined,
    gender: undefined,
    dateOfBirth: undefined,
    password: undefined,
    confirmPassword: undefined,
    aboutUs: undefined,
    loading: false,
    firstNameError: undefined,
    lastNameError: undefined,
    mobileError: undefined,
    emailError: undefined,
    genderError: undefined,
    dateOfBirthError: undefined,
    passwordError: undefined,
    confirmPasswordError: undefined,
    aboutUsError: undefined,
    genderModal: false,
  });
  const onNext = () => {
    navigation.navigate('otp');
  };
  const onGenderClick = () => {
    setValue('genderModal', !value?.genderModal);
  };
  const onCloseModal = () => {
    setValue('genderModal', false);
  };
  const onPressItem = (item: string) => {
    setValue('genderModal', false);
    setValue('gender', item);
  };
  return {value, setValue, onNext, onGenderClick, onCloseModal, onPressItem};
};

export default useCreateProfile;
