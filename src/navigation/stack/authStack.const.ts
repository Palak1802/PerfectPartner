import BottomTab from '@navigation/bottomTab/BottomTab';
import screenName from '@navigation/screenName';
import AdditionalPhoto from '@screens/auth/additionalPhoto/AdditionalPhoto';
import CreateAccount from '@screens/auth/createAccount/CreateAccount';
import CreateProfile from '@screens/auth/createProfile/CreateProfile';
import EducationDetail from '@screens/auth/educationDetail/EducationDetail';
import FamilyDetail from '@screens/auth/familyDetail/FamilyDetail';
import GetStarted from '@screens/auth/getStarted/GetStarted';
import Hobby from '@screens/auth/hobby/Hobby';
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
  {
    name: screenName.additionalPhoto,
    component: AdditionalPhoto,
  },
  {
    name: screenName.hobby,
    component: Hobby,
  },
  {
    name: screenName.familyDetail,
    component: FamilyDetail,
  },
  {
    name: screenName.bottomTab,
    component: BottomTab,
  },
];
