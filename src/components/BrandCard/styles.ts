import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export const BrandContainer = styled(TouchableAnimated)`
  height: 80px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.shape};
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