import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
export const Text = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;