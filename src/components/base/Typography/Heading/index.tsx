import React from 'react';
import { TextProps } from 'react-native';


import IRNTextProps, * as S from './styles';

interface IHeadingProps extends TextProps, IRNTextProps {
  children: string | string[];
}

export function Heading({
  children,
  variant = "heading1",
  textAlign = "left",
  ...rest
}: IHeadingProps) {
  return (
    <S.HeadingContainer
      variant={variant}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </S.HeadingContainer>
  );
}