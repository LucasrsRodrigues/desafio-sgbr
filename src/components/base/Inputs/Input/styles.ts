import { heightPercentageToDP } from "react-native-responsive-screen";
import styled, { css } from "styled-components/native";

interface IWrapperInput {
  isFocus: boolean;
  isError: boolean;
}

export const WrapperInput = styled.View<IWrapperInput>`
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.shape};
  height: ${heightPercentageToDP(6.48)}px;
  border-radius: 16px;

  gap: 12px;

  flex-direction: row;
  align-items: center;

  ${({ isFocus }) => isFocus && css`
    background: ${({ theme }) => theme?.colors?.primary}08;
    border: 1px solid ${({ theme }) => theme?.colors?.primary};
  `}

  ${({ isError }) => isError && css`
    background: ${({ theme }) => theme?.colors?.error}08;
    border: 1px solid ${({ theme }) => theme?.colors?.error};
  `}
`;

export const RNInput = styled.TextInput.attrs<IWrapperInput>(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder,
}))`
  flex: 1;
  height: 100%;
  color: ${({ theme, isError }) => isError ? theme.colors.error : theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.semibold};
`;

export const ActionButton = styled.TouchableOpacity``;