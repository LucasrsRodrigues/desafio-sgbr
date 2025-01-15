import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { iconPaths } from './iconPaths';
import { IconProps } from './icon';
import { useTheme } from 'styled-components/native';

export function Icon({
  name,
  size = 24,
  color = undefined,
}: IconProps) {
  const theme = useTheme();

  const getIconPath = () => {
    const icon = iconPaths[name];

    if (!icon) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return icon;
  };

  const iconPath = getIconPath();

  if (!iconPath) return null;

  // Substitui as cores no SVG
  const processedPath = iconPath.replace(
    /fill="([^"]*)"/g,
    (match: string, value: string) => {
      // Preserva o valor "none"
      if (value.toLowerCase() === 'none') return match;
      return `fill="${color ?? theme.colors.icon}"`;
    }
  ).replace(
    /stroke="([^"]*)"/g,
    (match: string, value: string) => {
      // Preserva o valor "none"
      if (value.toLowerCase() === 'none') return match;
      return `stroke="${color ?? theme.colors.icon}"`;
    }
  )

  return (
    <View>
      <SvgXml
        xml={processedPath}
        width={size}
        height={size}
      />
    </View>
  );
}