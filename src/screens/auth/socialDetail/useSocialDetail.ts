import useAppState from '@hooks/useAppState';

const useSocialDetail = () => {
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
    }
  };
  const onCloseModal = () => {
    setValue('religionModal', !value?.religionModal);
    setValue('communityModal', !value?.communityModal);
    setValue('livingInModal', !value?.livingInModal);
  };
  const onPressReligionItem = (item: any, type: string) => {
    if (type === 'religion') {
      setValue('religionModal', !value?.religionModal);
      setValue('religion', item);
    } else if (type === 'community') {
      setValue('communityModal', !value?.communityModal);
      setValue('community', item);
    } else if (type === 'livingIn') {
      setValue('livingInModal', !value?.livingInModal);
      setValue('livingIn', item);
    }
  };
  return {value, onInputClick, onCloseModal, onPressReligionItem};
};

export default useSocialDetail;
