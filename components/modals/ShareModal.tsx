import { Modal, View, Text, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ShareModal({ visible, onClose }: ShareModalProps) {
  const [isEnabled, setIsEnabled] = useState(false);

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
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-base font-medium text-gray-800">Location Sharing</Text>
                <Text className="text-sm text-gray-500 mt-1">
                  {isEnabled ? 'Your location is visible to friends' : 'Your location is private'}
                </Text>
              </View>
              <Switch
                trackColor={{ false: '#D1D5DB', true: '#BBF7D0' }}
                thumbColor={isEnabled ? '#90EE90' : '#9CA3AF'}
                onValueChange={() => setIsEnabled(prev => !prev)}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
} 