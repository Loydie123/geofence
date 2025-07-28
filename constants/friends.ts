export interface Friend {
  id: string;
  name: string;
  email: string;
  status: 'online' | 'offline';
  lastSeen?: string;
  avatar?: string;
}

export const MOCK_FRIENDS: Friend[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'online',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@example.com',
    status: 'offline',
    lastSeen: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=2'
  }
];

export const FRIEND_ACTIONS = {
  TRACK_LOCATION: {
    label: 'Track Location',
    icon: 'map-marker',
    color: '#90EE90'
  },
  UNFRIEND: {
    label: 'Unfriend',
    icon: 'account-remove',
    color: '#FF6B6B'
  }
} as const; 