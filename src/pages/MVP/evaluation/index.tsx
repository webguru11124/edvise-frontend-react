import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import PromptsContainer from 'Pages/generate-prompts';

import { KeyboardBackspace } from '@mui/icons-material';
import ButtonGroup from 'Elements/ButtonGroup';

import EvaluationLesson from './evaluation-lesson';

const Evaluation: FC = () => {
  const { evaluationId } = useParams();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Lesson');
  const [tabs, setTabs] = useState([
    { text: 'Lesson', active: true },
    { text: 'Prompts', active: false },
    { text: 'Focus Area', active: false }
  ]);

  const onChangeTab = (tab: string) => {
    setActiveTab(tab);
    setTabs((prevTabs) => {
      return prevTabs.map((t) =>
        t.text === tab ? { ...t, active: true } : { ...t, active: false }
      );
    });
  };

  const onBack = () => {
    navigate('/lessons');
  };

  return (
    <div className='w-full py-8 px-4'>
      <div className='w-full py-4 px-8'>
        <button
          className='text-xl text-blue-600 flex items-center gap-2 hover:text-blue-500 active:text-blue-600'
          onClick={onBack}
        >
          <KeyboardBackspace />
          <h3>Back to Dashboard</h3>
        </button>
      </div>
      <div className='px-8 mt-2'>
        <ButtonGroup buttons={tabs} onChange={onChangeTab} />
      </div>
      {activeTab === 'Lesson' && (
        <EvaluationLesson id={parseInt(evaluationId!, 10)} />
      )}
      {activeTab === 'Prompts' && <PromptsContainer />}
    </div>
  );
};

export default Evaluation;
