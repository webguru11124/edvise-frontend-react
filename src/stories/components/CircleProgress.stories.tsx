import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  CircleProgress,
  CircleProgressProps
} from '../../components/CircleProgress';

const meta: Meta = {
  title: 'Atoms/CircleProgress',
  component: CircleProgress
};

export default meta;

const Template: StoryFn<CircleProgressProps> = (args) => (
  <CircleProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  percentage: 30
};
