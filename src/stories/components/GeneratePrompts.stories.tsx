import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PromptCard, PromptCardProps } from 'Components/GeneratePrompts';
import { PromptMultiChoiceContained } from 'Components/Icons';

const meta: Meta = {
  title: 'Atoms/PromptCard',
  component: PromptCard
};

export default meta;

const PromptCardTemplate: StoryFn<PromptCardProps> = (args) => (
  <div className='w-[300px]'>
    <PromptCard {...args} />
  </div>
);
export const PromptCards = PromptCardTemplate.bind({});
PromptCards.args = {
  icon: <PromptMultiChoiceContained />,
  title: 'Lesson Summary',
  description: 'Lesson content goes here.'
};
