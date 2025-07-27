import { Modal } from 'react-native';
import SettingsScreen from '../../screens/settings';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SettingsScreen onClose={onClose} />
    </Modal>
  );
} 