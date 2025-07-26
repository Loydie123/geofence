import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="items-center space-y-4">
        <Image 
          source={require('./assets/images/geofence.png')}
          className="h-64 w-64"
          resizeMode="contain"
        />
        <Text className="text-xl font-bold text-gray-800">CommuteSafe</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
