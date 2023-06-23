import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LessonFolder, LessonFolderProps } from '../../components/LessonFolder';

const meta: Meta = {
  title: 'Atoms/LessonFolder',
  component: LessonFolder
};

export default meta;

const Template: StoryFn<LessonFolderProps> = (args) => (
  <LessonFolder {...args} />
);

const tableOptions = [
  {
    title: 'Edit',
    action: () => {
      /* */
    }
  },
  {
    title: 'Delete',
    action: () => {
      /* */
    }
  }
];

export const Default = Template.bind({});
Default.args = {
  lessonFolders: [
    {
      open: false,
      title: 'Task 1',
      date: '17 Jan, 2023',
      progress: 0,
      subs: [
        {
          title: 'Sub Task 1-1',
          date: '17 Jan, 2023',
          progress: 100,
          tableOptions
        },
        {
          title: 'Sub Task 1-2',
          date: '17 Jan, 2023',
          progress: 30,
          tableOptions
        }
      ]
    },
    {
      open: true,
      title: 'Task 2',
      date: '17 Jan, 2023',
      progress: 75,
      subs: [
        {
          title: 'Sub Task 2-1',
          date: '17 Jan, 2023',
          progress: 100,
          tableOptions
        },
        {
          title: 'Sub Task 2-2',
          date: '17 Jan, 2023',
          progress: 45,
          tableOptions
        },
        {
          title: 'Sub Task 2-3',
          date: '18 Jan, 2023',
          progress: 0,
          tableOptions
        }
      ]
    },
    {
      open: false,
      title: 'Task 3',
      date: '17 Jan, 2023',
      progress: 40,
      subs: []
    }
  ]
};
