import color from '@theme/color';
import font from '@theme/fonts';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  sheetContent: {
    flex: 1,
  },
  doneLabelStyle: {
    fontFamily: font.montserratMedium,
    fontSize: 14,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'blue',
  },
  selectOptionBottomSheetStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: font.montserratRegular,
    fontWeight: '400',
    color: color.offWhite,
  },
  selectActiveOptionBottomSheetStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: font.montserratRegular,
    fontWeight: '600',
    color: color.black,
  },
  bottomSheetList: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mainView: {
    flexDirection: 'column',
  },
  label: {
    fontFamily: font.montserratSemiBold,
    fontSize: 13,
    fontWeight: '600',
    color: color.black,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical: 9,
    backgroundColor: color.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16.34,
    fontWeight: '400',
    fontFamily: font.montserratRegular,
    color: color.offWhite,
  },
  valueText: {
    fontFamily: font.montserratSemiBold,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16.34,
    flex: 1,
    color: color.black,
  },
  itemDivider: {
    height: 1,
    backgroundColor: color.lightGrey,
  },
  itemRow: {
    paddingHorizontal: 11,
    paddingVertical: 12,
    backgroundColor: color.offWhite,
  },
  titleText: {
    fontFamily: font.montserratRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: color.black,
  },
  innerLable: {
    color: color.lightGrey,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: font.montserratRegular,
    marginBottom: 6,
  },
  valueView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIconStyle: {
    height: 36,
    width: 36,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 13,
    backgroundColor: color.black,
  },
  filterRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  openDropdown: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 150,
    zIndex: 1,
    backgroundColor: color.offWhite,
  },
  arrowView: {
    height: 24,
    width: 24,
  },
  innerLableView: {
    flex: 1,
  },
  isMatch: {
    fontWeight: '600',
    fontFamily: font.montserratSemiBold,
  },
  dropdownView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorLabel: {
    fontSize: 10,
    color: color.error,
    fontFamily: font.montserratRegular,
    fontWeight: '400',
  },

  handleStyle: {
    height: 0,
    paddingTop: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: color.offWhite,
  },
  handleIndicatorStyle: {
    display: 'none',
  },
  backgroundStyle: {
    backgroundColor: color.offWhite,
  },
  wheelPicker: {
    width: '100%',
    height: '100%',
  },
  itemFontStyle: {
    fontSize: 18,
  },
});
export default style;
