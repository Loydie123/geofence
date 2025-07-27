import { View } from 'react-native';
import MapScreen from '../components/maps';
import MapButtons from '../components/maps/MapButtons';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapScreen />
      <MapButtons />
      
      {/* Bottom Container */}
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
      </View>
    </View>
  );
} 