export interface AccountSetting {
  id: string;
  title: string;
  description: string;
  type: 'toggle' | 'action';
  icon: string;
  value?: boolean;
  onPress?: () => void;
}

export const FRIEND_CODE = 'COMM-1234-SAFE';
export const MASKED_CODE = '••••-••••-••••';

export const createAccountSettings = (
  notificationsEnabled: boolean,
  locationEnabled: boolean,
  onToggleNotifications: () => void,
  onToggleLocation: () => void
): AccountSetting[] => [
  {
    id: 'notifications',
    title: 'Push Notifications',
    description: 'Get notified about friend requests and location alerts',
    type: 'toggle',
    icon: 'bell-ring',
    value: notificationsEnabled,
    onPress: onToggleNotifications
  },
  {
    id: 'location',
    title: 'Location Services',
    description: 'Allow app to access your location in background',
    type: 'toggle',
    icon: 'map-marker',
    value: locationEnabled,
    onPress: onToggleLocation
  }
]; 