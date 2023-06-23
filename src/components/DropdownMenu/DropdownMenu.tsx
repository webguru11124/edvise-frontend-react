import { Fragment } from 'react';
import { nanoid } from 'nanoid';
import { Menu, Transition } from '@headlessui/react';
import type { DropDownMenuTypes } from './DropdownMenu.interface';

export default function DropdownMenu({
  options,
  dropdownText,
  icon,
  rowData
}: DropDownMenuTypes) {
  const nanoID = nanoid();
  return (
    <button className='text-neutral-400' onClick={(e) => e.stopPropagation()}>
      <Menu
        as='div'
        className='text-slate-500 hover:text-slate-700 active:text-slate-500 relative'
      >
        <div>
          <Menu.Button className='flex items-center focus:outline-none capitalize'>
            {dropdownText && dropdownText} {icon && icon}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-xl focus:outline-none py-1.5 border border-slate-100'>
              {options?.map((option) => (
                <Menu.Item>
                  <div
                    className={`bg-white hover:bg-gray-100 ${
                      option.color ? option.color : 'text-neutral-500'
                    } hover:text-gray-700 block px-4 py-2 text-base`}
                    key={nanoID}
                    onClick={() => option.action(rowData)}
                    role='presentation'
                  >
                    <div className='flex items-center'>
                      <span>{option?.icon}</span>{' '}
                      <span className='ml-3'>{option.title}</span>
                    </div>
                  </div>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </button>
  );
}
