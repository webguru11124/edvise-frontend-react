import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  StatusDropDown,
  StatusDropdownProps
} from '../../components/StatusDropdown';

const meta: Meta = {
  title: 'Atoms/StatusDropdown',
  component: StatusDropDown
};

export default meta;

const Template: StoryFn<StatusDropdownProps> = (args) => (
  <div className='flex justify-center w-full'>
    <StatusDropDown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  status: 1
};
