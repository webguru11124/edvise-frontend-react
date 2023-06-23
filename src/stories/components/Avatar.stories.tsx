import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from '../../components/Avatar';
import AvatarImage from '../assets/avatar.png';

const meta: Meta = {
  title: 'Atoms/Avatar',
  component: Avatar
};

export default meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  shape: 'round',
  url: AvatarImage
};
