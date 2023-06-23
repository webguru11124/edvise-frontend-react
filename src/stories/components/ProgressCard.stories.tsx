import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProgressCard, ProgressCardProps } from '../../components/ProgressCard';
import { Vector } from '../../components/Icons';

const meta: Meta = {
  title: 'Atoms/ProgressCard',
  component: ProgressCard
};

export default meta;

const Template: StoryFn<ProgressCardProps> = (args) => (
  <ProgressCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'success',
  position: 'right-bottom',
  progress: 30,
  text: 'Analyzing Lesson',
  icon: <Vector />
};
