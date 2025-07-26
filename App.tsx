import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-start bg-white pt-40">
      <View className="items-center space-y-6">
        <Image 
          source={require('./assets/images/geofence.png')}
          className="h-96 w-96"
          resizeMode="contain"
        />
        <Text className="text-l text-gray-500 font-medium text-center px-4 -mt-4">
          Real Time Alert for Smooth Safe Commute
        </Text>
        
        <View className="w-96 mt-20">
          <TouchableOpacity 
            className="bg-white border border-gray-300 rounded-xl py-4 px-6 flex-row items-center relative shadow-sm"
            activeOpacity={0.7}
          >
            <View className="absolute left-6">
              <Image 
                source={require('./assets/images/google.png')} 
                className="h-5 w-5"
                resizeMode="contain"
              />
            </View>
            <View className="absolute left-16 h-12 w-[1px] bg-gray-300" />
            <Text className="text-gray-700 font-medium text-base flex-1 text-center">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <View className="h-4" />

          <TouchableOpacity 
            className="bg-white border border-gray-300 rounded-xl py-4 px-6 flex-row items-center relative shadow-sm"
            activeOpacity={0.7}
          >
            <View className="absolute left-6">
              <Image 
                source={require('./assets/images/facebook.png')} 
                className="h-5 w-5"
                resizeMode="contain"
              />
            </View>
            <View className="absolute left-16 h-12 w-[1px] bg-gray-300" />
            <Text className="text-gray-700 font-medium text-base flex-1 text-center">
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
