import React from 'react';
import { useAuth } from '@hooks/auth';
import { useThemeSwitcher } from '@hooks/themeSwitcher';

import { Heading, HStack, IconButton } from '@components/base';

export function HomeHeader() {
  const { user, logout } = useAuth();
  const { toggleTheme, isDarkMode } = useThemeSwitcher();

  return (
    <HStack justifyContent="space-between">
      <Heading variant="heading4">
        Bem vindo, {user?.name}!
      </Heading>

      <IconButton icon={isDarkMode ? "sun" : "moon"} onPress={toggleTheme} />
      <IconButton icon="logout" onPress={logout} />
    </HStack>
  );
}