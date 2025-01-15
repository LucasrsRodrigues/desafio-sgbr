import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '@global/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'app_theme';

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(THEME_KEY);
      if (savedTheme === 'dark') {
        setTheme(darkTheme);
        setIsDarkMode(true);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    if (isDarkMode) {
      setTheme(lightTheme);
      setIsDarkMode(false);
      await AsyncStorage.setItem(THEME_KEY, 'light');
    } else {
      setTheme(darkTheme);
      setIsDarkMode(true);
      await AsyncStorage.setItem(THEME_KEY, 'dark');
    }
  };

  return { theme, isDarkMode, toggleTheme };
};
