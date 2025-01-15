import React from "react";
import { useTheme } from "styled-components/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export default function UnsafeNavigation() {
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
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  )
}