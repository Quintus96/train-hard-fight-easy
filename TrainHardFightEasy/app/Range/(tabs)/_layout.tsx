import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RangeTabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bench Mark",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="door.garage.double.bay.open"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="drills"
        options={{
          title: "Drills",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="dog.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
