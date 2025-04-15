import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

interface FamilyDetailProps {
  fatherStatus: string | undefined;
  fatherStatusModal: boolean;
  motherStatus: string | undefined;
  motherStatusModal: boolean;
  brotherStatus: string | undefined;
  brotherStatusModal: boolean;
  sisterStatus: string | undefined;
  sisterStatusModal: boolean;
}
const useFamilyDetail = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState<FamilyDetailProps>({
    fatherStatus: undefined,
    fatherStatusModal: false,
    motherStatus: undefined,
    motherStatusModal: false,
    brotherStatus: undefined,
    brotherStatusModal: false,
    sisterStatus: undefined,
    sisterStatusModal: false,
  });
  const onNextPress = () => {
    // navigation.navigate('')
  };
  const onPressLeftText = () => {};
  const onPressItem = (item: string, type: string) => {
    if (type === 'father') {
      setValue('fatherStatusModal', !value?.fatherStatusModal);
      setValue('fatherStatus', item);
    } else if (type === 'mother') {
      setValue('motherStatusModal', !value?.motherStatusModal);
      setValue('motherStatus', item);
    } else if (type === 'brother') {
      setValue('brotherStatusModal', !value?.brotherStatusModal);
      setValue('brotherStatus', item);
    } else if (type === 'sister') {
      setValue('sisterStatusModal', !value?.sisterStatusModal);
      setValue('sisterStatus', item);
    }
  };
  const onCloseModal = () => {
    setValue('fatherStatusModal', false);
    setValue('motherStatusModal', false);
    setValue('sisterStatusModal', false);
    setValue('brotherStatusModal', false);
  };
  const onInputClick = (type: string) => {
    if (type === 'father') {
      setValue('fatherStatusModal', !value?.fatherStatusModal);
    } else if (type === 'mother') {
      setValue('motherStatusModal', !value?.motherStatusModal);
    } else if (type === 'brother') {
      setValue('brotherStatusModal', !value?.brotherStatusModal);
    } else if (type === 'sister') {
      setValue('sisterStatusModal', !value?.sisterStatusModal);
    }
  };
  return {
    value,
    onPressItem,
    onPressLeftText,
    onCloseModal,
    onNextPress,
    onInputClick,
  };
};

export default useFamilyDetail;
