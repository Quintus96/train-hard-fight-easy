import { ButtonThemes } from '@/constants/buttonTheme';
import { Pressable, Text, View } from 'react-native';
import { useAppTheme } from '../ThemeContext';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({
  label,
  onClick,
}: Readonly<ButtonProps>) {
  const { colorScheme } = useAppTheme();

  const theme = ButtonThemes[colorScheme ?? 'light'];
  console.log(theme);
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
