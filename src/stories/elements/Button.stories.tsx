import { Meta, StoryFn } from '@storybook/react';
import Button from '../../elements/Button';
import {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant
} from '../../types';

export default {
  title: 'Elements/Button',
  component: Button
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: ButtonSize.MEDIUM,
  color: ButtonColor.PRIMARY,
  variant: ButtonVariant.POLYGON,
  className: 'p-3',
  children: 'Enter'
};
