import { useState } from 'react';
import { Button } from 'Components/Button';
import CalendarView from './Dashboard/CalendarView';
import { Fire } from './Icons';

type Evaluation = {
  id: number;
  title: string;
  type: string;
  datetime: Date;
};

enum EvaluationView {
  LIST,
  CALENDAR
}

const EvaluationListItem: React.FC<Evaluation> = ({
  title,
  type,
  datetime
}) => (
  <div className='flex justify-between shadow-md shadow-gray-200 w-full p-4 bg-white items-center'>
    <div className='flex items-center gap-x-5'>
      <div className='bg-critical-100 p-6 rounded-full'>
        <Fire />
      </div>
      <div className='flex flex-col space-y-2'>
        <span className='text-xl font-bold'>{title}</span>
        <span className='space-x-3'>
          <span className='font-semibold text-gray-600'>{type}</span>
          <span className='text-gray-400'>
            {new Intl.DateTimeFormat('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }).format(datetime)}
          </span>
        </span>
      </div>
    </div>
    <Button className='h-12 justify-center' text='View' />
  </div>
);

const UpcomingEvaluations: React.FC<{ evaluations: Evaluation[] }> = ({
  evaluations
}) => {
  const [view, setView] = useState(EvaluationView.LIST);

  return (
    <div className='space-y-7'>
      <h3 className='text-xl font-bold'>Upcoming Evaluation</h3>
      <div className='flex gap-x-5'>
        <Button
          onClick={() => setView(EvaluationView.LIST)}
          className='p-3 justify-center'
          color={view === EvaluationView.LIST ? 'primary' : 'secondary'}
          text='
          List View'
        />
        <Button
          onClick={() => setView(EvaluationView.CALENDAR)}
          className='p-3 justify-center'
          color={view === EvaluationView.CALENDAR ? 'primary' : 'secondary'}
          text='Calendar View'
        />
      </div>
      {view === EvaluationView.LIST ? (
        <div className='flex flex-col gap-y-5'>
          {evaluations.map((evaluation) => (
            <EvaluationListItem key={evaluation.id} {...evaluation} />
          ))}
        </div>
      ) : (
        <CalendarView />
      )}
    </div>
  );
};

export default UpcomingEvaluations;
