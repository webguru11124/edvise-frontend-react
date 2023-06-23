import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { TextField, TextFieldProps } from '../../components/TextField';

const meta: Meta = {
  title: 'Atoms/TextField',
  component: TextField
};

export default meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Email',
  type: 'text'
};
