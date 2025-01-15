import React, { createContext, useContext, useState } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { ToastContainer } from './styles';
import { Text } from '@components/base';
import { useTheme } from 'styled-components/native';

interface IToastContext {
  showToast: (message: string) => void;
}


const ToastContext = createContext({} as IToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);
  const theme = useTheme();
  const toastHeight = 50;
  const translateY = useSharedValue(-toastHeight);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const showToast = (newMessage: string) => {
    setMessage(newMessage);
    translateY.value = withTiming(0, {
      duration: 300,
      easing: Easing.out(Easing.exp),
    });

    setTimeout(() => {
      translateY.value = withTiming(-toastHeight, {
        duration: 300,
        easing: Easing.in(Easing.exp),
      });
      setTimeout(() => setMessage(null), 300);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {message && (
        <ToastContainer style={[animatedStyle]}>
          <Text
            variant='large'
            textAlign='center'
            color={theme.colors.white}
            weight='semibold'
          >
            {message}
          </Text>
        </ToastContainer>
      )}

    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
