import { FC, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ContentCopy, Delete, Edit, MoreHoriz } from '@mui/icons-material';

interface IPopOver {
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const PopOver: FC<IPopOver> = ({ onEdit, onDelete, onDuplicate }) => (
  <Popover className='relative'>
    <Popover.Button className='outline-none text-neutral-600 hover:text-neutral-900 active:text-neutral-500 cursor-pointer'>
      <MoreHoriz />
    </Popover.Button>
    <Transition
      as={Fragment}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'
    >
      <Popover.Panel className='absolute right-0 top-[100%] w-[150px] py-1 z-10 bg-white shadow-sm shadow-gray-300 rounded-md'>
        {({ close }) => (
          <div className='w-full'>
            <button
              className='w-full text-sm text-neutral-500 flex items-center hover:text-neutral-600 active:text-neutral-500 hover:bg-gray-200 px-4 py-1'
              onClick={() => {
                close();
                onEdit();
              }}
            >
              <Edit className='mr-2' fontSize='small' />
              <h3>Edit</h3>
            </button>
            <button
              className='w-full text-sm text-neutral-500 flex items-center hover:text-neutral-600 active:text-neutral-500 hover:bg-gray-200 px-4 py-1'
              onClick={() => {
                onDuplicate();
                close();
              }}
            >
              <ContentCopy className='mr-2' fontSize='small' />
              <h3>Duplicate</h3>
            </button>
            <button
              className='w-full text-sm text-neutral-500 flex items-center hover:text-neutral-600 active:text-neutral-500 hover:bg-gray-200 px-4 py-1 text-red-500'
              onClick={() => {
                onDelete();
                close();
              }}
            >
              <Delete className='mr-2' fontSize='small' />
              <h3>Delete</h3>
            </button>
          </div>
        )}
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default PopOver;
