import { Close } from '@mui/icons-material';
import { FC, useEffect, useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { TextField } from '../../../../components/TextField';
import { Button } from '../../../../components/Button';
import { Toggle } from '../../../../components/Toggle';

interface AddFocusAreaModal {
  isOpen: boolean;
  isAdding: boolean;
  onClose: () => void;
  onSave: (name: string, description: string) => void;
}

const AddFocusAreaModal: FC<AddFocusAreaModal> = ({
  isOpen,
  isAdding,
  onClose,
  onSave
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isAI, setAI] = useState(false);

  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  useEffect(() => {
    if (isOpen === true) {
      setName('');
      setDescription('');
    }
  }, [isOpen]);

  const onClickSave = () => {
    onSave(name, description);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='px-10 min-w-[600px] pb-8'>
        <div className='py-5 flex pb-3 border-b border-neutral-200 items-center'>
          <h3 className='font-bold text-xl text-neutral-600'>
            Add New Focus Area
          </h3>
          <button className='text-neutral-600 ml-auto' onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className='mt-8'>
          <TextField
            placeholder='Name'
            type='text'
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className='mt-3'>
          <textarea
            placeholder='Description'
            className='border-neutral-300 bg-neutral-50 w-full px-5 py-4 rounded-lg outline-none placeholder-neutral-400 focus:border-neutral-600 focus:ring-0 focus:ring-sky-500 disabled:text-neutral-400 min-h-[200px]'
            onChange={onChangeDescription}
            value={description}
          />
        </div>
        <div className='py-4 flex border-b border-neutral-200'>
          <h4>Generate AI Suggestions</h4>
          <div className='ml-auto'>
            <Toggle
              color='skyblue'
              checked={isAI}
              onChange={(checked) => {
                setAI(checked);
              }}
            />
          </div>
        </div>
        <div className='flex mt-5'>
          <div className='ml-auto flex gap-2'>
            <Button
              text='Cancel'
              color='secondary'
              width='fit-content'
              onClick={onClose}
            />
            <Button
              text='Save'
              width='fit-content'
              onClick={onClickSave}
              isLoading={isAdding}
              disabled={isAdding}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddFocusAreaModal;
