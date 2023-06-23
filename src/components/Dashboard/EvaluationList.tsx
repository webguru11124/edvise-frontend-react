import { FC } from 'react';
import { Button } from '../Button';
import { Fire } from '../Icons';

const EvaluationListItem: FC = () => {
  return (
    <div className='bg-white rounded-lg px-8 py-4 mb-4 shadow-md shadow-gray-400/10 flex items-center'>
      <div className='bg-critical-100 p-6 rounded-full mr-5'>
        <Fire />
      </div>
      <div className='flex flex-col flex-1'>
        <h3 className='text-xl font-semibold'>
          Next Pre-Evaluation Conference
        </h3>
        <div className='mt-2 flex'>
          <span className='font-bold mr-3'>Formal Evaluation</span>
          <span className='text-neutral-500 mr-3'>14 days</span>
          <span className='text-neutral-500'>Aug 3, 2023</span>
        </div>
      </div>
      <div>
        <Button
          color='secondary'
          text='Button'
          width='fit-content'
          shape='round'
        />
      </div>
    </div>
  );
};

const EvaluationList: FC = () => {
  return (
    <div>
      <EvaluationListItem />
      <EvaluationListItem />
      <EvaluationListItem />
    </div>
  );
};

export default EvaluationList;
