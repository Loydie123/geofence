import { StatusBar } from 'expo-status-bar';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache, publishableKey } from './constants/clerk';
import LandingPage from './components/landingpage';
import HomePage from './screens/home';

import './global.css';

function MainContent() {
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

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <MainContent />
    </ClerkProvider>
  );
}
