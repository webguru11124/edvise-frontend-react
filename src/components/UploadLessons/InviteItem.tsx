import { Avatar } from 'Components/Avatar';
import { FC } from 'react';
import { Check } from '@mui/icons-material';

export interface InviteItemProps {
  id: number;
  avatar: string;
  name: string;
  email: string;
  isSent: boolean;
  onSendInvite: () => void;
}

export type TInviteItem = Omit<InviteItemProps, 'onSendInvite'>;

const InviteItem: FC<InviteItemProps> = ({
  avatar,
  name,
  email,
  isSent,
  onSendInvite
}) => {
  return (
    <div className='flex justify-center px-4 pt-4'>
      <div className='w-[50px] h-[50px] mr-3'>
        <Avatar url={avatar} className='w-full' />
      </div>
      <div className='flex-1 flex justify-center flex-col'>
        <div className='text-neutral-900'>{name}</div>
        <div className='text-xs text-slate-500'>{email}</div>
      </div>
      {isSent ? (
        <div className='flex items-center justify-center text-blue-600'>
          <Check />
        </div>
      ) : (
        <button
          className='text-blue-600 hover:text-blue-400 active:text-blue-600'
          onClick={onSendInvite}
        >
          Send Invite
        </button>
      )}
    </div>
  );
};

export default InviteItem;
