import { FC } from 'react';
import { TiptapEditor } from '../../../../components/TiptapEditor';

export interface AddNotePopupProps {
  isOpen: boolean;
  isLoading: boolean;
  onReturn: () => void;
  onChange: (value: string) => void;
}

const AddNotePopup: FC<AddNotePopupProps> = ({
  isOpen,
  isLoading,
  onReturn,
  onChange
}) => {
  return isOpen ? (
    <div className='relative'>
      <TiptapEditor onReturn={onReturn} onChange={onChange} />
      {isLoading && (
        <>
          <div className='bg-neutral-300 opacity-50 top-0 right-0 bottom-0 left-0 text-red-200 absolute rounded-lg' />
          <div className='flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 font-bold'>
            Saving...
          </div>
        </>
      )}
    </div>
  ) : (
    <></>
  );
};

export default AddNotePopup;
