import { StatusBar } from 'expo-status-bar';
import { useAuth } from '@clerk/clerk-expo';
import LandingPage from './landingpage';
import HomePage from '../screens/home';

export default function AppContent() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {isSignedIn ? <HomePage /> : <LandingPage />}
      <StatusBar style="auto" />
    </>
  );
} 