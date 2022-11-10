import { StatusBar } from 'expo-status-bar';
import Feed from './scenes/Feed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Feed />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

