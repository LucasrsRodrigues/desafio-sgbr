import React from 'react';

import { Box } from '@components/base';
import { HomeHeader } from './sections/HomeHeader';
import { BrandsList } from './sections/BrandsList';

export function Home() {
  return (
    <Box padding={24} topSafe>
      <HomeHeader />

      <BrandsList />
    </Box>
  );
}