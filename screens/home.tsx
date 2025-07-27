import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients } from '../constants/theme';
import MapView from 'react-native-maps';

const bubbleStyles = [
  {
    size: 160,
    color: '#4ade80',
    opacity: 0.4,
    transform: [
      { translateX: -40 },
      { translateY: -40 }
    ]
  },
  {
    size: 128,
    color: '#86efac',
    opacity: 0.5,
    transform: [
      { translateX: 16 }
    ]
  },
  {
    size: 112,
    color: '#bbf7d0',
    opacity: 0.45,
    transform: [
      { translateY: 8 }
    ]
  }
];

function BackgroundBubbles() {
  return (
    <>
      {bubbleStyles.map((bubble, index) => (
        <View
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: index === 2 ? 48 : 0,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            borderRadius: 9999,
            transform: bubble.transform,
          }}
        />
      ))}
    </>
  );
}

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradients.primary}
        style={{ flex: 1 }}
      >
        <BackgroundBubbles />
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
        
        {/* Bottom Half - Content */}
        <View style={{ flex: 1, padding: 20 }}>
          {/* Add your content for bottom half here */}
        </View>
      </LinearGradient>
    </View>
  );
} 