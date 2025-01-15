import React from "react";
import { useTheme } from "styled-components/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Model } from "@screens/Model";

const { Navigator, Screen } = createNativeStackNavigator();

export default function SafeNavigation() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        }
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Model" component={Model} />
    </Navigator>
  )
}