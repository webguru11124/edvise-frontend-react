import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SideModal, SideModalProps } from '../../components/SideModal';

const meta: Meta = {
  title: 'Atoms/SideModal',
  component: SideModal
};

export default meta;

const Template: StoryFn<SideModalProps> = (args) => (
  <SideModal {...args}>
    <div className='w-[500px] py-8 px-12'>Here the modal content goes</div>
  </SideModal>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true
};
