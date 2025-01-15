import { Text } from '@components/base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';
import * as S from "./styles";

// Define a nova interface do item
interface Item {
  codigo: string;
  nome: string;
}

interface ViewableItem {
  isViewable: boolean;
  item: Item;
}

interface ListItemProps {
  viewableItems: Animated.SharedValue<ViewableItem[]>;
  item: Item;
}

const animationConfig: WithTimingConfig = {
  duration: 300,
};

export const BrandCard: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = viewableItems.value
        .filter(viewableItem => viewableItem.isViewable)
        .some(viewableItem => viewableItem.item.codigo === item.codigo);

      return {
        opacity: withTiming(isVisible ? 1 : 0, animationConfig),
        transform: [{
          scale: withTiming(isVisible ? 1 : 0.6, animationConfig),
        }],
      };
    });

    return (
      <S.BrandContainer
        style={rStyle}
        testID={`list-item-${item.codigo}`}
      >
        <Text
          variant='xlarge'
          weight='semibold'
        >
          {item.nome}
        </Text>
      </S.BrandContainer>
    );
  }
);
