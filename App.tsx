import { Home } from '@screens/Home';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeSwitcher } from 'src/hooks/useThemeSwitcher';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const { theme } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Home />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
