import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';
import { Icon } from '@components/base/Icon';
import { IconName } from '@components/base/Icon/icon';

import * as S from './styles';
import { VStack } from '@components/base/VStack';
import { Text } from '@components/base/Typography/Text';

export interface IInputProps extends TextInputProps {
  icon?: IconName;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isFocus?: boolean;
  error?: string;
}

export function Input({ leftElement, rightElement, error, icon = undefined, isFocus = false, ...rest }: IInputProps) {
  const [isFocused, setIsFocused] = useState(isFocus);
  const [showPassword, setShowPassword] = useState(rest.secureTextEntry);
  const theme = useTheme();

  return (
    <VStack>
      <S.WrapperInput isFocus={isFocused} isError={!!error}>
        {icon && <Icon name={icon} size={24} color={isFocused ? theme.colors.primary : theme.colors.icon} />}

        <S.RNInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isFocus={isFocused}
          isError={!!error}
          {...rest}
          secureTextEntry={showPassword}
        />

        {rest.secureTextEntry && (
          <S.ActionButton onPress={() => setShowPassword(prev => !prev)}>
            <Icon
              name={showPassword ? "show" : "hide"}
              size={24}
              color={isFocused ? theme.colors.primary : theme.colors.icon}
            />
          </S.ActionButton>
        )}

      </S.WrapperInput>

      {error && <Text variant='large' textAlign='right' weight='semibold' color={!!error ? theme.colors.error : null}>{error}</Text>}
    </VStack>
  );
}