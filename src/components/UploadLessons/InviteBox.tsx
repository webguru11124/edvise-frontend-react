import { FC } from 'react';
import { Avatar } from 'Components/Avatar';
import { Close } from '@mui/icons-material';
import { TInviteItem } from './InviteItem';

export interface InviteBoxProps {
  invites: Array<Omit<TInviteItem, 'isSent'>>;
  onRemove: (id: number) => void;
}

const InviteBox: FC<InviteBoxProps> = ({ invites, onRemove }) => {
  return (
    <div className='flex px-2 py-2 border border-neutral-300 rounded-lg max-h-[200px] overflow-auto scrollbar-hide flex-wrap'>
      {invites.map((invite, index) => (
        <div className='w-full p-2 flex items-center' key={index}>
          <div className='w-[50px] h-[50px] mr-3'>
            <Avatar url={invite.avatar} className='w-full' />
          </div>
          <div className='text-neutral-900 mr-2'>{invite.name}</div>
          <div className='text-xs text-slate-500 mr-2'>{invite.email}</div>
          <button
            className='ml-auto text-slate-500 hover:text-slate-700 active:text-slate-500 cursor-pointer'
            onClick={() => {
              onRemove(invite.id);
            }}
          >
            <Close />
          </button>
        </div>
      ))}
    </div>
  );
};

export default InviteBox;
