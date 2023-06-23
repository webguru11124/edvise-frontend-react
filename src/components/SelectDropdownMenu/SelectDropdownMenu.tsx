import { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Menu, Transition } from '@headlessui/react';
import type { DropDownMenuTypes } from '../DropdownMenu';

export default function SelectDropdownMenu({
  options,
  dropdownText
}: DropDownMenuTypes) {
  const nanoID = nanoid();
  const [activeSelection, setActiveSelection] = useState(dropdownText);

  const handleOptionClick = (event: React.MouseEvent) => {
    const e = event.target as HTMLElement;
    setActiveSelection(e.innerText);
  };

  return (
    <button className='text-neutral-400'>
      <Menu
        as='div'
        className='text-slate-500 hover:text-slate-700 active:text-slate-500 relative'
      >
        <div>
          <Menu.Button className='flex items-center focus:outline-none'>
            {activeSelection} <ExpandMoreIcon />
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
            <Menu.Items className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-xl focus:outline-none'>
              {options?.map((option) => (
                <Menu.Item>
                  <div
                    className='bg-white hover:bg-gray-100 text-neutral-500 hover:text-gray-700 block px-4 py-2 text-base'
                    key={nanoID}
                    onClick={(event) => {
                      handleOptionClick(event);
                      option.action();
                    }}
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
