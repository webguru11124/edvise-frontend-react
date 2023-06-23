import { FC } from 'react';

import { Divider } from './SidebarDivider';

import { SidebarItemProps } from './Sidebar';

export const SidebarItem: FC<SidebarItemProps> = ({ active, name, icon }) => {
  return name.length === 0 ? (
    <Divider />
  ) : (
    <div
      className={`flex px-2 py-4 items-center rounded-md
				${
          active
            ? 'bg-skyblue-50 text-skyblue-500 hover:text-skyblue-600 hover:bg-skyblue-100'
            : 'text-neutral-500 hover:text-neutral-600 hover:bg-gray-50'
        }`}
    >
      <div>{icon}</div>
      <button className='pl-3 group flex items-center text-sm font-medium'>
        <span className='flex-1'>{name}</span>
      </button>
    </div>
  );
};
