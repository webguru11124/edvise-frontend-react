import { FC } from 'react';
import { Modal, ModalProps } from 'Components/Modal';
import { Button } from 'Components/Button';

import { Search } from '@mui/icons-material';
import InviteItem, { TInviteItem } from './InviteItem';

export interface InviteModalProps extends ModalProps {
  invites: Array<TInviteItem>;
  onSendInvite: (index: number) => void;
  onSearch: (search: string) => void;
}

const InviteModal: FC<InviteModalProps> = ({
  isOpen,
  invites,
  onClose,
  onSendInvite,
  onSearch
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <div className='w-[500px] px-[34px] py-[39px]'>
        <div className='flex pb-4 border-b border-slate-300'>
          <h3 className='text-slate-900'>Send Invite</h3>
        </div>

        <div className='w-full flex items-center border border-gray-300 text-gray-900 rounded-lg mt-5'>
          <div className='px-4 overflow-hidden'>
            <Search />
          </div>
          <input
            className='w-full focus:ring-blue-500 focus:border-blue-500 py-2 outline-none bg-transparent'
            placeholder='Search'
            onChange={(e) => {
              onSearch(e.currentTarget.value);
            }}
          />
        </div>

        <div className='mt-2 bg-slate-50 rounded-lg max-h-[250px] h-[250px] overflow-auto scrollbar-hide'>
          {invites.map((invite, index) => (
            <InviteItem
              id={invite.id}
              key={index}
              avatar={invite.avatar}
              email={invite.email}
              name={invite.name}
              isSent={invite.isSent}
              onSendInvite={() => {
                onSendInvite(invite.id);
              }}
            />
          ))}
        </div>
        <div className='flex justify-center mt-3'>
          <Button text='Done' onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};

export default InviteModal;
