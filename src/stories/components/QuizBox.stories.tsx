import { Meta, StoryFn } from '@storybook/react';
import { QuizBoxList } from 'Components/QuizBox';

const meta: Meta = {
  title: 'Atoms/QuizBox',
  component: QuizBoxList
};

export default meta;

const Template: StoryFn = () => <QuizBoxList />;

export const Default = Template.bind({});
