import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Evaluation from '../../../pages/MVP/evaluation';

const meta: Meta = {
  title: 'MVP/Evaluaiton',
  component: Evaluation
};

export default meta;

const Template: StoryFn = () => <Evaluation />;

export const Default = Template.bind({});
Default.args = {};
