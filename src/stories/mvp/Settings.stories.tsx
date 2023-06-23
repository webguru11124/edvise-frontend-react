import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Settings from '../../pages/MVP/settings';
import AvatarImage from '../assets/avatar.png';

const meta: Meta = {
  title: 'MVP/Settings',
  component: Settings
};

export default meta;

const Template: StoryFn = (args) => <Settings {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    avatar: AvatarImage,
    firstName: 'Anabel',
    lastName: 'Rohan',
    email: 'anabelrohan@gmail.com'
  },
  role: 'Admin',
  roleName: 'Super Admin'
};
