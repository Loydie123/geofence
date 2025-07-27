import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsModal from '../modals/SettingsModal';

export default function MapButtons() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  return (
    <View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'box-none'
    }}>
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
        onPress={() => setIsSettingsVisible(true)}
      >
        <Ionicons name="settings" size={24} color="#90EE90" />
      </TouchableOpacity>

      <SettingsModal 
        visible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      />

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
        onPress={() => {}}
      >
        <MaterialCommunityIcons name="crosshairs-gps" size={28} color="#90EE90" />
      </TouchableOpacity>

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
          transform: [{ translateY: 40 }],
        }}
        onPress={() => {}}
      >
        <MaterialCommunityIcons name="layers-triple" size={28} color="#90EE90" />
      </TouchableOpacity>

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
          transform: [{ translateY: 100 }],
        }}
        onPress={() => {}}
      >
        <MaterialCommunityIcons name="share-variant" size={28} color="#90EE90" />
      </TouchableOpacity>
    </View>
  );
} 