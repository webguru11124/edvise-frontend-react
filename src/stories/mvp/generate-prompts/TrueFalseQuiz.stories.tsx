import { Meta, StoryFn } from '@storybook/react';
import TrueFalseQuiz from 'Pages/generate-prompts/true-false-quiz';
import { PromptCommonProps } from 'Pages/generate-prompts/generate-prompts.interface';

const meta: Meta = {
  title: 'MVP/GeneratePrompt',
  component: TrueFalseQuiz
};

export default meta;

const Template: StoryFn<PromptCommonProps> = (args) => (
  <TrueFalseQuiz {...args} />
);

export const TrueFalseChoice = Template.bind({});
TrueFalseChoice.args = {};
