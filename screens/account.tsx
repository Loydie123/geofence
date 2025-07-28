import { View, Text, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface AccountSetting {
  id: string;
  title: string;
  description: string;
  type: 'toggle' | 'action';
  icon: string;
  value?: boolean;
  onPress?: () => void;
}

export default function AccountScreen({ onClose }: { onClose: () => void }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const handleSignOut = () => {
    // TODO: Implement sign out functionality
    onClose();
  };

  const settings: AccountSetting[] = [
    {
      id: 'notifications',
      title: 'Push Notifications',
      description: 'Get notified about friend requests and location alerts',
      type: 'toggle',
      icon: 'bell-ring',
      value: notificationsEnabled,
      onPress: () => setNotificationsEnabled(prev => !prev)
    },
    {
      id: 'location',
      title: 'Location Services',
      description: 'Allow app to access your location in background',
      type: 'toggle',
      icon: 'map-marker',
      value: locationEnabled,
      onPress: () => setLocationEnabled(prev => !prev)
    },
    {
      id: 'privacy',
      title: 'Privacy Settings',
      description: 'Manage your data and privacy preferences',
      type: 'action',
      icon: 'shield-lock',
      onPress: () => {}
    },
    {
      id: 'help',
      title: 'Help & Support',
      description: 'Get help with the app and report issues',
      type: 'action',
      icon: 'help-circle',
      onPress: () => {}
    }
  ];

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white shadow-sm">
        <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
          <View className="flex-row items-center">
            <Image 
              source={require('../assets/images/geofence.png')}
              className="w-10 h-10"
              resizeMode="contain"
            />
            <Text className="text-xl font-semibold ml-2">Account</Text>
          </View>
          <TouchableOpacity 
            className="w-8 h-8 items-center justify-center rounded-full bg-gray-50"
            onPress={onClose}
          >
            <MaterialCommunityIcons name="close" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-6">
          {/* Profile Section */}
          <View className="bg-white rounded-xl p-4 mb-6">
            <View className="flex-row items-center">
              <Image 
                source={require('../assets/profile.jpg')}
                className="w-20 h-20 rounded-full"
              />
              <View className="ml-4 flex-1">
                <Text className="text-xl font-semibold text-gray-800">
                  John Doe
                </Text>
                <Text className="text-gray-500">
                  john.doe@example.com
                </Text>
              </View>
              <TouchableOpacity 
                className="p-2 rounded-full bg-gray-50"
                onPress={() => {}}
              >
                <MaterialCommunityIcons name="pencil" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings Section */}
          <Text className="text-base font-medium text-gray-800 mb-4">Settings</Text>
          {settings.map(setting => (
            <View 
              key={setting.id}
              className="bg-white rounded-xl mb-3 p-4"
            >
              <View className="flex-row items-center">
                <View className="bg-[#f0fdf4] p-2 rounded-lg">
                  <MaterialCommunityIcons 
                    name={setting.icon as any} 
                    size={24} 
                    color="#90EE90" 
                  />
                </View>
                <View className="ml-3 flex-1">
                  <Text className="text-base font-medium text-gray-800">
                    {setting.title}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {setting.description}
                  </Text>
                </View>
                {setting.type === 'toggle' ? (
                  <Switch
                    value={setting.value}
                    onValueChange={setting.onPress}
                    trackColor={{ false: '#d1d5db', true: '#90EE90' }}
                    thumbColor={setting.value ? '#fff' : '#fff'}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={setting.onPress}
                    className="p-2 rounded-full active:bg-gray-100"
                  >
                    <MaterialCommunityIcons 
                      name="chevron-right" 
                      size={20} 
                      color="#666" 
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}

          {/* Sign Out Button */}
          <TouchableOpacity 
            className="mt-6 mb-8 bg-red-50 rounded-xl p-4 flex-row items-center justify-center"
            onPress={handleSignOut}
          >
            <MaterialCommunityIcons name="logout" size={20} color="#FF6B6B" />
            <Text className="ml-2 text-[#FF6B6B] font-medium">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 