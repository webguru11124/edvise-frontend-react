import React, { FC, Fragment } from 'react';
import { ChevronDown } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';

export enum StatusEnum {
  DISCUSSION = 0,
  IN_PROGRESS = 1,
  NOT_STARTED = 2
}

export interface StatusDropdownProps {
  onClick?: (status: StatusEnum) => void;
  status: StatusEnum;
}

type MenuItemProps = {
  active: boolean;
};

const STATUS_BUTTON_MAP = {
  [StatusEnum.DISCUSSION]: {
    text: 'Discussion',
    classes: 'bg-skyblue-50 hover:bg-skyblue-100 text-skyblue-500'
  },
  [StatusEnum.IN_PROGRESS]: {
    text: 'In Progress',
    classes: 'bg-secondary-50 hover:bg-secondary-100 text-secondary-400'
  },
  [StatusEnum.NOT_STARTED]: {
    text: 'Not Started',
    classes: 'bg-critical-100 hover:bg-critical-200 text-critical-500'
  }
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const StatusDropdown: FC<StatusDropdownProps> = ({ status, onClick }) => {
  const { text, classes } = STATUS_BUTTON_MAP[status] || {
    text: 'Not Defined',
    classes: 'bg-critical-100 hover:bg-critical-200 text-critical-500'
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _status: StatusEnum
  ) => {
    if (!onClick) return;
    e.preventDefault();
    e.stopPropagation();

    onClick(_status);
  };

  return (
    <Menu>
      <div className='relative inline-block text-left'>
        <div>
          <Menu.Button
            className={`inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 shadow-sm ${classes}`}
          >
            {text}
            <ChevronDown />
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
                {({ active }: MenuItemProps) => (
                  <button
                    onClick={(e) => handleClick(e, StatusEnum.DISCUSSION)}
                    className={classNames(
                      active ? 'bg-skyblue-100' : '',
                      'rounded block px-4 py-2 text-sm font-medium hover:bg-skyblue-100 text-skyblue-500'
                    )}
                  >
                    Discussion
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: MenuItemProps) => (
                  <button
                    onClick={(e) => handleClick(e, StatusEnum.IN_PROGRESS)}
                    className={classNames(
                      active ? 'bg-secondary-50' : '',
                      'rounded block px-4 py-2 text-sm font-medium hover:bg-secondary-50 text-secondary-400'
                    )}
                  >
                    In Progress
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: MenuItemProps) => (
                  <button
                    onClick={(e) => handleClick(e, StatusEnum.NOT_STARTED)}
                    className={classNames(
                      active ? 'bg-critical-200' : '',
                      'rounded block px-4 py-2 text-sm font-medium hover:bg-critical-200 text-critical-500'
                    )}
                  >
                    Not Started
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default StatusDropdown;
