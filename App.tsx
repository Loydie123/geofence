import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache, publishableKey } from './constants/clerk';
import AppContent from './components/AppContent';

import './global.css';

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <AppContent />
    </ClerkProvider>
  );
}
