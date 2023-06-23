import { FC } from 'react';
import { TeacherProps } from '../navbar.interface';

export const NavbarUser: FC<TeacherProps> = ({ avatar, name, code }) => {
  return (
    <div className='flex'>
      <img
        src={avatar}
        className='w-[80px] h-[80px] rounded-3xl'
        alt='Navbar User'
      />
      <div className='ml-6 flex flex-col justify-center'>
        <h3 className='font-bold text-2xl'>{name}</h3>
        <h4 className='text-neutral-500 mt-1'>{code}</h4>
      </div>
    </div>
  );
};
