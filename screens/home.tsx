import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients } from '../constants/theme';
import MapView from 'react-native-maps';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradients.primary}
        style={{ flex: 1 }}
      >
        <View style={{ height: '50%', marginTop: 50 }}>
          <MapView 
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 14.5995,
              longitude: 120.9842,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        
        <View style={{ flex: 1, padding: 20 }}>
          {/* Add your content for bottom half here */}
        </View>
      </LinearGradient>
    </View>
  );
} 