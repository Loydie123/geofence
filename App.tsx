import { View, Text, Image } from 'react-native';
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
        <Text className="text-xl text-gray-700 font-medium text-center px-4">
          Real Time Alert for smooth safe commute
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
