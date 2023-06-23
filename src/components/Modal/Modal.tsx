import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactElement | React.ReactElement[];
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={onClose}>
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
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-fit'>
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

Modal.defaultProps = {
  children: <></>
};

export default Modal;
