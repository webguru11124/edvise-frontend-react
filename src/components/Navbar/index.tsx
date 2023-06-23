import React, { FC } from 'react';
import { NavUser } from './components/User';
import { NavbarProps } from './navbar.interface';
import { NavItem } from './components/NavItem';

const Navbar: FC<NavbarProps> = ({ teacher, navs }) => {
  const { avatar, name: teachersName, code } = teacher;

  return (
    <div className='w-full flex py-6'>
      <NavUser avatar={avatar} name={teachersName} code={code} />

      <div className='ml-auto flex items-center'>
        {navs.map((nav, index) => (
          <NavItem name={nav.name} active={nav.active} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
