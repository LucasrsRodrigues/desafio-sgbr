import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { iconPaths } from './iconPaths';
import { IconProps } from './icon';

export function Icon({
  name,
  size = 24,
  color = '#000',
}: IconProps) {

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
      return `fill="${color}"`;
    }
  ).replace(
    /stroke="([^"]*)"/g,
    (match: string, value: string) => {
      // Preserva o valor "none"
      if (value.toLowerCase() === 'none') return match;
      return `stroke="${color}"`;
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