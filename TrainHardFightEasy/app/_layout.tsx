import {
  Colors,
  DarkTheme,
  LightTheme,
} from '@/constants/theme';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import '../global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

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
