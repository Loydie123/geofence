import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ShareModal({ visible, onClose }: ShareModalProps) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
    >
      <View className="flex-1 bg-black/50 items-center justify-center">
        <View className="bg-white rounded-2xl w-[320px]">
          <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-semibold">Share Location</Text>
              <TouchableOpacity 
                className="w-8 h-8 items-center justify-center rounded-full bg-gray-50"
                onPress={onClose}
              >
                <MaterialCommunityIcons name="close" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="p-6">
            {/* Content will go here */}
          </View>
        </View>
      </View>
    </Modal>
  );
} 