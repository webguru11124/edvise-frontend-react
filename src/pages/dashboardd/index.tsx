import { ArrowRightAlt } from '@mui/icons-material';
import TrendingChart from 'Components/Dashboard/TrendingChart';
import { Button } from 'Components/Button';
import UpcomingEvaluations from 'Components/UpcomingEvaluations';

const fetchedData = {
  evaluations: [
    {
      id: 1,
      title: 'Next Pre-Evaluation Conference',
      type: 'Formal Evaluation',
      datetime: new Date()
    },
    {
      id: 2,
      title: 'Next Pre-Evaluation Conference',
      type: 'Formal Evaluation',
      datetime: new Date()
    },
    {
      id: 3,
      title: 'Next Pre-Evaluation Conference',
      type: 'Formal Evaluation',
      datetime: new Date()
    }
  ]
};

const Dashboard: React.FC = () => {
  const { evaluations } = fetchedData;

  return (
    <>
      <div className='mt-10 bg-primary-50 rounded-lg pl-16 pt-[60px] pb-[75px] bg-[#E7ECFD] relative'>
        <div className='z-10 relative'>
          <div className='max-w-[420px] space-y-5'>
            <h1 className='text-3xl font-semibold text-gray-700 '>
              Begin pre-evaluation form
            </h1>
            <h2 className='text-lg text-bold text-gray-600'>
              Upload a video or audio lesson recording here
            </h2>
            <div className='pt-3'>
              <Button icon={<ArrowRightAlt />} text='Go to Form' size='xl' />
            </div>
          </div>
        </div>
        <img
          src='images/dashboard.png'
          className='absolute right-0 bottom-0 h-[110%]'
          alt='presentation'
        />
      </div>

      <div className='mt-10 flex flex-col gap-y-10'>
        <UpcomingEvaluations evaluations={evaluations} />

        <div className=''>
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
    </>
  );
};

export default Dashboard;
