import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  CalendarMonth,
  Home,
  Note,
  Report,
  Settings,
  Group,
  Person
} from '@mui/icons-material';
import { Sidebar, SidebarProps } from '../../components/Sidebar';

const meta: Meta = {
  title: 'Atoms/Sidebar',
  component: Sidebar
};

export default meta;

const Template: StoryFn<SidebarProps> = (args) => (
  <div className='w-[350px]'>
    <Sidebar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'Dashboard', active: true, icon: <Home /> },
    { name: 'Staff', active: false, icon: <Group /> },
    { name: 'Evaluations', active: false, icon: <Note /> },
    { name: 'Reports', active: false, icon: <Report /> },
    { name: 'Schedule', active: false, icon: <CalendarMonth /> },
    { name: '', active: false, icon: <Home /> },
    { name: 'Profile', active: false, icon: <Person /> },
    { name: 'Settings', active: false, icon: <Settings /> }
  ]
};
