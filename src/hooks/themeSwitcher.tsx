import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import lightTheme from '@global/styles/light.theme';
import darkTheme from '@global/styles/dark.theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

const THEME_KEY = '@sgbcar:theme';

interface IThemeSwitchContextProps {
  theme: typeof lightTheme;
  isDarkMode: boolean;
  toggleTheme: () => Promise<void>;
}

const ThemeSwitchContext = createContext({} as IThemeSwitchContextProps);

export const ThemeSwitcherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  return (
    <ThemeSwitchContext.Provider
      value={{ theme, isDarkMode, toggleTheme }}
    >
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  )
}

export const useThemeSwitcher = () => {
  const context = useContext(ThemeSwitchContext);

  if (!context) {
    throw new Error("useThemeSwitcher must be used within an ThemeSwitcherProvider");
  }

  return useContext(ThemeSwitchContext);
};