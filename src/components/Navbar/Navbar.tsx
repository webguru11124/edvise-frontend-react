import { FC } from 'react';
import { NavItem, NavbarItemProps } from './components/NavItem';
import { NavUser, TeacherProps } from './components/User';

export interface NavbarProps {
  teacher: TeacherProps;
  navs: Array<NavbarItemProps>;
}

const Navbar: FC<NavbarProps> = ({ teacher, navs }) => {
  const { avatar, name, code } = teacher;

  return (
    <div className='w-full flex py-6'>
      <NavUser avatar={avatar} name={name} code={code} />

      <div className='ml-auto flex items-center'>
        {navs.map((nav, index) => (
          <NavItem name={nav.name} active={nav.active} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
