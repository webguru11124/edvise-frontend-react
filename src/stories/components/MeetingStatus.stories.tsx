import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  MeetingStatus,
  MeetingStatusProps,
  MeetingStatusEnum
} from '../../components/MeetingStatus';

const meta: Meta = {
  title: 'Atoms/MeetingStatus',
  component: MeetingStatus
};

export default meta;

const Template: StoryFn<MeetingStatusProps> = (args) => (
  <MeetingStatus {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: MeetingStatusEnum.DISCUSSION
};
