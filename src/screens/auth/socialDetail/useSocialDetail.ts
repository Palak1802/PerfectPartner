import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useSocialDetail = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState({
    religion: undefined,
    community: undefined,
    livingIn: undefined,
    state: undefined,
    city: undefined,
    religionModal: false,
    communityModal: false,
    livingInModal: false,
    stateModal: false,
    cityModal: false,
    loading: false,
  });
  const onInputClick = (type: string) => {
    if (type === 'religion') {
      setValue('religionModal', !value?.religionModal);
    } else if (type === 'community') {
      setValue('communityModal', !value?.communityModal);
    } else if (type === 'livingIn') {
      setValue('livingInModal', !value?.livingInModal);
    } else if (type === 'state') {
      setValue('stateModal', !value?.stateModal);
    } else if (type === 'city') {
      setValue('cityModal', !value?.cityModal);
    }
  };
  const onCloseModal = () => {
    setValue('religionModal', false);
    setValue('communityModal', false);
    setValue('livingInModal', false);
    setValue('stateModal', false);
    setValue('cityModal', false);
  };
  const onPressReligionItem = (item: string, type: string) => {
    if (type === 'religion') {
      setValue('religionModal', false);
      setValue('religion', item);
    } else if (type === 'community') {
      setValue('communityModal', false);
      setValue('community', item);
    } else if (type === 'livingIn') {
      setValue('livingInModal', false);
      setValue('livingIn', item);
    } else if (type === 'state') {
      setValue('stateModal', false);
      setValue('state', item);
    } else if (type === 'city') {
      setValue('cityModal', false);
      setValue('city', item);
    }
  };
  const onNextPress = () => {
    navigation.navigate('otherExtraDetail');
  };
  return {value, onInputClick, onCloseModal, onPressReligionItem, onNextPress};
};

export default useSocialDetail;
