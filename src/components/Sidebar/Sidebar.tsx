import { FC } from 'react';
import { SidebarItem } from './SidebarItem';
import { Logo } from './SidebarLogo';
import { Button } from '../Button';

export interface SidebarItemProps {
  name: string;
  active: boolean;
  icon: JSX.Element;
}

export interface SidebarProps {
  items: Array<SidebarItemProps>;
}

const Sidebar: FC<SidebarProps> = ({ items }) => {
  return (
    <div className='flex h-screen flex-1 flex-col bg-white'>
      <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4 px-5'>
        <div className='p-9'>
          <Logo />
        </div>
        <nav className='mt-5 flex-1 space-y-1 bg-white' aria-label='Sidebar'>
          {items.map((item, index) => (
            <SidebarItem
              active={item.active}
              name={item.name}
              icon={item.icon}
              key={index}
            />
          ))}
        </nav>

        <div className='rounded-lg p-8 bg-neutral-50 mt-5'>
          <h4 className='text-neutral-400 mb-4'>
            You can easily manage all your events
          </h4>
          <Button shape='round' text='Upload' width='fit-parent' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
