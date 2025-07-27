import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients } from '../constants/theme';
import { useAuth } from '../hooks/useAuth';

export default function HomeScreen() {
  const { handleSignOut } = useAuth();
  const { user } = useUser();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradients.primary}
        style={{ flex: 1 }}
      >
        <View style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: 160,
          height: 160,
          backgroundColor: '#4ade80',
          opacity: 0.4,
          borderRadius: 9999,
          transform: [
            { translateX: -40 },
            { translateY: -40 }
          ]
        }} />
        <View style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: 128,
          height: 128,
          backgroundColor: '#86efac',
          opacity: 0.5,
          borderRadius: 9999,
          transform: [
            { translateX: 16 }
          ]
        }} />
        <View style={{ 
          position: 'absolute',
          top: 0,
          left: 48,
          width: 112,
          height: 112,
          backgroundColor: '#bbf7d0',
          opacity: 0.45,
          borderRadius: 9999,
          transform: [
            { translateY: 8 }
          ]
        }} />

        <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
          <View style={{ 
            backgroundColor: 'white',
            padding: 24,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3
          }}>
            <Text style={{ 
              fontSize: 24,
              fontWeight: 'bold',
              color: colors.text.primary,
              marginBottom: 8
            }}>
              Welcome back, {user?.firstName || 'User'}! 👋
            </Text>
            <Text style={{ 
              fontSize: 16,
              color: colors.text.secondary,
              marginBottom: 24
            }}>
              Your safety is our top priority. Set up your geofence zones to stay protected.
            </Text>

            <TouchableOpacity
              onPress={handleSignOut}
              style={{
                backgroundColor: colors.primary,
                padding: 16,
                borderRadius: 12,
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
} 