import { Pressable, Text, View } from "react-native";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Readonly<ButtonProps>) {
  return (
    <View className="w-1/3">
      <Pressable
        onPress={onClick}
        className="bg-slate-500 p-4 rounded-full flex items-center"
      >
        <Text className="font-semibold text-lg text-white ">{label}</Text>
      </Pressable>
    </View>
  );
}
