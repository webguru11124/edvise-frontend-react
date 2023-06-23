import { Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import { CircularProgressbarWithChildren as CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface ProgressCardProps {
  variant: 'success' | 'warning' | 'critical' | 'info';
  progress: number;
  text: string;
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  icon: JSX.Element;
}

const ProgressCard: FC<ProgressCardProps> = ({
  variant,
  progress,
  text,
  position,
  icon
}) => {
  const [isOpen, setOpen] = useState(true);

  let positionCSS;
  if (position === 'right-bottom') positionCSS = 'right-[45px] bottom-[55px]';
  else if (position === 'right-top') positionCSS = 'right-[45px] top-[55px]';
  else if (position === 'left-bottom')
    positionCSS = 'left-[45px] bottom-[55px]';
  else positionCSS = 'left-[45px] top-[55px]';

  return (
    <div
      className={`bg-white rounded-md shadow-xl ${
        isOpen ? 'flex' : 'hidden'
      } p-6 fixed items-center min-w-[600px] ${positionCSS}`}
    >
      <div className='w-[70px] h-[70px]'>
        <CircularProgressbar
          value={progress}
          className='font-semibold'
          background
          styles={{
            path: {
              stroke: `var(--color-${variant}-500)`,
              strokeWidth: 4
            },
            background: {
              fill: `var(--color-${variant}-100)`
            },
            trail: {
              stroke: 'transparent'
            }
          }}
        >
          <div className={`text-${variant}`}>{icon}</div>
        </CircularProgressbar>
      </div>
      <div className='flex flex-col flex-1 ml-7'>
        <h3 className='text-2xl text-neutral-800 mb-6'>{text}</h3>
        <div className='rounded-full bg-neutral-100 relative h-[4px]'>
          <div
            className={`absolute left-0 top-0 bottom-0 bg-${variant}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <h3 className='text-neutral-500 text-2xl ml-6'>{progress}%</h3>
      <div className='ml-6'>
        <button
          className='text-neutral-500 hover:text-neutral-600 active:text-neutral-500'
          onClick={() => {
            setOpen(false);
          }}
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

export default ProgressCard;
