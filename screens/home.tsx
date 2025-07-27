import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapScreen from '../components/maps';
import MapButtons from '../components/maps/MapButtons';
import { useAuth } from '../hooks/useAuth';

export default function HomeScreen() {
  const { handleSignOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <MapScreen />
      <MapButtons />
      
      <TouchableOpacity 
        style={{
          position: 'absolute',
          top: 35,
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
        }}
        onPress={handleSignOut}
      >
        <MaterialCommunityIcons name="logout" size={24} color="#FF4444" />
      </TouchableOpacity>

      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}>
        <View style={{
          width: 40,
          height: 4,
          backgroundColor: '#DDD',
          borderRadius: 2,
          alignSelf: 'center',
          marginBottom: 20,
          marginTop: -10,
        }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Quick Actions</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity 
            style={{
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              padding: 15,
              borderRadius: 15,
              width: '30%'
            }}
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="map-marker-path" size={28} color="#90EE90" />
            <Text style={{ marginTop: 5, color: '#666' }}>Track</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              padding: 15,
              borderRadius: 15,
              width: '30%'
            }}
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="map-marker-radius" size={28} color="#90EE90" />
            <Text style={{ marginTop: 5, color: '#666' }}>Add Fence</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              padding: 15,
              borderRadius: 15,
              width: '30%'
            }}
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="history" size={28} color="#90EE90" />
            <Text style={{ marginTop: 5, color: '#666' }}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 