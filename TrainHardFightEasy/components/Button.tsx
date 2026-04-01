import { Pressable, Text } from "react-native";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Readonly<ButtonProps>) {
  return (
    <Pressable
      onPress={onClick}
      className="bg-blue-400 p-4 rounded-md self-start"
    >
      <Text className="font-semibold text-lg">{label}</Text>
    </Pressable>
  );
}
