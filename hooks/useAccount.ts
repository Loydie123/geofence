import { useState } from 'react';
import { useAuth } from './useAuth';
import { AccountSetting, createAccountSettings } from '../constants/account';

interface UseAccountReturn {
  notificationsEnabled: boolean;
  locationEnabled: boolean;
  isCodeVisible: boolean;
  settings: AccountSetting[];
  toggleNotifications: () => void;
  toggleLocation: () => void;
  toggleCodeVisibility: () => void;
  copyCode: () => void;
  handleSignOut: () => Promise<void>;
}

export function useAccount(onClose: () => void): UseAccountReturn {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const { handleSignOut: authSignOut } = useAuth();

  const toggleNotifications = () => setNotificationsEnabled(prev => !prev);
  const toggleLocation = () => setLocationEnabled(prev => !prev);
  const toggleCodeVisibility = () => setIsCodeVisible(prev => !prev);

  const copyCode = () => {
    // TODO: Implement clipboard functionality
    // For now, just console log
    console.log('Code copied to clipboard');
  };

  const handleSignOut = async () => {
    const { success } = await authSignOut();
    if (success) {
      onClose();
    }
  };

  const settings = createAccountSettings(
    notificationsEnabled,
    locationEnabled,
    toggleNotifications,
    toggleLocation
  );

  return {
    notificationsEnabled,
    locationEnabled,
    isCodeVisible,
    settings,
    toggleNotifications,
    toggleLocation,
    toggleCodeVisibility,
    copyCode,
    handleSignOut,
  };
} 