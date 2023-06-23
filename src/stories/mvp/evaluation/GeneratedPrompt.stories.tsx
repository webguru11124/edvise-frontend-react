import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GeneratedPrompt from '../../../pages/MVP/evaluation/generated-prompts/prompt';
import { PromptProps } from '../../../pages/MVP/evaluation/evaluation.interface';

const meta: Meta = {
  title: 'MVP/Evaluaiton/GeneratedPrompt',
  component: GeneratedPrompt
};

export default meta;

const Template: StoryFn<PromptProps> = (args) => (
  <div className='w-[500px] p-5'>
    <GeneratedPrompt {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'warning',
  title: 'Lesson Summary',
  content: 'Example Content Sentence'
};
