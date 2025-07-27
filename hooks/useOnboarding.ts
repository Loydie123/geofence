import { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import Animated from 'react-native-reanimated';
import { onboardingSlides } from '../constants/onboarding';

export const useOnboarding = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<Animated.ScrollView>(null);
  const { isSignedIn } = useAuth();

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

  const handleSkip = () => {
    const lastIndex = onboardingSlides.length - 1;
    slidesRef.current?.scrollTo({ x: SCREEN_WIDTH * lastIndex, animated: true });
    setCurrentIndex(lastIndex);
  };

  return {
    currentIndex,
    SCREEN_WIDTH,
    slidesRef,
    handleScroll,
    handleMomentumScrollEnd,
    handleNext,
    handleSkip,
    isSignedIn,
  };
}; 