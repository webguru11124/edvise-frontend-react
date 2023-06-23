import { Meta, StoryFn } from '@storybook/react';
import TeacherLessons from '../../features/teacher-lessons';
import { Default as TopBarStories } from '../components/TopBar.stories';
import avatarUrl from '../../assets/avatar.png';
import thumbnailUrl from '../../assets/lesson1.png';

const options = [
  {
    title: 'Edit',
    action: (el: any) => {
      console.log(el);
    }
  },
  {
    title: 'Delete',
    action: () => {
      /* Delete Role */
    }
  }
];

const lessons = [
  {
    date: '2023-01-31',
    teacherId: 'SK298989',
    teacherName: 'Teacher Name',
    avatarUrl,
    name: 'Lesson 1',
    thumbnailUrl,
    videoDuration: 30000,
    options
  },
  {
    date: '2023-01-30',
    teacherId: 'SK298983',
    teacherName: 'Jane Doe',
    avatarUrl,
    name: 'Lesson 2',
    thumbnailUrl,
    videoDuration: 40000,
    options
  },
  {
    date: '2023-01-29',
    teacherId: 'SK298982',
    teacherName: 'Melissa Styles',
    avatarUrl,
    name: 'Lesson 3',
    thumbnailUrl,
    videoDuration: 10000,
    options
  },
  {
    date: '2023-01-28',
    teacherId: 'SK298981',
    teacherName: 'John Frances',
    avatarUrl,
    name: 'Lesson 4',
    thumbnailUrl,
    videoDuration: 20000,
    options
  }
];

export default {
  title: 'Pages/TeacherLessons',
  component: TeacherLessons
} as Meta;

const Template: StoryFn = () => <TeacherLessons />;

export const Default = Template.bind({});

export const EmptyTeacherLessons = Template.bind({});

Default.args = {
  ...TopBarStories.args,
  lessons
};

EmptyTeacherLessons.args = {
  ...TopBarStories.args,
  lessons: []
};
