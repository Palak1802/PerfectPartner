interface CreateProfileValueProps {
  firstName: string | undefined;
  lastName: string | undefined;
  mobile: string | undefined;
  email: string | undefined;
  gender: string | undefined;
  dateOfBirth: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  aboutUs: string | undefined;
  loading: boolean;
  firstNameError: string | undefined;
  lastNameError: string | undefined;
  mobileError: string | undefined;
  emailError: string | undefined;
  genderError: string | undefined;
  dateOfBirthError: string | undefined;
  passwordError: string | undefined;
  confirmPasswordError: string | undefined;
  aboutUsError: string | undefined;
  genderModal: boolean;
}
