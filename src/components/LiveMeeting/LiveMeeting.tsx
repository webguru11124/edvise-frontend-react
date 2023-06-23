import { Button } from 'Components/Button';
import Loader from 'Components/Loader';
import { Modal } from 'Components/Modal';
import DashboardNoSidebar from 'Components/layouts/DashboardNoSidebar';
import { useDisclosure } from 'Hooks/useDisclosure';
import { appLinks } from 'Utils/constants';
import { useState } from 'react';
import LinkInput from 'Components/LinkInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ScheduleSuccessBox from './ScheduleSuccessBox';

export default function LiveMeeting() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  const [linkText, setLinkText] = useState('');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onOpen();
    setTimeout(() => {
      setProcessing(false);
    }, 2000);
    setProcessing(true);
  };

  return (
    <DashboardNoSidebar backLink={appLinks.lessonUploads} backText='Back'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='-mt-60'>
          <div className='border border-slate-300 min-w-[600px] max-w-[600px] p-10 rounded-2xl'>
            <div>
              <p className='text-neutral-800 font-semibold text-2xl mb-4'>
                Analyze a Live Meeting
              </p>
            </div>
            <div>
              <input
                type='text'
                {...register('title', { required: true })}
                id='title'
                className='block py-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100'
                placeholder='Title'
              />
            </div>
            <LinkInput
              label='Meeting Link'
              linkText={linkText}
              setLinkText={setLinkText}
            />
            <div className='mt-4'>
              <div className='relative flex items-center'>
                <div className='flex h-6 items-center'>
                  <input
                    id='passcode'
                    aria-describedby='comments-description'
                    name='passcode'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                </div>
                <div className='ml-3'>
                  <label
                    htmlFor='passcode'
                    className='text-sm font-medium leading-6 text-gray-900'
                  >
                    Passcode
                  </label>
                </div>
                <div className='ml-4'>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    className='block py-1.5 w-28 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Code'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-8'>
            <Button text='Save' onClick={handleSubmit(onSubmit)} />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='bg-white h-[600px] w-[500px] rounded-3xl'>
          {processing && <Loader />}
          {isOpen && !processing && (
            <div className='flex justify-center items-center h-full'>
              <ScheduleSuccessBox values={getValues()} source='live' />
            </div>
          )}
        </div>
      </Modal>
    </DashboardNoSidebar>
  );
}
