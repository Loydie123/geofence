import { View, Text, TouchableOpacity, Image, useWindowDimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useRef, useState } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients } from '../constants/theme';
import { onboardingSlides, bubbleStyles } from '../constants/onboarding';

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
    if (currentIndex < onboardingSlides.length - 1) {
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
        colors={gradients.primary}
        style={{ flex: 1 }}
      >
        {/* Bubbles */}
        {bubbleStyles.map((bubble, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: bubble.size,
              height: bubble.size,
              backgroundColor: bubble.color,
              opacity: bubble.opacity,
              borderRadius: 999,
              transform: bubble.transform,
            }}
          />
        ))}

        <Animated.ScrollView
          ref={slidesRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {onboardingSlides.map((slide) => (
            <View 
              key={slide.id}
              style={{ width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >
              <Image
                source={slide.image}
                style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10, color: colors.text.primary }}>
                {slide.title}
              </Text>
              <Text style={{ fontSize: 16, color: colors.text.secondary, textAlign: 'center', paddingHorizontal: 20 }}>
                {slide.description}
              </Text>
            </View>
          ))}
        </Animated.ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
          {onboardingSlides.map((_, index) => (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: currentIndex === index ? colors.primary : colors.border,
                marginHorizontal: 4
              }}
            />
          ))}
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          {currentIndex < onboardingSlides.length - 1 ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => {
                  slidesRef.current?.scrollTo({ x: SCREEN_WIDTH * (onboardingSlides.length - 1), animated: true });
                  setCurrentIndex(onboardingSlides.length - 1);
                }}
                style={{
                  padding: 16,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: colors.text.secondary, fontSize: 16, fontWeight: '500' }}>
                  Skip
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNext}
                style={{
                  backgroundColor: colors.primary,
                  padding: 16,
                  borderRadius: 999,
                  alignItems: 'center',
                  paddingHorizontal: 32
                }}
              >
                <Text style={{ color: colors.background, fontSize: 16, fontWeight: '600' }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleSignOut}
              style={{
                backgroundColor: colors.primary,
                padding: 16,
                borderRadius: 999,
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Text style={{ color: colors.background, fontSize: 16, fontWeight: '600' }}>
                Get Started
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}
