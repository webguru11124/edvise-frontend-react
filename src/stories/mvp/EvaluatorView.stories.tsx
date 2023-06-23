import React from 'react';
import { Home } from '@mui/icons-material';
import { Meta, StoryFn } from '@storybook/react';

import EvaluatorView, { EvaluatorViewProps } from '../../pages/evaluator-view';

import * as PageHeader from '../components/PageHeader.stories';

const meta: Meta = {
  title: 'Pages/EvaluatorView',
  component: EvaluatorView
};

export default meta;

const Template: StoryFn<EvaluatorViewProps> = (args) => (
  <EvaluatorView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [{ name: 'Dashboard', active: true, icon: <Home /> }],
  unread: PageHeader.Default.args?.unread,
  user: PageHeader.Default.args?.user
};
