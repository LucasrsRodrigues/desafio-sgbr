import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

interface ThemeType {
  shimmer: string[];
}

interface GradientProps extends LinearGradientProps {
  theme: ThemeType;
}

interface IContainerProps {
  width: number;
  height: number;
  borderRadius: number;
}

export const Container = styled.View<IContainerProps>`
  background-color: ${({ theme }) => theme.colors.shape}; 
  overflow: hidden;

  /* align-items: center;
  justify-content: center;
  align-self: center; */

  ${({ width, height, borderRadius }) => css`
    width: ${width}px;
    height: ${height}px;
    border-radius: ${borderRadius}px;
  `}
`;

export const Shimmer = styled(Animated.View)`
  flex: 1;
  width: 100%;
  height: 100%;
`;


export const Gradient = styled(LinearGradient)`
  flex: 1;
  width: 100%;
  height: 100%;
`;