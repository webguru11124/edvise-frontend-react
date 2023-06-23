// .storybook/withTailwindTheme.decorator.js

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../src/services';

export const withTailwindTheme = (Story, context) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};
