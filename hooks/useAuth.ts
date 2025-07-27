import { useAuth as useClerkAuth } from '@clerk/clerk-expo';

export const useAuth = () => {
  const { signOut } = useClerkAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return {
    handleSignOut,
  };
}; 