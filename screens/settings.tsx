import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

export default function SettingsScreen({ onClose }: { onClose: () => void }) {
  const { handleSignOut } = useAuth();
  
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-14 pb-4 border-b border-gray-100">
        <Text className="text-xl font-semibold">Settings</Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialCommunityIcons name="close" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-6 pt-4">
        {/* Account Section */}
        <View className="mb-8">
          <Text className="text-sm font-medium text-gray-400 mb-4">ACCOUNT</Text>
          <TouchableOpacity 
            className="flex-row items-center py-3"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="account" size={24} color="#90EE90" />
            <Text className="ml-3 text-base">Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row items-center py-3"
            onPress={handleSignOut}
          >
            <MaterialCommunityIcons name="logout" size={24} color="#FF4444" />
            <Text className="ml-3 text-base text-red-500">Sign Out</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications Section */}
        <View className="mb-8">
          <Text className="text-sm font-medium text-gray-400 mb-4">NOTIFICATIONS</Text>
          <View className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="bell" size={24} color="#90EE90" />
              <Text className="ml-3 text-base">Push Notifications</Text>
            </View>
            <Switch 
              trackColor={{ false: '#D1D5DB', true: '#BBF7D0' }}
              thumbColor={true ? '#90EE90' : '#9CA3AF'}
              onValueChange={() => {}}
              value={true}
            />
          </View>
        </View>

        {/* Geofence Settings */}
        <View className="mb-8">
          <Text className="text-sm font-medium text-gray-400 mb-4">GEOFENCE</Text>
          <TouchableOpacity 
            className="flex-row items-center py-3"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="map-marker-radius" size={24} color="#90EE90" />
            <Text className="ml-3 text-base">Manage Geofences</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row items-center py-3"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="history" size={24} color="#90EE90" />
            <Text className="ml-3 text-base">Location History</Text>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View>
          <Text className="text-sm font-medium text-gray-400 mb-4">ABOUT</Text>
          <TouchableOpacity 
            className="flex-row items-center py-3"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="information" size={24} color="#90EE90" />
            <Text className="ml-3 text-base">Version 1.0.0</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row items-center py-3"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="shield-check" size={24} color="#90EE90" />
            <Text className="ml-3 text-base">Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 