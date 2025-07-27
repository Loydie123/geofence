import { StatusBar } from 'expo-status-bar';
import { useAuth } from '@clerk/clerk-expo';
import { useState } from 'react';
import LandingPage from './landingpage';
import OnboardingScreen from '../screens/onboarding';
import HomeScreen from '../screens/home';

export default function AppContent() {
  const { isLoaded, isSignedIn } = useAuth();
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <>
        <LandingPage />
        <StatusBar style="auto" />
      </>
    );
  }

  if (!hasSeenOnboarding) {
    return (
      <>
        <OnboardingScreen />
        <StatusBar style="auto" />
      </>
    );
  }

  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
} 