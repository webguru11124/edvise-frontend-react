import React, { FC, Fragment, SyntheticEvent } from 'react';
import { Filter, Search } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';

export interface EvaluationTableFilterProps {
  onClick: () => void;
}

const EvaluationTableFilter: FC<EvaluationTableFilterProps> = ({ onClick }) => {
  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onClick();
  };

  return (
    <div className='flex align-center'>
      <div className='w-full'>
        <div className='relative rounded-md shadow-sm'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500'>
            <Search className='w-4' />
          </div>
          <input
            type='text'
            name='search'
            id='search'
            className='block w-full rounded-md pl-10 text-neutral-500 text-base border-transparent focus:border-transparent focus:ring-0'
            placeholder='Search'
          />
        </div>
      </div>
      <div className='ml-2'>
        <Menu>
          <div className='relative inline-block text-left'>
            <div>
              <Menu.Button className='inline-flex items-center rounded-md bg-skyblue-400 px-3 py-2 text-white text-base font-medium leading-4 shadow-sm'>
                Filter
                <Filter className='w-5 ml-2' />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-opacity-5 focus:outline-none'>
                <div className='p-4'>
                  <Menu.Item>
                    {() => (
                      <button
                        onClick={(e: SyntheticEvent<HTMLButtonElement>) =>
                          handleClick(e)
                        }
                        className='rounded block px-4 py-2 text-sm font-medium hover:bg-skyblue-100 bg-skyblue-100 text-skyblue-500'
                      >
                        Should be replaced by filters
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default EvaluationTableFilter;
