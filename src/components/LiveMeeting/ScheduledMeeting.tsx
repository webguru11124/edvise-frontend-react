import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'Components/Button';
import RobotImage from 'Assets/svg/robot_avatar.svg';
import { appLinks } from 'Utils/constants';
import DashboardNoSidebar from 'Components/layouts/DashboardNoSidebar';
import { Modal } from 'Components/Modal';
import { useDisclosure } from 'Hooks/useDisclosure';
import Loader from 'Components/Loader';
import LinkInput from 'Components/LinkInput';
import ScheduleSuccessBox from './ScheduleSuccessBox';

const colors = [
  'bg-critical-500',
  'bg-warning-500',
  'bg-info-500',
  'bg-blue-500',
  'bg-secondary-500'
];

export default function ScheduledMeeting() {
  const [selectedColor, setSelectedColor] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [processing, setProcessing] = useState(false);
  const [linkText, setLinkText] = useState('');

  const { register, handleSubmit, getValues } = useForm();

  const makeRequest: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onOpen();
    setTimeout(() => {
      setProcessing(false);
    }, 2000);
    setProcessing(true);
  };

  return (
    <DashboardNoSidebar backLink={appLinks.lessonUploads} backText='Back'>
      <div className='flex justify-center items-center h-full w-full'>
        <div>
          <div className='border border-slate-300 min-w-[500px] max-w-[600px] p-10 rounded-2xl'>
            <div>
              <p className='text-neutral-800 font-semibold text-2xl mb-4'>
                Analyze a Scheduled Meeting
              </p>
            </div>
            <div>
              <input
                type='text'
                id='title'
                {...register('title', { required: true })}
                className='block py-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-[#D1D5DB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#F9FAFB]'
                placeholder='Title'
              />
            </div>
            <div className='flex items-center mt-5'>
              <p className='text-neutral-500 mr-3'>Color</p>
              <div className='flex'>
                {colors.map((color) => (
                  <div
                    role='button'
                    aria-label='color select'
                    className={`${color} h-5 w-5 mx-2 rounded-full ${
                      selectedColor === color
                        ? 'outline outline-slate-400 outline-offset-2'
                        : ''
                    }`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor='meeting-date'
                className='block text-sm font-medium leading-6 text-neutral-500 mt-4'
              >
                Date
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='date'
                  {...register('meetingDate', { required: true })}
                  id='meeting-date'
                  className='block py-3 w-full rounded-md border-0 text-blue-900 underline shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#F9FAFB]'
                />
              </div>
            </div>
            <div className='grid gap-4 grid-cols-2'>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='time'
                  {...register('startTime')}
                  id='startTime'
                  className='block py-3 w-full rounded-md border-0 underline shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#F9FAFB]'
                />
              </div>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='time'
                  {...register('endTime', { required: true })}
                  id='endTime'
                  className='block py-3 w-full rounded-md border-0 underline shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#F9FAFB]'
                />
              </div>
            </div>
            <hr className='mt-5 mb-3' />
            <div>
              <p>Security</p>
              <div className='mt-4'>
                <div className='relative flex items-center'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='passcode'
                      aria-describedby='comments-description'
                      name='check'
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
                      {...register('passcode')}
                      id='passcode'
                      className='block py-1.5 w-28 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      placeholder='Code'
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className='mt-5 mb-3' />
            <LinkInput
              label='Meeting Link'
              linkText={linkText}
              setLinkText={setLinkText}
            />
            <fieldset className='border-t border-slate-300 mt-5 mb-3'>
              <legend className='mx-auto px-4 text-black'>or invite</legend>
            </fieldset>
            <div className='flex justify-between'>
              <div className='flex gap-x-2 items-center'>
                <div className='h-[40px] w-[40px] rounded-full'>
                  <img src={RobotImage} alt='avatar' />
                </div>
                <div className='flex flex-col items-start'>
                  <span
                    className='text-ellipsis whitespace-nowrap overflow-hidden w-36 font-medium text-xl'
                    title='Teddy'
                  >
                    Teddy
                  </span>
                  <span className='text-neutral-500 text-sm'>
                    Teddy@edvise.ai
                  </span>
                </div>
              </div>
              <Button text='Invite' color='secondary' />
            </div>
          </div>
          <div className='flex justify-end my-8'>
            <Button text='Save' onClick={handleSubmit(makeRequest)} />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='bg-white h-[600px] w-[500px] rounded-3xl'>
          {processing && <Loader />}
          {isOpen && !processing && (
            <div className='flex justify-center items-center h-full'>
              <ScheduleSuccessBox values={getValues()} source='scheduled' />
            </div>
          )}
        </div>
      </Modal>
    </DashboardNoSidebar>
  );
}
