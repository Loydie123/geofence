import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Friend, MOCK_FRIENDS, FRIEND_ACTIONS } from '../constants/friends';

export default function TrackFriendsScreen({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState<Friend[]>(MOCK_FRIENDS);
  const [friendCode, setFriendCode] = useState('');
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [showActionModal, setShowActionModal] = useState(false);

  const handleAddFriend = () => {
    if (!friendCode.trim()) {
      Alert.alert('Error', 'Please enter a friend code');
      return;
    }
    Alert.alert('Success', 'Friend request sent successfully');
    setFriendCode('');
    setIsAddingFriend(false);
  };

  const handleUnfriend = (friendId: string, friendName: string) => {
    Alert.alert(
      'Unfriend Confirmation',
      `Are you sure you want to unfriend ${friendName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Unfriend',
          style: 'destructive',
          onPress: () => {
            setFriends(currentFriends => currentFriends.filter(friend => friend.id !== friendId));
            Alert.alert('Success', `${friendName} has been removed from your friends list`);
            setShowActionModal(false);
          }
        }
      ]
    );
  };

  const handleTrackLocation = (friendName: string) => {
    Alert.alert('Track Location', `Starting to track ${friendName}'s location`);
    setShowActionModal(false);
  };

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
            <Text className="text-xl font-semibold ml-2">Track Friends</Text>
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
          <View className="flex-row items-center bg-white rounded-xl px-4 mb-6">
            <MaterialCommunityIcons name="magnify" size={20} color="#666" />
            <TextInput
              className="flex-1 py-3 px-2 text-base"
              placeholder="Search friends"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <View className="bg-white border border-gray-100 rounded-xl mb-6 overflow-hidden">
            <TouchableOpacity 
              className="flex-row items-center py-4 px-4 active:bg-gray-50"
              onPress={() => setIsAddingFriend(!isAddingFriend)}
            >
              <View className="bg-[#f0fdf4] p-2 rounded-lg">
                <MaterialCommunityIcons name="account-plus" size={24} color="#90EE90" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-base font-medium text-gray-800">Add New Friend</Text>
                <Text className="text-sm text-gray-500">Enter friend's code to connect</Text>
              </View>
              <MaterialCommunityIcons 
                name={isAddingFriend ? "chevron-up" : "chevron-down"}
                size={24} 
                color="#666" 
              />
            </TouchableOpacity>

            {isAddingFriend && (
              <View className="px-4 pb-4">
                <View className="flex-row items-center">
                  <TextInput
                    className="flex-1 py-3 px-4 bg-gray-50 rounded-l-xl text-base"
                    placeholder="Enter friend code"
                    value={friendCode}
                    onChangeText={setFriendCode}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity 
                    className="bg-[#90EE90] py-3 px-6 rounded-r-xl active:bg-[#7acc7a]"
                    onPress={handleAddFriend}
                  >
                    <Text className="text-white font-medium">Add</Text>
                  </TouchableOpacity>
                </View>
                <Text className="text-xs text-gray-500 mt-2">
                  Your friend code: COMM-1234-SAFE
                </Text>
              </View>
            )}
          </View>

          <Text className="text-base font-medium text-gray-800 mb-4">Your Friends</Text>
          
          {friends.map(friend => (
            <TouchableOpacity 
              key={friend.id}
              className="flex-row items-center py-4 px-4 bg-white border border-gray-100 rounded-xl mb-3"
              onPress={() => {}}
            >
              <View className="relative">
                <Image 
                  source={{ uri: friend.avatar }}
                  className="w-12 h-12 rounded-full"
                />
                <View 
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-base font-medium text-gray-800">{friend.name}</Text>
                <Text className="text-sm text-gray-500">{friend.email}</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-xs text-gray-500 mr-2">
                  {friend.status === 'online' ? 'Online' : friend.lastSeen}
                </Text>
                <TouchableOpacity 
                  className="p-1 rounded-full active:bg-gray-100"
                  onPress={() => {
                    setSelectedFriend(friend);
                    setShowActionModal(true);
                  }}
                >
                  <MaterialCommunityIcons 
                    name="dots-vertical" 
                    size={22} 
                    color="#666" 
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}

          {friends.length === 0 && (
            <View className="items-center justify-center py-8">
              <MaterialCommunityIcons name="account-group-outline" size={48} color="#666" />
              <Text className="text-base text-gray-500 mt-2">No friends added yet</Text>
            </View>
          )}
        </View>
        
        <View className="h-8" />
      </ScrollView>

      <Modal
        visible={showActionModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowActionModal(false)}
      >
        <TouchableOpacity 
          className="flex-1 bg-black/30"
          activeOpacity={1}
          onPress={() => setShowActionModal(false)}
        >
          <View className="flex-1 justify-end">
            <View className="bg-white rounded-t-3xl">
              <View className="items-center pt-2 pb-4">
                <View className="w-10 h-1 bg-gray-300 rounded-full mb-2" />
                <Text className="text-lg font-semibold text-gray-800">
                  {selectedFriend?.name}
                </Text>
                <Text className="text-sm text-gray-500">
                  {selectedFriend?.email}
                </Text>
              </View>

              <TouchableOpacity 
                className="flex-row items-center px-6 py-4 active:bg-gray-50"
                onPress={() => selectedFriend && handleTrackLocation(selectedFriend.name)}
              >
                <MaterialCommunityIcons 
                  name={FRIEND_ACTIONS.TRACK_LOCATION.icon} 
                  size={24} 
                  color={FRIEND_ACTIONS.TRACK_LOCATION.color} 
                />
                <Text className="ml-3 text-base text-gray-800">
                  {FRIEND_ACTIONS.TRACK_LOCATION.label}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center px-6 py-4 active:bg-gray-50"
                onPress={() => selectedFriend && handleUnfriend(selectedFriend.id, selectedFriend.name)}
              >
                <MaterialCommunityIcons 
                  name={FRIEND_ACTIONS.UNFRIEND.icon} 
                  size={24} 
                  color={FRIEND_ACTIONS.UNFRIEND.color} 
                />
                <Text className="ml-3 text-base" style={{ color: FRIEND_ACTIONS.UNFRIEND.color }}>
                  {FRIEND_ACTIONS.UNFRIEND.label}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center justify-center px-6 py-4 border-t border-gray-100 active:bg-gray-50"
                onPress={() => setShowActionModal(false)}
              >
                <Text className="text-base font-medium text-gray-500">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
} 