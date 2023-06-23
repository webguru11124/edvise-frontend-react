import { FC } from 'react';

import { Sidebar } from '../components/Sidebar';
import { PageHeader } from '../components/PageHeader';
import { Navbar, NavbarProps } from '../components/Navbar';
import {
  AnalyzedLessons,
  AnalyzedLessonProps
} from '../components/AnalyzedLessons';
import { LessonFolder, LessonFolderProps } from '../components/LessonFolder';

import { SidebarProps } from '../components/Sidebar/Sidebar';
import { PageHeaderProps } from '../components/PageHeader/PageHeader';

export interface TeacherManagementProps
  extends SidebarProps,
    PageHeaderProps,
    NavbarProps,
    AnalyzedLessonProps,
    LessonFolderProps {}

const TeacherManagement: FC<TeacherManagementProps> = ({
  items,
  unread,
  user,
  navs,
  teacher,
  analyzedLessons,
  lessonFolders
}) => {
  return (
    <div className='w-full'>
      <div className='h-0'>
        <div className='w-[300px] fixed top-0 left-0'>
          <Sidebar items={items} />
        </div>
      </div>
      <div className='pl-[300px]'>
        <div className='py-3 px-10'>
          <PageHeader unread={unread} user={user} />
          <Navbar navs={navs} teacher={teacher} />

          <AnalyzedLessons analyzedLessons={analyzedLessons} />

          <div className='mt-6'>
            <LessonFolder lessonFolders={lessonFolders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherManagement;
