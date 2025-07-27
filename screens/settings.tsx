import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen({ onClose }: { onClose: () => void }) {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white shadow-sm">
        <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="shield-check" size={28} color="#90EE90" />
            <Text className="text-xl font-semibold ml-2">CommuteSafe</Text>
          </View>
          <TouchableOpacity 
            className="w-8 h-8 items-center justify-center rounded-full bg-gray-50"
            onPress={onClose}
          >
            <MaterialCommunityIcons name="close" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 pt-6">
        <TouchableOpacity 
          className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl active:bg-gray-50 mb-2"
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
          className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl active:bg-gray-50 mb-2"
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

        <TouchableOpacity 
          className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl active:bg-gray-50"
          onPress={() => {}}
        >
          <View className="bg-[#f0fdf4] p-2 rounded-lg">
            <MaterialCommunityIcons name="account-group" size={24} color="#90EE90" />
          </View>
          <View className="ml-3">
            <Text className="text-base font-medium text-gray-800">Track Friends</Text>
            <Text className="text-sm text-gray-500">Monitor friends' locations</Text>
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