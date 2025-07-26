import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-start bg-white pt-32">
      <View className="items-center space-y-4">
        <Image 
          source={require('./assets/images/geofence.png')}
          className="h-96 w-96"
          resizeMode="contain"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
