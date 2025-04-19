import useAppState from '@hooks/useAppState';
const peopleList = [{id: 1, title: 'Palak', age: '25'}];
const useHome = () => {
  const [value, setValue] = useAppState({
    userList: [],
    liked: [],
  });
  const onItemPress = (item: any) => {};
  const onPressWishlist = (item: any) => {};
  return {value, setValue, onItemPress, onPressWishlist};
};

export default useHome;
