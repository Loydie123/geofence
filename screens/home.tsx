import { View } from 'react-native';
import MapScreen from '../components/maps';
import MapButtons from '../components/maps/MapButtons';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapScreen />
      <MapButtons />
    </View>
  );
} 