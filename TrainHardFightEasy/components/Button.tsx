import { ButtonThemes } from '@/constants/buttonTheme';
import {
  Pressable,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({
  label,
  onClick,
}: Readonly<ButtonProps>) {
  const colorScheme = useColorScheme();

  const theme = ButtonThemes[colorScheme ?? 'light'];

  return (
    <View className="w-1/3">
      <Pressable
        onPress={onClick}
        className={`${theme.buttonColor} p-4 rounded-full flex items-center`}
      >
        <Text
          className={`font-semibold text-lg ${theme.labelColor}`}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}
