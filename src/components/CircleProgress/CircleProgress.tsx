import React, { FC } from 'react';
import {
  CircularProgressbarWithChildren as CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface CircleProgressProps {
  percentage: number;
  size?: number;
  className?: string;
}

const CircleProgress: FC<CircleProgressProps> = ({
  percentage = 0,
  size = 50,
  className = ''
}) => {
  const percent = Math.max(0, Math.min(100, percentage));

  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbar
        value={percent}
        className='font-semibold'
        styles={buildStyles({
          strokeLinecap: 'butt',
          textColor: 'var(--color-white)',
          trailColor: 'var(--color-neutral-100)',
          backgroundColor: 'var(--color-neutral-100)'
        })}
      >
        <span className={`text-xs font-semibold ${className}`}>{percent}%</span>
      </CircularProgressbar>
    </div>
  );
};

CircleProgress.defaultProps = {
  size: 50,
  className: ''
};

export default CircleProgress;
