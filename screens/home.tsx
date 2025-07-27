import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from '../components/maps';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapScreen />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 35,
          left: 20,
          backgroundColor: 'white',
          borderRadius: 30,
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => {
          console.log('Settings pressed');
        }}
      >
        <Ionicons name="settings" size={24} color="#90EE90" />
      </TouchableOpacity>
    </View>
  );
} 