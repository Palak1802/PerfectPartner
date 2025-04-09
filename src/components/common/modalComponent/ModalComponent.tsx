import React, {FC, memo} from 'react';
import {Modal, ModalProps, View, ViewStyle} from 'react-native';
import styles from './modalComponent.style';
import {CustomStatusBar} from '@components';

interface ModalComponentProps {
  visible: boolean;
  animationType?: 'none' | 'slide' | 'fade';
  containerStyle?: ViewStyle;
  modalProp?: ModalProps;
  children: React.ReactNode;
  statusBar?: boolean;
  onRequestClose?: () => void;
}
const ModalComponent: FC<ModalComponentProps> = ({
  children,
  visible,
  animationType,
  containerStyle,
  statusBar,
  modalProp,
  onRequestClose,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      statusBarTranslucent
      transparent
      onRequestClose={onRequestClose}
      {...modalProp}>
      {statusBar && <CustomStatusBar />}
      <View style={[styles.container, containerStyle]}>{children}</View>
    </Modal>
  );
};

export default memo(ModalComponent);
