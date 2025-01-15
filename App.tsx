import React from 'react';
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold, Urbanist_700Bold, useFonts } from '@expo-google-fonts/urbanist';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from '@hooks/useToast';
import { AuthProvider } from '@hooks/auth';
import { Routes } from '@routes/index';
import { ThemeSwitcherProvider } from '@hooks/themeSwitcher';

export default function App() {

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
      <ThemeSwitcherProvider>
        <ToastProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ToastProvider>
      </ThemeSwitcherProvider>
    </SafeAreaProvider>
  );
}
