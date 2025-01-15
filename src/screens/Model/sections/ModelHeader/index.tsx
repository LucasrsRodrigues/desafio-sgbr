import React, { useEffect } from 'react';
import { useAuth } from '@hooks/auth';
import { useThemeSwitcher } from '@hooks/themeSwitcher';

import { Heading, HStack, IconButton } from '@components/base';
import { useNavigation, useRoute } from '@react-navigation/native';

export function ModelHeader() {
  const { user, logout } = useAuth();
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const { toggleTheme, isDarkMode } = useThemeSwitcher();

  useEffect(() => {
    console.log(params)
  }, [])

  return (
    <HStack justifyContent="space-between">
      <IconButton icon="arrow_left" onPress={goBack} />

      <Heading variant="heading4">
        {params?.brand?.nome}
      </Heading>

      <IconButton icon={isDarkMode ? "sun" : "moon"} onPress={toggleTheme} />

    </HStack>
  );
}