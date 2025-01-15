import styled, { css } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  height: 58px;
  border-radius: 999px;
  overflow: hidden;
  width: 100%;

  background: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
  `}
`;
