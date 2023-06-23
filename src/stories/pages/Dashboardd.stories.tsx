import { withRouter } from 'storybook-addon-react-router-v6';
import { Meta, StoryFn } from '@storybook/react';
import Dashboard from '../../pages/dashboardd';
import { withAuth } from '../addons';

const meta: Meta = {
  title: 'Pages/Dashboardd',
  component: Dashboard,
  decorators: [withAuth, withRouter],
  parameters: {
    authRequired: true,
    reactRouter: {
      routePath: '/'
    }
  }
};

export default meta;

const Template: StoryFn = () => <Dashboard />;

export const Default = Template.bind({});
