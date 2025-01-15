import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

import * as S from './styles';

interface IShimmerEffectProps {
  width: number;
  height: number;
  borderRadius: number;
}

export function Shimmer({
  width: containerWidth,
  height,
  borderRadius,
}: IShimmerEffectProps) {
  const theme = useTheme();

  const translateX = useSharedValue(-containerWidth);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));


  useEffect(() => {
    translateX.value = withRepeat(
      withSequence(
        withTiming(-containerWidth, { duration: 0 }),
        withTiming(containerWidth, { duration: 1000 })
      ),
      -1,
      false
    );
  }, [containerWidth, translateX]);

  return (
    <S.Container
      width={containerWidth}
      height={height}
      borderRadius={borderRadius}
    >
      <View style={[StyleSheet.absoluteFillObject, { overflow: 'hidden' }]}>
        <S.Shimmer style={animatedStyles}>
          <S.Gradient
            colors={theme?.shimmer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </S.Shimmer>
      </View>
    </S.Container>
  );
}
