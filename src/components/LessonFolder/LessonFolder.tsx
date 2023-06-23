import { FC } from 'react';
import Folder, { FolderProps } from './components/folder';

export interface LessonFolderProps {
  lessonFolders: Array<FolderProps>;
}

const LessonFolder: FC<LessonFolderProps> = ({ lessonFolders }) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold text-neutral-500 mr-10 mb-5'>
        Lesson Folder
      </h3>
      <div className='overflow-hidden rounded-lg'>
        <div className='bg-neutral-100 text-neutral-500 text-left py-6 px-5 rounded-medium flex'>
          <div className='px-2 w-10' />
          <div className='px-2 flex-4'>Task</div>
          <div className='px-2 flex-1'>Due Date</div>
          <div className='px-2 w-60'>Status</div>
          <div className='px-2 w-32 flex justify-center'>Progress</div>
        </div>
        <div className='w-full'>
          {lessonFolders.map(({ title, open, progress, date, subs }, index) => (
            <Folder
              key={index}
              title={title}
              date={date}
              open={open}
              progress={progress}
              subs={subs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonFolder;
