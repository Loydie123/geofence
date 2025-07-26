import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-start bg-white pt-40">
      <View className="items-center space-y-6">
        <Text className="text-2xl text-gray-400 font-semibold text-center px-4">
          Welcome to
        </Text>
        <Image 
          source={require('./assets/images/geofence.png')}
          className="h-96 w-96"
          resizeMode="contain"
        />
        <Text className="text-xl text-gray-600 font-medium text-center px-4">
          Real Time Alert for Smooth Safe Commute
        </Text>
        
        <View className="w-80 space-y-4 mt-8">
          <TouchableOpacity 
            className="bg-white border border-gray-200 rounded-xl py-3 px-6 flex-row items-center justify-center space-x-3 shadow-sm"
            activeOpacity={0.7}
          >
            <Image 
              source={require('./assets/images/google.png')} 
              className="h-5 w-5"
              resizeMode="contain"
            />
            <Text className="text-gray-700 font-medium">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-[#1877F2] rounded-xl py-3 px-6 flex-row items-center justify-center space-x-3 shadow-sm"
            activeOpacity={0.7}
          >
            <Image 
              source={require('./assets/images/facebook.png')} 
              className="h-5 w-5"
              resizeMode="contain"
            />
            <Text className="text-white font-medium">
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
