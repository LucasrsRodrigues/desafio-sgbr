import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold, Urbanist_700Bold, useFonts } from '@expo-google-fonts/urbanist';
import { SignIn } from '@screens/SignIn';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from '@hooks/useToast';
import { AuthProvider } from '@hooks/auth';

export default function App() {
  const { theme } = useThemeSwitcher();

  const [loaded, error] = useFonts({
    Urbanist_700Bold,
    Urbanist_600SemiBold,
    Urbanist_500Medium,
    Urbanist_400Regular
  });


  if (!loaded && !error) {
    return null;
  }


  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <AuthProvider>
            <View style={styles.container}>
              <SignIn />
            </View>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
