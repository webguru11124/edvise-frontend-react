import { Meta, StoryFn } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from 'Elements/ButtonGroup';

export default {
  title: 'Elements/ButtonGroup',
  component: ButtonGroup
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttons: [
    { text: 'Lesson', active: false },
    { text: 'Prompts', active: false },
    { text: 'Focus Area', active: true }
  ]
};
