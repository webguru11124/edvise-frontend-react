import { FC, useState } from 'react';
import AddTeamMembersModal from '../Modal/components/AddTeamMembersModal';
import { Modal } from '../Modal';

export interface PageTitleHeaderProps {
  title: string;
  description: string;
  button: JSX.Element;
  icon: string;
}

const PageTitleHeader: FC<PageTitleHeaderProps> = ({
  title,
  description,
  button,
  icon
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <div className='mr-3 mt-2'>
            <img src={icon} alt='team management icon' />
          </div>
          <div className='flex flex-col'>
            <div className='flex'>
              <p className='text-4xl font-normal'>{title}</p>
            </div>
            <p className='text-lg text-neutral-600'>{description}</p>
          </div>
        </div>
        <div role='button' onClick={() => setShowModal(!showModal)}>
          {button}
        </div>
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          // eslint-disable-next-line react/no-children-prop
          children={
            <AddTeamMembersModal handleCloseClick={() => setShowModal(false)} />
          }
        />
      )}
    </>
  );
};

export default PageTitleHeader;
