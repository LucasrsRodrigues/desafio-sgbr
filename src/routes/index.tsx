import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SafeNavigation from "./safe.routes";
import UnsafeNavigation from "./unsafe.routes";
import { useAuth } from "@hooks/auth";

export function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <SafeNavigation /> : <UnsafeNavigation />}
    </NavigationContainer>
  )
}