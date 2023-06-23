import { FC } from 'react';

export interface NavbarItemProps {
  name: string;
  active: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({ name, active }) => {
  return (
    <div
      className={`text-xl font-bold mr-[54px] border-skyblue-500 pb-3 hover:text-neutral-600
        ${active ? 'border-b-[3px] text-black' : 'text-neutral-500'}`}
    >
      <button>{name}</button>
    </div>
  );
};

export default NavbarItem;
