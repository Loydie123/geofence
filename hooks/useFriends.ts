import { useState } from 'react';
import { Alert } from 'react-native';
import { Friend, MOCK_FRIENDS } from '../constants/friends';

interface UseFriendsReturn {
  friends: Friend[];
  searchQuery: string;
  friendCode: string;
  isAddingFriend: boolean;
  selectedFriend: Friend | null;
  showActionModal: boolean;
  setSearchQuery: (query: string) => void;
  setFriendCode: (code: string) => void;
  setIsAddingFriend: (isAdding: boolean) => void;
  handleAddFriend: () => void;
  handleUnfriend: (friendId: string, friendName: string) => void;
  handleTrackLocation: (friendName: string) => void;
  openFriendActions: (friend: Friend) => void;
  closeActionModal: () => void;
}

export function useFriends(): UseFriendsReturn {
  const [friends, setFriends] = useState<Friend[]>(MOCK_FRIENDS);
  const [searchQuery, setSearchQuery] = useState('');
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

  const openFriendActions = (friend: Friend) => {
    setSelectedFriend(friend);
    setShowActionModal(true);
  };

  const closeActionModal = () => {
    setShowActionModal(false);
    setSelectedFriend(null);
  };

  return {
    friends,
    searchQuery,
    friendCode,
    isAddingFriend,
    selectedFriend,
    showActionModal,
    setSearchQuery,
    setFriendCode,
    setIsAddingFriend,
    handleAddFriend,
    handleUnfriend,
    handleTrackLocation,
    openFriendActions,
    closeActionModal,
  };
} 