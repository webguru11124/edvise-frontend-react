import React, { FC, Fragment } from 'react';
import { MoreHorizontal, PlayCircle } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';

import { Avatar } from '../Avatar';
import { TextDetailed } from '../TextDetailed';
import { MeetingStatus, MeetingStatusEnum } from '../MeetingStatus';
import { CircleProgress } from '../CircleProgress';
import { StatusDropDown, StatusEnum } from '../StatusDropdown';
import { PlusCircle } from '../Icons';

export interface EvaluationRowProps {
  teacher: {
    avatar: string;
    name: string;
    code: string;
  };
  evaluationProcess: {
    name: string;
    type: string;
  };
  meetingStatus: MeetingStatusEnum;
  progress: number;
  status: StatusEnum;
}

const EvaluationRow: FC<EvaluationRowProps> = ({
  teacher,
  evaluationProcess,
  meetingStatus,
  status,
  progress
}) => {
  return (
    <tr className='border-b border-neutral-200'>
      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
        <div className='flex items-center'>
          <div className='h-10 w-10 flex-shrink-0'>
            <Avatar url={teacher.avatar} />
          </div>
          <div className='ml-4'>
            <TextDetailed text={teacher.name} detail={teacher.code} />
          </div>
        </div>
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        <TextDetailed
          text={evaluationProcess.name}
          detail={evaluationProcess.type}
        />
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        <MeetingStatus status={meetingStatus} />
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        <CircleProgress percentage={progress} />
      </td>
      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
        <StatusDropDown status={status} />
      </td>
      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
        {status === StatusEnum.NOT_STARTED ? (
          <div className='flex items-center text-neutral-500 justify-end cursor-pointer'>
            <PlayCircle className='w-5' />
            <span className='ml-2'>Start</span>
          </div>
        ) : (
          <Menu
            as='div'
            className='text-slate-500 ml-6 hover:text-slate-700 active:text-slate-500 relative'
          >
            <div>
              <Menu.Button className='flex items-center focus:outline-none'>
                <MoreHorizontal className='text-neutral-500 cursor-pointer' />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-xl focus:outline-none'>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active
                          ? 'bg-gray-100 text-gray-900 text-white'
                          : 'text-gray-700'
                      } block px-4 py-2 text-base`}
                    >
                      <div className='flex items-center'>
                        <PlusCircle />
                        <span className='ml-3'>Placeholder</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active
                          ? 'bg-gray-100 text-gray-900 text-white'
                          : 'text-gray-700'
                      } block px-4 py-2 text-base`}
                    >
                      <div className='flex items-center'>
                        <PlusCircle />
                        <span className='ml-3'>Placeholder</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active
                          ? 'bg-gray-100 text-gray-900 text-white'
                          : 'text-gray-700'
                      } block px-4 py-2 text-base`}
                    >
                      <div className='flex items-center'>
                        <PlusCircle />
                        <span className='ml-3'>Placeholder</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </td>
    </tr>
  );
};

export default EvaluationRow;
