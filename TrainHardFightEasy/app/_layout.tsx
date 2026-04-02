import {
  ThemeContextProvider,
  useAppTheme,
} from '@/components/ThemeContext';
import {
  Colors,
  DarkTheme,
  LightTheme,
} from '@/constants/theme';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import '../global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootLayout() {
  const { colorScheme } = useAppTheme();

  return (
    <ThemeProvider
      value={
        colorScheme === 'dark' ? DarkTheme : LightTheme
      }
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Colors[colorScheme ?? 'light'].background,
          },
          headerShown: true,
          headerTintColor:
            Colors[colorScheme ?? 'light'].text,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ title: 'My App' }}
        />
        <Stack.Screen name="Range" />
      </Stack>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <RootLayout />
    </ThemeContextProvider>
  );
}
