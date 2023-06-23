import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  ForgotPassword,
  ForgotPasswordProps,
  ResetPasswordStep
} from '../../../features/forgot-password';

const meta: Meta = {
  title: 'MVP/Forgot Password',
  component: ForgotPassword
};

export default meta;

const Template: StoryFn<ForgotPasswordProps> = (args) => (
  <ForgotPassword {...args} />
);

export const Default = Template.bind({});
Default.args = {
  step: ResetPasswordStep.SEND_MAIL
};
