import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PageHeader, PageHeaderProps } from '../../components/PageHeader';

import AvatarImage from '../assets/avatar.png';

const meta: Meta = {
  title: 'Atoms/PageHeader',
  component: PageHeader
};

export default meta;

const Template: StoryFn<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    avatar: AvatarImage,
    name: 'Annabel Roban',
    role: 'Super Admin User'
  },
  unread: true
};
