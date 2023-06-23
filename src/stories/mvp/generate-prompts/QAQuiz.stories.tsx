import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import QuestionAnswerQuiz from 'Pages/generate-prompts/question-answer-quiz';
import { PromptCommonProps } from 'Pages/generate-prompts/generate-prompts.interface';

const meta: Meta = {
  title: 'MVP/GeneratePrompt',
  component: QuestionAnswerQuiz
};

export default meta;

const Template: StoryFn<PromptCommonProps> = (args) => (
  <QuestionAnswerQuiz {...args} />
);

export const QuestionAnswer = Template.bind({});
QuestionAnswer.args = {};
