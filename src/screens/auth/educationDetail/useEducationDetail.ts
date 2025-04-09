import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useEducationDetail = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState<EducationDetailStateProps>({
    study: undefined,
    studyModal: false,
    schoolName: undefined,
    sector: undefined,
    sectorModal: false,
    workAs: undefined,
    currentCompany: undefined,
    ctc: undefined,
    ctcModal: false,
  });
  const onInputPress = (type: string) => {
    if (type === 'study') {
      setValue('studyModal', !value?.studyModal);
    } else if (type === 'sector') {
      setValue('sectorModal', !value?.sectorModal);
    } else if (type === 'CTC') {
      setValue('ctcModal', !value?.ctcModal);
    }
  };
  const onPressItem = (item: string, type: string) => {
    if (type === 'study') {
      setValue('studyModal', false);
      setValue('study', item);
    } else if (type === 'sector') {
      setValue('sectorModal', false);
      setValue('sector', item);
    } else if (type === 'CTC') {
      setValue('ctcModal', false);
      setValue('ctc', item);
    }
  };
  const onCloseModal = () => {
    setValue('studyModal', false);
    setValue('sectorModal', false);
    setValue('ctcModal', false);
  };
  const onNextPress = () => {
    navigation.navigate('additionalPhoto');
  };
  return {
    value,
    setValue,
    onInputPress,
    onCloseModal,
    onPressItem,
    onNextPress,
  };
};

export default useEducationDetail;
