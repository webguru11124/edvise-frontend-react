import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  EvaluationRow,
  EvaluationRowProps
} from '../../components/EvaluationRow';
import { MeetingStatusEnum } from '../../components/MeetingStatus';
import { StatusEnum } from '../../components/StatusDropdown';

import AvatarOne from '../assets/avatar.png';
import AvatarTwo from '../assets/avatar2.png';
import AvatarThree from '../assets/avatar3.png';

const meta: Meta = {
  title: 'Atoms/EvaluationRow',
  component: EvaluationRow
};

export default meta;

const EvaluationTableData = [
  {
    teacher: {
      avatar: 'https://avatars.githubusercontent.com/u/9591024',
      name: 'William',
      code: 'SK4987'
    },
    evaluationProcess: {
      name: 'Probationary/Non-Tenure',
      type: 'Teacher'
    },
    meetingStatus: MeetingStatusEnum.DISCUSSION,
    status: StatusEnum.DISCUSSION,
    progress: 60
  },
  {
    teacher: {
      avatar: AvatarOne,
      name: 'Teacher One',
      code: 'SK4987'
    },
    evaluationProcess: {
      name: 'Probationary/Non-Tenure',
      type: 'Teacher'
    },
    meetingStatus: MeetingStatusEnum.POST_OBSERVATION,
    status: StatusEnum.IN_PROGRESS,
    progress: 71
  },
  {
    teacher: {
      avatar: AvatarTwo,
      name: 'Teacher Two',
      code: 'SK4987'
    },
    evaluationProcess: {
      name: 'Probationary/Non-Tenure',
      type: 'Teacher'
    },
    meetingStatus: MeetingStatusEnum.SELF_REFLECTION,
    status: StatusEnum.NOT_STARTED,
    progress: 30
  },
  {
    teacher: {
      avatar: AvatarThree,
      name: 'Teacher Three',
      code: 'SK4987'
    },
    evaluationProcess: {
      name: 'Probationary/Non-Tenure',
      type: 'Teacher'
    },
    meetingStatus: MeetingStatusEnum.DISCUSSION,
    status: StatusEnum.DISCUSSION,
    progress: 15
  }
];

const Template: StoryFn<EvaluationRowProps> = () => {
  return (
    <div style={{ maxWidth: 1088 }}>
      <table className='min-w-full divide-y divide-gray-300'>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {EvaluationTableData.map((data, index) => (
            <EvaluationRow key={index} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
