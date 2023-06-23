import { FC } from 'react';
import { Avatar } from '../../../Avatar';

export interface UserProps {
  avatar: string;
  name: string;
  role: string;
}

const User: FC<UserProps> = ({ avatar, name, role }) => (
  <div className='flex items-center'>
    <Avatar size='medium' shape='round' url={avatar} />
    <div className='ml-3 flex flex-col justify-center'>
      <h3 className='font-bold text-base'>{name}</h3>
      <h4 className='text-neutral-500 text-xs'>{role}</h4>
    </div>
  </div>
);

export default User;
