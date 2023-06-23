import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UploadProfile from '../../../pages/Auth/UploadProfile';

const meta: Meta = {
  title: 'MVP/UploadProfile',
  component: UploadProfile
};

export default meta;

const Template: StoryFn = (args) => <UploadProfile {...args} />;

export const Default = Template.bind({});
Default.args = {};
