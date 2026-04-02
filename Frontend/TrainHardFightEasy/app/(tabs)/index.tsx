import { Button } from '@/components/atoms/Button';
import { useAppTheme } from '@/components/ThemeContext';
import { router } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { toggleTheme } = useAppTheme();

  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="flex flex-grow flex-row items-center gap-12">
        <Button
          label="Benchmarks"
          onClick={() => router.push('/Range')}
        />
        <Button
          label="Drills"
          onClick={() => router.push('/Range/drills')}
        />
      </View>
      <Button
        label="Change theme"
        onClick={() => toggleTheme()}
      />
    </SafeAreaView>
  );
}
