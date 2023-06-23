import 'tailwindcss/tailwind.css';

import { withTailwindTheme } from './withTailwindTheme.decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [withTailwindTheme];
