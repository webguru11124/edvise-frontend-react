import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SocialButton, SocialButtonProps } from '../../components/Button';

const meta: Meta = {
  title: 'Atoms/SocialButton',
  component: SocialButton
};

export default meta;

const Template: StoryFn<SocialButtonProps> = (args) => (
  <SocialButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'Google'
};
