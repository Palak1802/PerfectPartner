import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useOtherExtraDetail = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState<OtherExtraDetailStateProps>({
    maritalStatus: undefined,
    maritalStatusModal: false,
    isChildren: false,
    children: undefined,
    childrenModal: false,
    diet: undefined,
    dietModal: false,
    height: undefined,
    heightModal: false,
    community: undefined,
  });
  const onInputClick = (type: string) => {
    if (type === 'marital') {
      setValue('maritalStatusModal', !value?.maritalStatusModal);
    } else if (type === 'children') {
      setValue('childrenModal', !value?.childrenModal);
    } else if (type === 'diet') {
      setValue('dietModal', !value?.dietModal);
    } else if (type === 'height') {
      setValue('heightModal', !value?.heightModal);
    }
  };
  const onCloseModal = () => {
    setValue('maritalStatusModal', false);
    setValue('childrenModal', false);
    setValue('dietModal', false);
    setValue('heightModal', false);
  };
  const onNextPress = () => {
    navigation.navigate('educationDetail');
  };
  const onPressItem = (item: string, type: string) => {
    if (type === 'marital') {
      setValue('maritalStatusModal', false);
      setValue('maritalStatus', item);
      if (item !== 'Never Married' && item !== 'Annulled') {
        setValue('isChildren', true);
      } else {
        setValue('isChildren', false);
      }
    } else if (type === 'children') {
      setValue('childrenModal', false);
      setValue('children', item);
    } else if (type === 'diet') {
      setValue('dietModal', false);
      setValue('diet', item);
    } else if (type === 'height') {
      setValue('heightModal', false);
      setValue('height', item);
    }
  };
  return {
    value,
    setValue,
    onCloseModal,
    onInputClick,
    onNextPress,
    onPressItem,
  };
};

export default useOtherExtraDetail;
