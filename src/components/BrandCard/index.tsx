import React from 'react';
import { TouchableOpacityProps, ViewToken } from 'react-native';
import {
  SharedValue,
  useAnimatedStyle,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

import { Text } from '@components/base';

import * as S from "./styles";

interface Item {
  codigo: string;
  nome: string;
}

interface BrandCardProps extends TouchableOpacityProps {
  viewableItems: SharedValue<ViewToken<any>[]>
  item: Item;
}

const animationConfig: WithTimingConfig = {
  duration: 300,
};

export const BrandCard: React.FC<BrandCardProps> = React.memo(
  ({ item, viewableItems, ...rest }) => {
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
        {...rest}
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
