import { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useGlobalStore from 'State/store';

import ReactQuill from 'react-quill';
import { useVideoNotes } from 'Hooks/useVideoNotes';
import 'react-quill/dist/quill.snow.css';
import { Close } from '@mui/icons-material';

import { Button } from '../../../../components/Button';
import { ConfirmModal } from '../../../../components/Modal';

interface NoteModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const NoteModal: FC<NoteModalProps> = ({ isOpen, handleClose }) => {
  const { updateVideoNote, deleteVideoNote } = useVideoNotes();
  const [currentTranscriptNote] = useGlobalStore((state) => [
    state.currentTranscriptNote
  ]);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [note, setNote] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onChangeNote = (value: string) => {
    setNote(value);
  };

  const onSaveNote = () => {
    setIsUpdating(true);
    if (currentTranscriptNote)
      updateVideoNote({ id: currentTranscriptNote.id, content: note }).then(
        () => {
          setIsUpdating(false);
          handleClose();
        }
      );
  };

  const removeNote = () => {
    setIsDeleting(true);
    setConfirmOpen(false);
    if (currentTranscriptNote)
      deleteVideoNote({ id: currentTranscriptNote.id }).then(() => {
        setIsDeleting(false);
        handleClose();
      });
  };

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleClose}>
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
                <Dialog.Panel
                  className='relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full'
                  style={{ width: 500 }}
                >
                  <div className='flex w-full py-5 px-4 flex-col'>
                    <div className='flex'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-bold leading-6 text-neutral-600'
                      >
                        Edit Note
                      </Dialog.Title>
                      <div className='ml-auto'>
                        <Close
                          className='text-neutral-600 w-3 h-3'
                          onClick={handleClose}
                        />
                      </div>
                    </div>
                    <div className='border-t border-neutral-30 mt-3' />

                    <div className='mt-4'>
                      <ReactQuill
                        className='w-full flex-1 flex flex-col'
                        onChange={onChangeNote}
                        defaultValue={currentTranscriptNote?.content}
                      />
                    </div>
                    <div className='ml-auto flex gap-2 mt-4'>
                      <Button
                        text='Delete'
                        shape='round'
                        width='fit-content'
                        size='sm'
                        onClick={() => {
                          setConfirmOpen(true);
                        }}
                        isLoading={isDeleting}
                        disabled={isDeleting}
                      />
                      <Button
                        text='Save'
                        shape='round'
                        width='fit-content'
                        size='sm'
                        onClick={onSaveNote}
                        isLoading={isUpdating}
                        disabled={isUpdating}
                      />
                    </div>

                    <ConfirmModal
                      isOpen={isConfirmOpen}
                      title='Confirm'
                      message='Are you sure want to delete this note?'
                      onConfirm={removeNote}
                      onCancel={() => {
                        setConfirmOpen(false);
                      }}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NoteModal;
