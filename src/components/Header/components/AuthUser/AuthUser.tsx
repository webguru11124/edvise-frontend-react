import { FC } from 'react';

export type AuthUserProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

const AuthUser: FC<AuthUserProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className='flex gap-x-4 items-center'>
      <div className='flex flex-col justify-end'>
        <span className='font-semibold'>{name}</span>
        <span className='text-sm text-gray-400'>{role}</span>
      </div>
      <div className='h-[50px] w-[50px] rounded-full'>
        <img src={avatarUrl} alt={`${name} avatar`} />
      </div>
    </div>
  );
};

export default AuthUser;
