import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const BrandContainer = styled(Animated.View)`
  height: 80px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
  align-self: center;
  border-radius: 15px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;

  shadow-color: #000;
  shadow-offset-with: 0;
  shadow-offset-height: 2;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
  
`;