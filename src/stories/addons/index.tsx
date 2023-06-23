import { RequiredAuthProvider } from '@propelauth/react';
import { makeDecorator } from '@storybook/addons';

export const withAuth = makeDecorator({
  name: 'Propel Auth Decorator',
  parameterName: 'authRequired',
  wrapper: (Story: any, context) => (
    <RequiredAuthProvider authUrl='https://1081927381.propelauthtest.com'>
      <Story {...context} />
    </RequiredAuthProvider>
  )
});
