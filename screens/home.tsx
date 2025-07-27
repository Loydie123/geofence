import { View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MapScreen from '../components/maps';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapScreen />
      {/* Settings Button */}
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

      {/* Crosshair Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '50%',
          right: 20,
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
          transform: [{ translateY: -20 }],
        }}
        onPress={() => {
          console.log('Crosshair pressed');
        }}
      >
        <MaterialCommunityIcons name="crosshairs-gps" size={28} color="#90EE90" />
      </TouchableOpacity>
    </View>
  );
} 