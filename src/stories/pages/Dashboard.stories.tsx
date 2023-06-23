import { Meta, StoryFn } from '@storybook/react';

import Dashboard, { DashboardProps } from 'Pages/dashboard';
import * as Sidebar from '../components/Sidebar.stories';
import * as PageHeader from '../components/PageHeader.stories';

const meta: Meta = {
  title: 'pages/Dashboard',
  component: Dashboard
};

export default meta;

const Template: StoryFn<DashboardProps> = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Sidebar.Default.args?.items,
  unread: PageHeader.Default.args?.unread,
  user: PageHeader.Default.args?.user
};
