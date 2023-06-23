import { Meta, StoryFn } from '@storybook/react';
import LessonSummaryComp from 'Pages/generate-prompts/lesson-summary';
import { PromptCommonProps } from 'Pages/generate-prompts/generate-prompts.interface';

const meta: Meta = {
  title: 'MVP/GeneratePrompt',
  component: LessonSummaryComp
};

export default meta;

const Template: StoryFn<PromptCommonProps> = (args) => (
  <LessonSummaryComp {...args} />
);

export const LessonSummary = Template.bind({});
LessonSummary.args = {};
