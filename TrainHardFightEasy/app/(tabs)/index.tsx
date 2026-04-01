import { View, Text } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-grow bg-white">
        <Text className="text-2xl font-bold text-blue-500">Home Page</Text>
        <Button label="Go to Range" onClick={() => router.push("/Range")} />
      </View>
    </SafeAreaView>
  );
}
