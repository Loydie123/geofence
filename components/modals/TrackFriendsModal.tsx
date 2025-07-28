import { Modal } from 'react-native';
import TrackFriendsScreen from '../../screens/track-friends';

interface TrackFriendsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function TrackFriendsModal({ visible, onClose }: TrackFriendsModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <TrackFriendsScreen onClose={onClose} />
    </Modal>
  );
} 