import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from 'Components/Button';
import { IoMdCloseCircle } from 'react-icons/io';

export interface EditLessonModalProps {
  onClose: () => void;
  onApprove: () => void;
}

const EditLessonModal: FC<EditLessonModalProps> = ({ onClose, onApprove }) => {
  return (
    <div className='xl:w-[40rem] 2xl:[w-30rem] p-5'>
      <div className='flex justify-between'>
        <div className='flex'>
          <p className='text-xl ml-3'>Edit Lesson</p>
        </div>
        <div role='button' onClick={onClose}>
          <ClearIcon />
        </div>
      </div>
      <hr className='my-5' />
      <div>
        <input
          placeholder='Lesson Title'
          className='rounded-md border border-gray-300 p-3 w-full bg-neutral-50'
        />
      </div>
      <div className='mt-4'>
        <textarea
          placeholder='Description (optional)'
          className='w-full bg-neutral-50 rounded-md border border-gray-300'
        />
      </div>
      <div className='mt-3'>
        <select
          placeholder='Select Rubric'
          className='w-full rounded-md border border-gray-300'
        >
          <option>Select Rubric</option>
          <option value='rubric one'>Rubric One</option>
          <option value='rubric two'>Rubric Two</option>
        </select>
      </div>
      <div className='border border-gray-300 mt-4 rounded-md flex items-center p-3'>
        <input
          type='checkbox'
          id='edit-modal-include-feedback'
          className='rounded-md mr-2'
        />
        <label htmlFor='edit-modal-include-feedback' className='text-sm'>
          include coaching feedback
        </label>
      </div>
      <div className='flex justify-between mt-3 items-center rounded-md p-4 bg-[#EFF6FF]'>
        <div>
          <p className='font-bold'>File name.pdf</p>
          <p className='text-sm text-neutral-500'>2.1mb</p>
        </div>
        <div className='text-critical-500'>
          <IoMdCloseCircle className='text-3xl' />
        </div>
      </div>
      <div className='flex justify-end mt-6'>
        <Button
          text='Cancel'
          color='secondary'
          className='mr-3'
          onClick={onClose}
        />
        <Button text='Save' onClick={onApprove} />
      </div>
    </div>
  );
};

export default EditLessonModal;
