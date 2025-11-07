import '../../global.css';
import '@/utils/polyfill';

import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
