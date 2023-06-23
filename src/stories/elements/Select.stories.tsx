import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProps } from '../../elements/Select';

const meta: Meta = {
  title: 'Elements/Select',
  component: Select
};

export default meta;

const Template: StoryFn<SelectProps> = (args) => (
  <div className='w-[300px]'>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});

const options = [
  {
    id: '1',
    label: 'Label 1'
  },
  {
    id: '2',
    label: 'Label 2'
  },
  {
    id: '3',
    label: 'Label 3'
  },
  {
    id: '4',
    label: 'Label 4'
  }
];

Default.args = {
  options,
  value: options[2]
};
