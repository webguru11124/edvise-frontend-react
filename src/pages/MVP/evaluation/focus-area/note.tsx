import { Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import { useFocusAreaNote } from 'Hooks/useFocusAreaNote';

import { ConfirmModal } from '../../../../components/Modal';
import { TiptapEditor } from '../../../../components/TiptapEditor';
import BotPanel from './bot-panel';

import { FocusAreaNoteType } from '../../../../__generated/graphql';

export interface NoteProp {
  id: number;
  type: FocusAreaNoteType;
  content: string;
  onChangeContent: (value: string) => void;
}

const Note: FC<NoteProp> = ({ id, type, content, onChangeContent }) => {
  const [mode, setMode] = useState('view');
  const [contentValue, setContentValue] = useState(content);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isNoteDeleting, setNoteDeleting] = useState(false);

  const { deleteNote } = useFocusAreaNote();

  const onReturn = () => {
    setMode('view');
    onChangeContent(contentValue);
  };

  const onChange = (value: string) => {
    setContentValue(value);
  };

  const onRemove = () => {
    setNoteDeleting(true);
    deleteNote({
      id
    }).then(() => {
      setNoteDeleting(false);
      setConfirmOpen(false);
    });
  };

  return (
    <>
      <ConfirmModal
        isOpen={isConfirmOpen}
        isConfirming={isNoteDeleting}
        title='Confirm'
        message='Are you sure want to delete this note?'
        onConfirm={onRemove}
        onCancel={() => {
          setConfirmOpen(false);
        }}
      />
      {type === FocusAreaNoteType.User && (
        <div
          onClick={() => {
            setMode('edit');
          }}
          role='button'
        >
          {mode === 'view' && (
            <div
              className='bg-white p-4 font-bold text-neutral-600 rounded-lg cursor-pointer shadow-sm break-normal flex gap-2'
              role='presentation'
            >
              <>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                  className='flex-1'
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setConfirmOpen(true);
                  }}
                >
                  <Close />
                </button>
              </>
            </div>
          )}
          {mode === 'edit' && (
            <div className='flex flex-col w-full'>
              <div className='w-full'>
                <TiptapEditor
                  value={content}
                  onReturn={onReturn}
                  onChange={onChange}
                />
              </div>
            </div>
          )}
        </div>
      )}
      {type === FocusAreaNoteType.Generated && (
        <BotPanel
          text={content}
          variant='info'
          onRemove={() => {
            setConfirmOpen(true);
          }}
          onChange={onChangeContent}
        />
      )}
    </>
  );
};

export default Note;
