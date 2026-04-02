import { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  colorScheme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'light',
  toggleTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const systemScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<
    'light' | 'dark'
  >(systemScheme ?? 'light');

  const toggleTheme = () =>
    setColorScheme((prev) =>
      prev === 'dark' ? 'light' : 'dark',
    );

  return (
    <ThemeContext.Provider
      value={{ colorScheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);
