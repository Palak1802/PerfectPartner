import screenName from '@navigation/screenName';
import CreateAccount from '@screens/auth/createAccount/CreateAccount';
import CreateProfile from '@screens/auth/createProfile/CreateProfile';
import EducationDetail from '@screens/auth/educationDetail/EducationDetail';
import GetStarted from '@screens/auth/getStarted/GetStarted';
import Login from '@screens/auth/login/Login';
import OtherExtraDetail from '@screens/auth/otherExtraDetail/OtherExtraDetail';
import Otp from '@screens/auth/otp/Otp';
import SocialDetail from '@screens/auth/socialDetail/SocialDetail';

export const authStackData = [
  {
    name: screenName.getStarted,
    component: GetStarted,
  },
  {
    name: screenName.login,
    component: Login,
  },
  {
    name: screenName.createAccount,
    component: CreateAccount,
  },
  {
    name: screenName.createProfile,
    component: CreateProfile,
  },
  {
    name: screenName.otp,
    component: Otp,
  },
  {
    name: screenName.socialDetail,
    component: SocialDetail,
  },
  {
    name: screenName.otherExtraDetail,
    component: OtherExtraDetail,
  },
  {
    name: screenName.educationDetail,
    component: EducationDetail,
  },
];
