import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';
import ImagePicker from 'react-native-image-crop-picker';

const useAdditionalPhoto = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState({});
  const selectImage = (index: number) => {
    ImagePicker.openPicker({height: 120, width: 150})
      .then(res => console.log('res', res))
      .catch(e => console.log('e', e));
  };
  const onPressItem = (index: number) => {};
  const onPressLeftText = () => {};
  const onNextPress = () => {
    navigation.navigate('hobby');
  };
  return {onPressItem, selectImage, onPressLeftText, onNextPress};
};

export default useAdditionalPhoto;
