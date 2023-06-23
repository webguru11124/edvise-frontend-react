import { FC } from 'react';
import { classNames } from 'Utils/index';
import Skeleton from 'Elements/Skeleton';

import { TimeLineItem } from '../evaluation.interface';
import ScriptCard from './script-card-flat';

function format(seconds: number) {
  function pad(str: number) {
    return `0${str}`.slice(-2);
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

const getColorCodes = (key: string | boolean) => {
  switch (key) {
    case 'question':
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case 'evaluating':
      return '#ff9800';
    case 'analyzing':
      return '#fff176';
    case 'applying':
      return '#43a047';
    case 'understanding':
      return '#1e88e5';
    case 'remembering':
      return '#8E24AA';
    case 'none':
      return '#e0e0e0';
    case true:
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case false:
      return 'rgb(209 213 219 / var(--tw-bg-opacity))';
    case 'knowledge':
      return '#F4C550';
    case 'creating':
      return '#e53935';
    case 'both':
      return '#14B8A6';
    case 'teacher':
      return '#F43F5E';
    case 'student':
      return '#1E429F';
    default:
      return '#8EE16A';
  }
};

const getBorderCodes = (key: string | boolean) => {
  switch (key) {
    case 'question':
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case 'evaluating':
      return '#ff980055';
    case 'analyzing':
      return '#fff17655';
    case 'applying':
      return '#43a04755';
    case 'understanding':
      return '#1e88e555';
    case 'remembering':
      return '#8E24AA55';
    case 'none':
      return '#e0e0e055';
    case true:
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case false:
      return 'rgb(209 213 219 / var(--tw-bg-opacity))';
    case 'knowledge':
      return '#F4C55055';
    case 'creating':
      return '#e5393555';
    case 'both':
      return '#CCFBF1';
    case 'teacher':
      return '#FFE4E6';
    case 'student':
      return '#E1EFFE';
    default:
      return '#8EE16A55';
  }
};

interface StepperProps {
  videoRef: any;
  isActive: boolean;
  tab: string;
  timelineItem: TimeLineItem;
  onSelect: (timelineItem: TimeLineItem) => void;
}

export const StepperSkeleton: FC = () => (
  <>
    <div className='flex items-center relative'>
      <div
        style={{
          border: `5px solid #eff1f4`
        }}
        className='rounded-full w-[20px] h-[20px] absolute left-[-10px] transition-all duration-200 bg-[#a5a5a5]'
      />
      <div className='ml-7 flex justify-center'>
        <Skeleton variant='text' />
      </div>
    </div>
    <div className='w-full py-0 border-l border-dashed border-slate-400 break-normal text-left mt-5 px-3 mb-5'>
      <Skeleton variant='text' lines={5} />
    </div>
  </>
);

const Stepper: FC<StepperProps> = ({
  videoRef,
  isActive,
  tab,
  timelineItem,
  onSelect
}) => {
  const handleSeekChange = (time: string) => {
    videoRef.current.seekTo(time);
  };
  let start = 0;

  switch (timelineItem.type) {
    case 'moment':
      start = timelineItem.item.startTime;
      break;
    case 'videonote':
      start = timelineItem.item.timestamp;
      break;
    default:
      break;
  }

  return (
    <div className='px-4'>
      <div className='w-full flex py-2 flex-col'>
        <>
          <div className='flex items-center relative'>
            <div
              style={{
                background: getColorCodes('teacher'),
                border: `5px solid ${getBorderCodes('teacher')}`
              }}
              className={classNames(
                'rounded-full w-[20px] h-[20px] absolute left-[-10px] transition-all duration-200',
                isActive ? 'w-[28px] h-[28px] left-[-14px]' : ''
              )}
            />
            <div
              className='ml-7'
              onClick={() => {
                handleSeekChange(Number(start).toFixed(0));
              }}
              role='button'
            >
              <time
                className={classNames(
                  'font-semibold text-xl text-slate-500',
                  isActive ? 'text-slate-900' : ''
                )}
                dateTime={`P${Math.round(parseInt(start.toString(), 10))}S`}
              >
                {format(parseInt(start.toString(), 10))}
              </time>
            </div>
          </div>
          <div className='w-full py-0 border-l border-dashed border-slate-400 break-normal text-left mt-[10px]'>
            {timelineItem.type === 'videonote' && (
              <div
                className='bg-[#ffc] font-bold text-neutral-600 rounded-lg cursor-pointer shadow-md p-4 ml-6'
                onClick={() => onSelect(timelineItem)}
                role='button'
              >
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: timelineItem.item.content
                      ? timelineItem.item.content
                      : ''
                  }}
                />
              </div>
            )}
            {timelineItem.type === 'moment' && (
              <div
                onClick={() => onSelect(timelineItem)}
                className='rounded-lg transition-all duration-500 cursor-pointer'
                role='button'
              >
                <div className='pl-2'>
                  <ScriptCard tab={tab} timelineItem={timelineItem} />
                </div>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default Stepper;
