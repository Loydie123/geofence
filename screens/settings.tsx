import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen({ onClose }: { onClose: () => void }) {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-6 pt-14 pb-4 border-b border-gray-100">
        <Text className="text-xl font-semibold">CommuteSafe</Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialCommunityIcons name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <View className="px-6 pt-6">
        <TouchableOpacity 
          className="flex-row items-center bg-[#90EE90] rounded-xl px-4 py-3"
          onPress={() => {}}
        >
          <MaterialCommunityIcons name="map-marker-plus" size={24} color="white" />
          <Text className="ml-2 text-white font-medium text-base">Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 