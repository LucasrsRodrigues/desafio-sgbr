import React from 'react';

import { Box } from '@components/base';
import { ModelHeader } from './sections/ModelHeader';
import { ModelsList } from './sections/ModelList';

export function Model() {
  return (
    <Box padding={24} topSafe>
      <ModelHeader />

      <ModelsList />
    </Box>
  );
}