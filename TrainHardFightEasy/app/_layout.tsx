import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { Colors, DarkTheme, LightTheme } from "@/constants/theme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : LightTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.background
                : Colors.light.background,
          },
          headerShown: true,
          headerTintColor:
            colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ title: "My App" }} />
        <Stack.Screen name="Range" />
      </Stack>
    </ThemeProvider>
  );
}
