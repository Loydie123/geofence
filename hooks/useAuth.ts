import { useAuth as useClerkAuth } from '@clerk/clerk-expo';

export const useAuth = () => {
  const { signOut } = useClerkAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  };

  return {
    handleSignOut,
  };
}; 