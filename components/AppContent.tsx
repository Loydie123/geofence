import { StatusBar } from 'expo-status-bar';
import { useAuth } from '@clerk/clerk-expo';
import LandingPage from './landingpage';
import OnboardingScreen from '../screens/onboarding';

export default function AppContent() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {isSignedIn ? <OnboardingScreen /> : <LandingPage />}
      <StatusBar style="auto" />
    </>
  );
} 