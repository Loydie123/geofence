import { View, Text, TouchableOpacity, Image, useWindowDimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useRef, useState } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingScreen() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<Animated.ScrollView>(null);
  const { signOut } = useAuth();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / SCREEN_WIDTH);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < 2) {
      slidesRef.current?.scrollTo({ x: SCREEN_WIDTH * (currentIndex + 1), animated: true });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#f0fdf4', '#dcfce7', '#f0fdf4']}
        style={{ flex: 1 }}
      >
        {/* Bubbles */}
        <View style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: 160,
          height: 160,
          backgroundColor: '#4ade80',
          opacity: 0.4,
          borderRadius: 999,
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
          borderRadius: 999,
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
          borderRadius: 999,
          transform: [
            { translateY: 8 }
          ]
        }} />

        <Animated.ScrollView
          ref={slidesRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={{ width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image
              source={require('../assets/images/onboarding/1.png')}
              style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
              Welcome to CommuteSafe
            </Text>
            <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', paddingHorizontal: 20 }}>
              Your personal safety companion for every journey.
            </Text>
          </View>

          <View style={{ width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image
              source={require('../assets/images/onboarding/2.jpeg')}
              style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
              Smart Geofencing
            </Text>
            <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', paddingHorizontal: 20 }}>
              Set up custom safety zones and get real-time alerts when needed.
            </Text>
          </View>

          <View style={{ width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image
              source={require('../assets/images/onboarding/3.png')}
              style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
              Stay Connected
            </Text>
            <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', paddingHorizontal: 20 }}>
              Keep your loved ones informed about your safe commute.
            </Text>
          </View>
        </Animated.ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: currentIndex === index ? '#22c55e' : '#e5e7eb',
                marginHorizontal: 4
              }}
            />
          ))}
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          {currentIndex < 2 ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => {
                  slidesRef.current?.scrollTo({ x: SCREEN_WIDTH * 2, animated: true });
                  setCurrentIndex(2);
                }}
                style={{
                  padding: 16,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: '#666', fontSize: 16, fontWeight: '500' }}>
                  Skip
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNext}
                style={{
                  backgroundColor: '#22c55e',
                  padding: 16,
                  borderRadius: 999,
                  alignItems: 'center',
                  paddingHorizontal: 32
                }}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleSignOut}
              style={{
                backgroundColor: '#22c55e',
                padding: 16,
                borderRadius: 999,
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                Get Started
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}
