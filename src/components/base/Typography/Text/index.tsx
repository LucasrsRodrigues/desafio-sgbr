import React from 'react';
import { useTheme } from 'styled-components';

import ITextProps from './text';

import * as S from './styles';

export function Text({
  children,
  variant = "medium",
  weight = "regular",
  textTransform = "none",
  ...rest
}: ITextProps) {
  return (
    <S.TextContainer
      variant={variant}
      weight={weight}
      textTransform={textTransform}
      {...rest}
    >
      {children}
    </S.TextContainer>
  );
}