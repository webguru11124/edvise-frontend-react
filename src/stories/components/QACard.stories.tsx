import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  QACard as QACardComp,
  IQuestionAnswer
} from 'Components/GeneratePrompt';

const meta: Meta = {
  title: 'Components/GeneratePrompt',
  component: QACardComp
};

export default meta;

const Template: StoryFn<IQuestionAnswer> = (args) => <QACardComp {...args} />;

export const QuestionAnswerCard = Template.bind({});
QuestionAnswerCard.args = {
  id: '42424',
  number: 1,
  question:
    'What are the main types of machine learning algorithms, and how are they used in practice?',
  answer:
    'Supervised learning: This is where the machine learning model is trained on a labeled dataset, where the correct output is known for each input. Te commonly used for tasks such as clustering,'
};
