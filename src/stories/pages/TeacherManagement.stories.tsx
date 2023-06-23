import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import TeacherManagement, {
  TeacherManagementProps
} from '../../pages/teacher-management';

import * as Sidebar from '../components/Sidebar.stories';
import * as PageHeader from '../components/PageHeader.stories';
import * as Navbar from '../components/Navbar.stories';
import * as AnalyzedLessons from '../components/AnalyzedLessons.stories';
import * as LessonFolder from '../components/LessonFolder.stories';

const meta: Meta = {
  title: 'pages/TeacherManagement',
  component: TeacherManagement
};

export default meta;

const Template: StoryFn<TeacherManagementProps> = (args) => (
  <TeacherManagement {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: Sidebar.Default.args?.items,
  unread: PageHeader.Default.args?.unread,
  user: PageHeader.Default.args?.user,
  navs: Navbar.Default.args?.navs,
  teacher: Navbar.Default.args?.teacher,
  analyzedLessons: AnalyzedLessons.Default.args?.analyzedLessons,
  lessonFolders: LessonFolder.Default.args?.lessonFolders
};
