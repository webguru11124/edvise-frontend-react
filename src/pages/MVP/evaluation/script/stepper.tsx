import { FC } from 'react';

import { StepperProps } from '../evaluation.interface';
import { getColorCodes } from '../utils';

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

const Stepper: FC<StepperProps> = ({
  videoRef,
  isNote,
  isActive,
  transcript,
  onSelect
}) => {
  const handleSeekChange = (time: string) => {
    videoRef.current.seekTo(time);
  };

  return (
    <div key={transcript.start} className='w-full flex py-2'>
      <div className='flex text-left relative'>
        <div className='pr-5 font-bold text-xs -mt-1'>
          <span
            className='cursor-pointer border-blue-500 text-neutral-500 font-bold text-base mr-3'
            onClick={() => {
              handleSeekChange(Number(transcript.start).toFixed(0));
            }}
            role='presentation'
          >
            <time
              dateTime={`P${Math.round(
                parseInt(transcript.start.toString(), 10)
              )}S`}
            >
              {format(parseInt(transcript.start.toString(), 10))}
            </time>
          </span>
        </div>
        <div className='absolute right-0 w-4 h-6' />
        <div
          style={{
            background: getColorCodes(transcript.speaker.toLowerCase())
          }}
          className='absolute right-[2.8px] rounded-full w-[12px] h-[12px]'
        />
      </div>
      <div className='w-full -ml-2.5 pl-4 py-0 border-l-2 border-gray left-12 mx-2 break-normal text-left'>
        {isNote ? (
          <div
            className='bg-[#ffc] p-4 font-bold text-neutral-600 rounded-lg cursor-pointer shadow-md'
            onClick={() => onSelect(transcript, isNote)}
            role='button'
          >
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: transcript.notes ? transcript.notes : ''
              }}
            />
          </div>
        ) : (
          <div
            onClick={() => onSelect(transcript, isNote)}
            className={`rounded-lg bg-white transition-all px-1 py-3 duration-500 cursor-pointer ${
              isActive
                ? 'border border-skyblue-400 shadow-xl shadow-gray-300'
                : 'border border-neutral-300'
            }`}
            role='button'
          >
            {/* <ScriptCard tab={tab} transcript={transcript} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
