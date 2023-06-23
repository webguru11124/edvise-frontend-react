import { FC } from 'react';
import { Calendar, Ring } from '../Icons';
import { NotifyBadge } from './components/NotifyBadge';
import { User, UserProps } from './components/User';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export interface PageHeaderProps {
  user: UserProps;
  unread: boolean;
}

const PageHeader: FC<PageHeaderProps> = ({ user, unread }) => {
  const { avatar, name, role } = user;
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return (
    <div className='flex w-full py-6 border-neutral-200'>
      <User avatar={avatar} name={name} role={role} />

      <div className='ml-auto flex'>
        <div className='flex items-center'>
          <div className='mr-3'>
            <Calendar />
          </div>
          <div>{`${day} ${month}`}</div>
        </div>
        <div className='mx-5 my-4 border border-r border-neutral-300' />
        <div className='p-4 relative bg-white rounded-full'>
          <Ring />
          {unread && <NotifyBadge />}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
