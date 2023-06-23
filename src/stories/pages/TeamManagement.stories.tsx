import { Meta } from '@storybook/react';

import TeamManagement from 'Features/team-management';

const meta: Meta = {
  title: 'pages/TeamManagement',
  component: TeamManagement
};

export default meta;

const Template = () => <TeamManagement />;

export const Default = Template.bind({});
