import { StatusBar } from 'expo-status-bar';
import LandingPage from './components/landingpage';

import './global.css';

export default function App() {
  return (
    <>
      <LandingPage />
      <StatusBar style="auto" />
    </>
  );
}
