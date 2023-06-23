import { FC, useState } from 'react';

import { Sidebar } from 'Components/Sidebar';
import { PageHeader } from 'Components/PageHeader';

import { Button } from 'Components/Button';
import { ArrowRight } from 'Components/Icons';
import TrendingChart from 'Components/Dashboard/TrendingChart';
import CalendarView from 'Components/Dashboard/CalendarView';
import EvaluationList from 'Components/Dashboard/EvaluationList';

import { SidebarProps } from 'Components/Sidebar/Sidebar';
import { PageHeaderProps } from 'Components/PageHeader/PageHeader';

export interface DashboardProps extends SidebarProps, PageHeaderProps {}

const Dashboard: FC<DashboardProps> = ({ items, unread, user }) => {
  const [mode, setMode] = useState('list');

  return (
    <div className='w-full'>
      <div className='h-0'>
        <div className='w-[300px] fixed top-0 left-0'>
          <Sidebar items={items} />
        </div>
      </div>
      <div className='pl-[300px]'>
        <div className='py-3 px-10'>
          <PageHeader unread={unread} user={user} />

          <div className='bg-primary-50 rounded-lg px-[100px] pt-[60px] pb-[75px] bg-[#E7ECFD] relative'>
            <div className='z-10 relative'>
              <h3 className='text-4xl	text-bold leading-10'>
                Begin pre-evaluation form
              </h3>
              <h4 className='text-2xl text-bold text-neutral-500 mt-3'>
                Upload a video or audio lesson
                <br />
                recording here
              </h4>
              <div className='mt-8'>
                <Button
                  shape='round'
                  text='Go to form'
                  width='fit-content'
                  icon={<ArrowRight />}
                />
              </div>
            </div>
            <img
              src='images/dashboard.png'
              className='absolute right-0 bottom-0 h-[110%]'
              alt='Dashboard'
            />
          </div>

          <div className='mt-10 flex pl-1 sm:max-xl:flex-col'>
            <div className='flex-3 xl:mr-2'>
              <h3 className='text-xl text-neutral-600 font-bold'>
                Upcoming Evaluations
              </h3>
              <div className='mt-5 flex'>
                <div className='mr-2'>
                  <Button
                    shape='round'
                    text='List View'
                    color={mode === 'list' ? 'primary' : 'secondary'}
                    width='fit-content'
                    onClick={() => {
                      setMode('list');
                    }}
                  />
                </div>
                <div className='ml-2'>
                  <Button
                    shape='round'
                    text='Calendar View'
                    color={mode === 'calendar' ? 'primary' : 'secondary'}
                    width='fit-content'
                    onClick={() => {
                      setMode('calendar');
                    }}
                  />
                </div>
              </div>

              {mode === 'list' && (
                <div className='mt-5'>
                  <EvaluationList />
                </div>
              )}

              {mode === 'calendar' && (
                <div className='mt-3 p-9 rounded-lg bg-white'>
                  <CalendarView />
                </div>
              )}
            </div>

            <div className='w-[550px] xl:ml-2 md:max-2xl:w-[350px] sm:max-xl:mt-8 md:max-xl:w-full'>
              <div className='flex items-center w-full'>
                <h3 className='text-xl text-neutral-600 font-bold'>
                  Teaching Trends at a Glance
                </h3>
                <button className='text-base font-bold text-blue-600 ml-auto'>
                  See all
                </button>
              </div>
              <div className='mt-8 bg-white rounded-lg p-8'>
                <h3 className='mb-8 text-right text-neutral-600'>
                  Student-Teacher Talk Time
                </h3>
                <TrendingChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
