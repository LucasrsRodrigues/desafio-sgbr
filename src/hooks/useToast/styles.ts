import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const ToastContainer = styled(Animated.View).attrs({})`
  position: absolute;
  top: 80px;
  left: 20px;
  right: 20px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 0 4px;
  shadow-radius: 4px;
  elevation: 5;
  z-index: 1000;
`;

