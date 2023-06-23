import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Navbar, NavbarProps } from '../../components/Navbar';

import AvatarOne from '../assets/avatar.png';

const meta: Meta = {
  title: 'Atoms/Navbar',
  component: Navbar
};

export default meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  teacher: {
    name: 'Annabel Rohan',
    code: 'SK298392',
    avatar: AvatarOne
  },

  navs: [
    {
      name: 'Overview',
      active: true
    },
    {
      name: 'Schedule',
      active: false
    },
    {
      name: 'Attachments',
      active: false
    },
    {
      name: 'Trends',
      active: false
    }
  ]
};
