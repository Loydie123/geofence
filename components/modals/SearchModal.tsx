import { Modal, View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SearchModal({ visible, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = [
    'Mall of Asia',
    'SM Megamall',
    'Glorietta',
    'BGC',
  ];

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-gray-50">
        <View className="bg-white shadow-sm">
          <View className="flex-row items-center justify-between px-6 pt-14 pb-4">
            <View className="flex-row items-center">
              <Image 
                source={require('../../assets/images/geofence.png')}
                className="w-10 h-10"
                resizeMode="contain"
              />
              <Text className="text-xl font-semibold ml-2">Search Places</Text>
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
          <View className="flex-row items-center bg-white rounded-xl px-4 mb-6">
            <MaterialCommunityIcons name="magnify" size={20} color="#666" />
            <TextInput
              className="flex-1 py-3 px-2 text-base"
              placeholder="Search for a place"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearchQuery('')}
                className="p-2"
              >
                <MaterialCommunityIcons name="close-circle" size={20} color="#666" />
              </TouchableOpacity>
            )}
          </View>

          <Text className="text-base font-medium text-gray-800 mb-4">Recent Searches</Text>
          <ScrollView>
            {recentSearches.map((search, index) => (
              <TouchableOpacity 
                key={index}
                className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl mb-2"
                onPress={() => {
                  setSearchQuery(search);
                }}
              >
                <View className="bg-[#f0fdf4] p-2 rounded-lg">
                  <MaterialCommunityIcons name="history" size={24} color="#90EE90" />
                </View>
                <View className="ml-3 flex-1">
                  <Text className="text-base text-gray-800">{search}</Text>
                </View>
                <MaterialCommunityIcons 
                  name="chevron-right" 
                  size={24} 
                  color="#666" 
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
} 