import { FC } from 'react';
import { FileMinus } from '../../Icons';
import { Badge } from './badge';
import { CircleProgress } from '../../CircleProgress';
import ScheduleButton from './schedule-button';

import { DropdownMenu } from '../../DropdownMenu';

export interface SubFolderProps {
  title: string;
  date: string;
  progress: number;
  tableOptions: { title: string; action: () => void }[];
}

const SubFolder: FC<SubFolderProps> = ({
  title,
  date,
  progress,
  tableOptions
}) => (
  <div className='w-full flex px-5 items-center'>
    <div className='py-4 px-2 w-10' />
    <div className='py-4 px-2 flex-4'>
      <div>
        <div className='ml-10 flex items-center'>
          <FileMinus />
          <span className='ml-3 text-neutral-500'>{title}</span>
        </div>
      </div>
    </div>
    <div className='py-4 px-2 flex-1 text-neutral-800'>{date}</div>
    <div className='py-4 px-2 w-60'>
      {progress === 0 ? (
        <Badge variant='critical' text='Not Completed' />
      ) : progress === 100 ? (
        <Badge variant='skyblue' text='Completed' />
      ) : (
        <Badge variant='secondary' text='In Progress' />
      )}
    </div>
    <div className='py-4 px-2 w-32 flex justify-center'>
      {progress === 0 ? (
        <ScheduleButton />
      ) : progress === 100 ? (
        <DropdownMenu options={tableOptions} />
      ) : (
        <CircleProgress percentage={progress} />
      )}
    </div>
  </div>
);

export default SubFolder;
