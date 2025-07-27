import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo';

export default function OnboardingScreen() {
  const { signOut } = useAuth();
  const { user } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center p-4">
        <View className="bg-green-50 rounded-2xl p-6 w-full max-w-sm shadow-sm">
          <Text className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome, {user?.firstName || 'User'}! 👋
          </Text>
          <Text className="text-gray-600 mb-6">
            You've successfully logged in to CommuteSafe. Your geofencing journey starts here.
          </Text>
          
          <TouchableOpacity
            onPress={handleSignOut}
            className="bg-red-500 py-3 px-4 rounded-xl"
          >
            <Text className="text-white text-center font-medium">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
