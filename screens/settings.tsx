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
          className="flex-row items-center py-4 px-4 border border-gray-100 rounded-xl active:bg-gray-50 mb-2"
          onPress={() => {}}
        >
          <View className="bg-[#f0fdf4] p-2 rounded-lg">
            <MaterialCommunityIcons name="map-marker-plus" size={24} color="#90EE90" />
          </View>
          <View className="ml-3">
            <Text className="text-base font-medium text-gray-800">Create</Text>
            <Text className="text-sm text-gray-500">Add a new geofence location</Text>
          </View>
          <MaterialCommunityIcons 
            name="chevron-right" 
            size={24} 
            color="#666" 
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center py-4 px-4 border border-gray-100 rounded-xl active:bg-gray-50"
          onPress={() => {}}
        >
          <View className="bg-[#f0fdf4] p-2 rounded-lg">
            <MaterialCommunityIcons name="bell-ring" size={24} color="#90EE90" />
          </View>
          <View className="ml-3">
            <Text className="text-base font-medium text-gray-800">Monitor Alert</Text>
            <Text className="text-sm text-gray-500">Manage your alert settings</Text>
          </View>
          <MaterialCommunityIcons 
            name="chevron-right" 
            size={24} 
            color="#666" 
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
} 