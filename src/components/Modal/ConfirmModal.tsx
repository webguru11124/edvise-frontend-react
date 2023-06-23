import { Fragment, FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ReportProblem } from '@mui/icons-material';
import { Spinner } from 'Components/Icons';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  isConfirming?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  isConfirming,
  title,
  message,
  onConfirm,
  onCancel
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          return false;
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <ReportProblem className='h-6 w-6 text-red-600' />
                  </div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      {title}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{message}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-red-300'
                    onClick={onConfirm}
                    disabled={isConfirming}
                  >
                    {isConfirming && (
                      <div className='mr-2'>
                        <Spinner />
                      </div>
                    )}
                    Ok
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xl font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

ConfirmModal.defaultProps = {
  isConfirming: false
};

export default ConfirmModal;
