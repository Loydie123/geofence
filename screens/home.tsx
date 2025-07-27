import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients } from '../constants/theme';
import { useAuth } from '../hooks/useAuth';

export default function HomeScreen() {
  const { handleSignOut } = useAuth();
  const { user } = useUser();

  return (
    <View className="flex-1">
      <LinearGradient
        colors={gradients.primary}
        className="flex-1"
      >
        <View className="absolute top-0 left-0 w-40 h-40 bg-[#4ade80] opacity-40 rounded-full -translate-x-10 -translate-y-10" />
        <View className="absolute top-0 left-0 w-32 h-32 bg-[#86efac] opacity-50 rounded-full translate-x-4" />
        <View className="absolute top-0 left-12 w-28 h-28 bg-[#bbf7d0] opacity-45 rounded-full translate-y-2" />

        <View className="flex-1 p-5 justify-center">
          <View className="bg-white p-6 rounded-2xl shadow-lg">
            <Text className="text-2xl font-bold text-gray-800 mb-2">
              Welcome back, {user?.firstName || 'User'}! 👋
            </Text>
            <Text className="text-base text-gray-600 mb-6">
              Your safety is our top priority. Set up your geofence zones to stay protected.
            </Text>

            <TouchableOpacity
              onPress={handleSignOut}
              className="bg-green-500 py-4 px-6 rounded-xl items-center"
            >
              <Text className="text-white text-base font-semibold">
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
} 