import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EvaluationLesson, {
  EvaluationLessonProps
} from '../../../pages/MVP/evaluation/evaluation-lesson';

const meta: Meta = {
  title: 'MVP/Evaluaiton',
  component: EvaluationLesson
};

export default meta;

const Template: StoryFn<EvaluationLessonProps> = (args) => (
  <EvaluationLesson {...args} />
);

export const EvaluationLessonPage = Template.bind({});
EvaluationLessonPage.args = {
  id: 22
};
