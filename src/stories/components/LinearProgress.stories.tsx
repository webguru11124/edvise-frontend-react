import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  LinearProgress,
  LinearProgressProps
} from '../../components/LinearProgress';

const meta: Meta = {
  title: 'Atoms/LinearProgress',
  component: LinearProgress
};

export default meta;

const Template: StoryFn<LinearProgressProps> = (args) => (
  <LinearProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'critical',
  value: 45
};
