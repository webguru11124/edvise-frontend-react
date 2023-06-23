import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PageLoader } from 'Components/PageLoader';

const meta: Meta = {
  title: 'Atoms/PageLoader',
  component: PageLoader
};

export default meta;

const Template: StoryFn = (args) => <PageLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};
