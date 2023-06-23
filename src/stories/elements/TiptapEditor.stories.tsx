import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TiptapEditor, TiptapProps } from '../../components/TiptapEditor';

const meta: Meta = {
  title: 'Elements/TiptapEditor',
  component: TiptapEditor
};

export default meta;

const Template: StoryFn<TiptapProps> = (args) => <TiptapEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  scrollable: false
};
