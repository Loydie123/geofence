import { Modal } from 'react-native';
import AccountScreen from '../../screens/account';

interface AccountModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AccountModal({ visible, onClose }: AccountModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <AccountScreen onClose={onClose} />
    </Modal>
  );
} 