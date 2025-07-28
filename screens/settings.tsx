import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import TrackFriendsModal from '../components/modals/TrackFriendsModal';

export default function SettingsScreen({ onClose }: { onClose: () => void }) {
  const [isTrackFriendsVisible, setIsTrackFriendsVisible] = useState(false);

  return (
    <View className="flex-1 bg-gray-50">
      <TrackFriendsModal 
        visible={isTrackFriendsVisible}
        onClose={() => setIsTrackFriendsVisible(false)}
      />
      
      <View className="bg-white shadow-sm">
        <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
          <View className="flex-row items-center">
            <Image 
              source={require('../assets/images/geofence.png')}
              className="w-10 h-10"
              resizeMode="contain"
            />
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

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
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
            className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl active:bg-gray-50 mb-8"
            onPress={() => setIsTrackFriendsVisible(true)}
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

          <Text className="text-base font-medium text-gray-800 mb-4">Communicate with Us</Text>

          <TouchableOpacity 
            className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl active:bg-gray-50 mb-2"
            onPress={() => {}}
          >
            <View className="bg-[#f0fdf4] p-2 rounded-lg">
              <MaterialCommunityIcons name="message-text" size={24} color="#90EE90" />
            </View>
            <View className="ml-3">
              <Text className="text-base font-medium text-gray-800">Feedback</Text>
              <Text className="text-sm text-gray-500">Share your thoughts with us</Text>
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
              <MaterialCommunityIcons name="star" size={24} color="#90EE90" />
            </View>
            <View className="ml-3">
              <Text className="text-base font-medium text-gray-800">Rate and Review</Text>
              <Text className="text-sm text-gray-500">Rate us</Text>
            </View>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color="#666" 
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>

          <Text className="text-base font-medium text-gray-800 mt-8 mb-4">App</Text>

          <TouchableOpacity 
            className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl active:bg-gray-50 mb-2"
            onPress={() => {}}
          >
            <View className="bg-[#f0fdf4] p-2 rounded-lg">
              <MaterialCommunityIcons name="lightbulb" size={24} color="#90EE90" />
            </View>
            <View className="ml-3">
              <Text className="text-base font-medium text-gray-800">Tips</Text>
              <Text className="text-sm text-gray-500">Learn how to use the app</Text>
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
              <MaterialCommunityIcons name="information" size={24} color="#90EE90" />
            </View>
            <View className="ml-3">
              <Text className="text-base font-medium text-gray-800">About</Text>
              <Text className="text-sm text-gray-500">Version and legal info</Text>
            </View>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color="#666" 
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>

          <Text className="text-base font-medium text-gray-800 mt-8 mb-4">Account</Text>

          <View className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl mb-2">
            <Image 
              source={require('../assets/profile.jpg')}
              className="w-14 h-14 rounded-full"
            />
            <View className="ml-3">
              <Text className="text-base font-medium text-gray-800">John Doe</Text>
              <Text className="text-sm text-gray-500">john.doe@example.com</Text>
            </View>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color="#666" 
              style={{ marginLeft: 'auto' }}
            />
          </View>
        </View>
        
        <View className="h-8" />
      </ScrollView>
    </View>
  );
} 