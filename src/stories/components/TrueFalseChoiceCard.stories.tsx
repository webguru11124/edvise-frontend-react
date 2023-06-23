import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  TrueFalseChoiceCard as TrueFalseChoiceComp,
  ITrueFalseChoice
} from 'Components/GeneratePrompt';

const meta: Meta = {
  title: 'Components/GeneratePrompt',
  component: TrueFalseChoiceComp
};

export default meta;

const Template: StoryFn<ITrueFalseChoice> = (args) => (
  <TrueFalseChoiceComp {...args} />
);

const question = 'What is the purpose of Aritifical Intelligence(AI)?';

export const TrueFalseChoice = Template.bind({});
TrueFalseChoice.args = {
  answer: true,
  question,
  id: '1'
};
