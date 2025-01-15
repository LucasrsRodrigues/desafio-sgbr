import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '@components/base/Typography/Text';

import * as S from './styles';

interface IButtonsProps extends TouchableOpacityProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export function Button({ children, variant = "primary", isLoading = false, ...rest }: IButtonsProps) {
  const theme = useTheme();

  return (
    <S.ButtonContainer disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color={theme?.colors?.white} />
      ) : (
        <Text
          variant='large'
          weight='bold'
          color={theme?.colors?.white}
        >
          {children}
        </Text>
      )}
    </S.ButtonContainer>
  )
}