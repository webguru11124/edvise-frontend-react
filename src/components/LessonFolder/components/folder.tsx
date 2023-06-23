import { FC, useCallback, useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Badge } from './badge';
import { ChevronDown, ChevronRight, FolderOpen } from '../../Icons';
import ScheduleButton from './schedule-button';
import SubFolder, { SubFolderProps } from './sub-folder';

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

export interface FolderProps {
  title: string;
  date: string;
  progress: number;
  subs: Array<SubFolderProps>;
  open: boolean;
}

const Folder: FC<FolderProps> = ({ title, date, subs, open }) => {
  const [isOpen, setOpen] = useState(open);

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='border-b border-neutral-200'>
      <div className='w-full flex px-5 items-center'>
        <div className='py-4 px-2 w-10'>
          <button onClick={toggleOpen}>
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </button>
        </div>

        <div className='py-4 px-2 flex-4'>
          <div className='flex items-center'>
            <FolderOpen />
            <span className='ml-3 text-neutral-500'>{title}</span>
          </div>
        </div>

        <div className='py-4 px-2 flex-1 text-neutral-800'>{date}</div>

        <div className='py-4 px-2 w-60'>
          <Badge text='Not completed' variant='critical' />
        </div>

        <div className='py-4 px-2 w-32 flex justify-center'>
          <ScheduleButton />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-100 scale-y-0'
        enterTo='transform opacity-100 scale-y-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-y-100'
        leaveTo='transform opacity-100 scale-y-0'
        show={isOpen}
      >
        <div>
          {subs.map((sub, index) => (
            <SubFolder
              title={sub.title}
              date={sub.date}
              progress={sub.progress}
              key={index}
              tableOptions={tableOptions}
            />
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Folder;
