export const onboardingSlides = [
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
] as const;

export const bubbleStyles = [
  {
    size: 160,
    color: '#4ade80',
    opacity: 0.4,
    transform: [
      { translateX: -40 },
      { translateY: -40 }
    ],
  },
  {
    size: 128,
    color: '#86efac',
    opacity: 0.5,
    transform: [
      { translateX: 16 }
    ],
  },
  {
    size: 112,
    color: '#bbf7d0',
    opacity: 0.45,
    transform: [
      { translateY: 8 }
    ],
  },
] as const; 