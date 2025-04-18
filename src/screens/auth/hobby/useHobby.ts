import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useHobby = () => {
  const navigation = useAuthNavigation();
  const [value, setValue] = useAppState<{selectedHobbies?: string[]}>({
    selectedHobbies: undefined,
  });
  const onNextPress = () => {
    // navigation.navigate('')
  };
  const onPressLeftText = () => {};
  console.log('value?.selectedHobbies', value?.selectedHobbies);
  const onItemPress = (item: any) => {
    console.log('item', item);
    if (value?.selectedHobbies?.includes(item)) {
      let temp = value?.selectedHobbies?.filter(val => val === item?.title);
      console.log('temp if', temp);
      setValue('selectedHobbies', temp);
    } else {
      let temp = value?.selectedHobbies?.push(item?.title);
      console.log('temp else', temp);
      setValue('selectedHobbies', temp);
    }
  };
  const onContinue = () => {
    navigation.navigate('familyDetail');
  };
  return {onPressLeftText, onContinue, onItemPress};
};

export default useHobby;
