import { IconSymbol } from "@/components/ui/icon-symbol";
import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Drills() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-blue-500">
        Welcome to Drills
      </Text>
      <IconSymbol name={"arrow.down.left.arrow.up.right"} color={""} />
    </View>
  );
}
