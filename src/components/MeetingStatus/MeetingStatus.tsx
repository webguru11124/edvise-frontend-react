import { FC } from 'react';

export enum MeetingStatusEnum {
  DISCUSSION = 0,
  POST_OBSERVATION = 1,
  SELF_REFLECTION = 2
}

export interface MeetingStatusProps {
  status: MeetingStatusEnum;
}

const MEETING_STATUS_MAP = {
  [MeetingStatusEnum.DISCUSSION]: {
    text: 'Discussion',
    colorClass: 'skyblue-400'
  },
  [MeetingStatusEnum.POST_OBSERVATION]: {
    text: 'Post Observation',
    colorClass: 'secondary-400'
  },
  [MeetingStatusEnum.SELF_REFLECTION]: {
    text: 'Self Reflection',
    colorClass: 'warning-500'
  }
};

const MeetingStatus: FC<MeetingStatusProps> = ({ status }) => {
  const { text, colorClass } = MEETING_STATUS_MAP[status] || {
    text: '-',
    colorClass: 'black'
  };

  return (
    <div className='flex items-center'>
      <span className={`block w-2 h-2 bg-${colorClass} rounded-full`} />
      <p className={`ml-2 text-${colorClass} text-base font-bold`}>{text}</p>
    </div>
  );
};

export default MeetingStatus;
