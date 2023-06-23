import { FC } from 'react';

export interface LinearProgressProps {
  color:
    | 'secondary'
    | 'skyblue'
    | 'neutral'
    | 'blue'
    | 'critical'
    | 'warning'
    | 'success'
    | 'info'
    | 'sky';
  value: number;
}

const LinearProgress: FC<LinearProgressProps> = ({ color, value }) => {
  return (
    <div className='relative bg-white w-full h-[2px]'>
      <div
        className={`absolute border-t-2 border-${color}-500 w-full`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default LinearProgress;
