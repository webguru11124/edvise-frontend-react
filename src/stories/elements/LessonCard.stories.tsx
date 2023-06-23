import { Meta, StoryFn } from '@storybook/react';
import LessonCard, { LessonCardProps } from '../../elements/LessonCard';
import thumbnailUrl from '../../assets/lesson1.png';
import avatarUrl from '../../assets/avatar.png';

export default {
  title: 'Elements/LessonCard',
  component: LessonCard
} as Meta;

const Template: StoryFn<LessonCardProps> = (args) => <LessonCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: '2023-01-31',
  teacherId: 'SK298989',
  teacherName: 'Teacher Name',
  avatarUrl,
  name: 'Lesson 1',
  thumbnailUrl,
  videoDuration: 30000
};
