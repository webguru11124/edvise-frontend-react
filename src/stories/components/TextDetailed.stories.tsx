import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextDetailed, TextDetailedProps } from '../../components/TextDetailed';

const meta: Meta = {
  title: 'Atoms/TextDetailed',
  component: TextDetailed
};

export default meta;

const Template: StoryFn<TextDetailedProps> = (args) => (
  <div style={{ width: '200px' }}>
    <TextDetailed {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Main Text Lorem Ipsum is simply dummy text',
  detail: 'Detail Text Lorem Ipsum is simply dummy text'
};
