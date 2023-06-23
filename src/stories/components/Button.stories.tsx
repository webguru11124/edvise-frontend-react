import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../../components/Button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Sign In',
  shape: 'round',
  width: 'fit-content',
  color: 'primary'
};
