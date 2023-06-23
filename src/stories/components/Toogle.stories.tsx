import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toggle, ToggleProps } from '../../components/Toggle';

const meta: Meta = {
  title: 'Atoms/Toggle',
  component: Toggle
};

export default meta;

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'critical',
  checked: true
};
