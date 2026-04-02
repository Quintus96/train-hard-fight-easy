import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { HapticTab } from '../haptic-tab';
import { useAppTheme } from '../ThemeContext';
import {
  IconSymbol,
  IconSymbolName,
} from '../ui/icon-symbol';

interface TabsProps {
  tabs: TabConfig[];
}

export interface TabConfig {
  name: string;
  title: string;
  iconName: IconSymbolName;
}

export function ThemedTabs({ tabs }: TabsProps) {
  const { colorScheme } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name={tab.iconName}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
