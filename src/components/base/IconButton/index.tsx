import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { Icon } from '@components/base/Icon';
import { IconName } from '@components/base/Icon/icon';
import * as S from './styles';

interface IIconButtonProps extends TouchableOpacityProps {
  icon: IconName;
  color?: string;
  size?: number;
}

export function IconButton({ icon, size = 24, color, ...rest }: IIconButtonProps) {
  return (
    <S.IconButtonContainer {...rest}>
      <Icon name={icon} size={size} color={color} />
    </S.IconButtonContainer>
  );
}