import { View, Text } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="flex flex-grow flex-row items-center gap-12">
        <Button label="Benchmarks" onClick={() => router.push("/Range")} />
        <Button label="Drills" onClick={() => router.push("/Range/drills")} />
      </View>
    </SafeAreaView>
  );
}
