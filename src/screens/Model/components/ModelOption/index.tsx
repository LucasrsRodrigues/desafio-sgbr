import React from 'react';
import { Heading } from '@components/base';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';


interface IModelOptionProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export function ModelOption({ title, isActive = false, ...rest }: IModelOptionProps) {
  const theme = useTheme();

  return (
    <S.ModelOptionContainer {...rest}>
      <Heading
        variant='heading5'
        color={isActive ? theme.colors.primary : theme.colors.text}
      >
        {title}
      </Heading>
    </S.ModelOptionContainer>
  );
}