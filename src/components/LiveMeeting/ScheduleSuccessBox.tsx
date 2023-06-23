import { RxCalendar } from 'react-icons/rx';
import SuccessImage from 'Assets/svg/success_check.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'Components/Button';
import { appLinks } from 'Utils/constants';
import { FieldValues } from 'react-hook-form';

interface ScheduleSuccessBoxProps {
  values: FieldValues;
  source: string;
}

export default function ScheduleSuccessBox({
  values,
  source
}: ScheduleSuccessBoxProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex items-center flex-col mb-10'>
        <img src={SuccessImage} className='h-50 w-50' alt='success' />
      </div>
      <div className='flex items-center flex-col px-28'>
        <p className='text-slate-900 font-medium text-2xl mb-3'>Confirmed</p>
        <p className='text-slate-500 text-xl text-center mb-7'>
          {values?.title}
        </p>
        {source === 'scheduled' ? (
          <>
            <hr className='w-full mb-4 border-neutral-200' />
            <p className='flex items-center text-slate-600 font-medium'>
              <span className='mr-2 mb-0.5 text-2xl'>
                <RxCalendar />
              </span>
              {`${values?.startTime} - ${values?.endTime}, ${new Date(
                values?.meetingDate
              ).toLocaleDateString('en-US', {
                weekday: 'long',
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}`}
            </p>
            <hr className='w-full mt-5 border-neutral-200' />
          </>
        ) : (
          <></>
        )}
        <div className='mt-9'>
          <Button
            text='Go to Dashboard'
            onClick={() => navigate(appLinks.dashboard)}
          />
        </div>
      </div>
    </div>
  );
}
