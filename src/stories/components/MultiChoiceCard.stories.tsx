import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  MultiChoiceCard as MultiChoiceCardComp,
  IMultiChoice
} from 'Components/GeneratePrompt';

const meta: Meta = {
  title: 'Components/GeneratePrompt',
  component: MultiChoiceCardComp
};

export default meta;

const Template: StoryFn<IMultiChoice> = (args) => (
  <MultiChoiceCardComp {...args} />
);

const choices = [
  'To replicate human behaviour',
  'To create new forms of communication',
  'To process large amounts of data',
  'To generate new ideas'
];

const question = 'What is the purpose of Aritifical Intelligence(AI)?';

export const MultiChoiceCard = Template.bind({});
MultiChoiceCard.args = {
  choices,
  question
};
