import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { useRef, useState } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Animated, { 
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const slides = [
  {
    id: '1',
    image: require('../assets/images/onboarding/1.png'),
    title: 'Welcome to CommuteSafe',
    description: 'Your personal safety companion for every journey.',
  },
  {
    id: '2',
    image: require('../assets/images/onboarding/2.jpeg'),
    title: 'Smart Geofencing',
    description: 'Set up custom safety zones and get real-time alerts when needed.',
  },
  {
    id: '3',
    image: require('../assets/images/onboarding/3.png'),
    title: 'Stay Connected',
    description: 'Keep your loved ones informed about your safe commute.',
  },
];

export default function OnboardingScreen() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<Animated.ScrollView>(null);
  const { signOut } = useAuth();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollTo({ x: SCREEN_WIDTH * (currentIndex + 1), animated: true });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    slidesRef.current?.scrollTo({ x: SCREEN_WIDTH * (slides.length - 1), animated: true });
    setCurrentIndex(slides.length - 1);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView
        ref={slidesRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {slides.map((slide, index) => (
          <View 
            key={slide.id} 
            style={{ width: SCREEN_WIDTH }}
            className="flex-1 items-center justify-center px-4"
          >
            <View className="w-full aspect-square mb-8">
              <Image
                source={slide.image}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
            <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
              {slide.title}
            </Text>
            <Text className="text-base text-gray-600 text-center px-4 mb-8">
              {slide.description}
            </Text>
          </View>
        ))}
      </Animated.ScrollView>

      <View className="flex-row justify-center items-center space-x-2 mb-4">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full ${
              currentIndex === index ? 'w-6 bg-green-500' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </View>

      <View className="px-4 pb-8">
        {currentIndex < slides.length - 1 ? (
          <TouchableOpacity
            onPress={handleNext}
            className="bg-green-500 py-3 px-8 rounded-full w-full"
          >
            <Text className="text-white font-medium text-center">Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleSignOut}
            className="bg-green-500 py-3 px-8 rounded-full w-full"
          >
            <Text className="text-white font-medium text-center">Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
