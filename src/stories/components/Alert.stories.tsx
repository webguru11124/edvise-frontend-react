import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Alert, AlertProps } from 'Components/Alert';

const meta: Meta = {
  title: 'Atoms/Alert',
  component: Alert
};

export default meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hi, how are you?',
  variant: 'info'
};
