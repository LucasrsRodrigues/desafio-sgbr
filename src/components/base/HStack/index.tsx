import React, { ReactNode } from 'react';

import IHStackProps from './hstack';

import * as S from './styles';

export function HStack({ children, ...rest }: IHStackProps) {
  return (
    <S.Container
      {...rest}
    >
      {children}
    </S.Container>
  );
}