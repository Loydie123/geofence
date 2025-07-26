import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">CommuteSafe</Text>
      <StatusBar style="auto" />
    </View>
  );
}
