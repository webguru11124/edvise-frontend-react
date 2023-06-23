import { Meta, StoryFn } from '@storybook/react';
import MultiChoiceQuiz from 'Pages/generate-prompts/multi-choice-quiz';
import { PromptCommonProps } from 'Pages/generate-prompts/generate-prompts.interface';

const meta: Meta = {
  title: 'MVP/GeneratePrompt',
  component: MultiChoiceQuiz
};

export default meta;

const Template: StoryFn<PromptCommonProps> = (args) => (
  <MultiChoiceQuiz {...args} />
);

export const MultiChoice = Template.bind({});
MultiChoice.args = {};
