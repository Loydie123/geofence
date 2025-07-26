import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingPage() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#f0fdf4', '#dcfce7', '#f0fdf4']}
        className="flex-1 items-center justify-start pt-40"
      >
        <View className="absolute top-0 left-0 right-0 h-96 bg-[#dcfce7] opacity-30 -rotate-12 translate-y-[-50%]" />
        <View className="absolute top-0 right-0 w-96 h-96 bg-[#bbf7d0] opacity-20 rotate-45 translate-x-[30%] translate-y-[-60%] rounded-full" />
        
        <View className="items-center space-y-6 z-10">
          <Image 
            source={require('../../assets/images/geofence.png')}
            className="h-96 w-96"
            resizeMode="contain"
          />
          <Text className="text-l text-gray-500 font-medium text-center px-4 -mt-4">
            Real Time Alert for Smooth Safe Commute
          </Text>
          
          <View className="w-96 mt-20">
            <TouchableOpacity 
              className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl py-4 px-6 flex-row items-center relative shadow-sm"
              activeOpacity={0.7}
            >
              <View className="absolute left-6">
                <Image 
                  source={require('../../assets/images/google.png')} 
                  className="h-5 w-5"
                  resizeMode="contain"
                />
              </View>
              <View className="absolute left-16 h-12 w-[1px] bg-gray-300" />
              <Text className="text-gray-700 font-medium text-base flex-1 text-center">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <View className="h-4" />

            <TouchableOpacity 
              className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl py-4 px-6 flex-row items-center relative shadow-sm"
              activeOpacity={0.7}
            >
              <View className="absolute left-6">
                <Image 
                  source={require('../../assets/images/facebook.png')} 
                  className="h-5 w-5"
                  resizeMode="contain"
                />
              </View>
              <View className="absolute left-16 h-12 w-[1px] bg-gray-300" />
              <Text className="text-gray-700 font-medium text-base flex-1 text-center">
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            <Text className="text-xs text-gray-500 text-center mt-12 px-4">
              By signing in, you agree to our{' '}
              <Text className="text-green-600">Terms of Service</Text>{' '}
              and{' '}
              <Text className="text-green-600">Privacy Policy.</Text>
            </Text>

            <Text className="text-xs text-gray-400 text-center mt-36">
              © {new Date().getFullYear()} CommuteSafe. All rights reserved.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
} 