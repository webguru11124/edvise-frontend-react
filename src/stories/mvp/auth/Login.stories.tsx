import { withRouter } from 'storybook-addon-react-router-v6';
import { Meta, StoryFn } from '@storybook/react';
import { Login } from '../../../features/authentication';

export default {
  title: 'MVP/Login',
  component: Login,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/forgot-password'
    }
  }
} as Meta;

const Template: StoryFn = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
