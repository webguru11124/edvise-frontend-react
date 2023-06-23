import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactElement | React.ReactElement[];
}

const SideModal: FC<SideModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-40'
            leave='ease-in duration-200'
            leaveFrom='opacity-40'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-neutral-700 opacity-40 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 w-0'
                enterTo='opacity-100 w-fit'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 w-fit'
                leaveTo='opacity-0 w-0'
              >
                <Dialog.Panel className='fixed right-0 top-0 bottom-0 bg-white'>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

SideModal.defaultProps = {
  children: <></>
};

export default SideModal;
