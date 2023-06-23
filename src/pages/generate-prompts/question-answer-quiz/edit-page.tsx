import { FC, useEffect, useState } from 'react';
import { PromptQAContained } from 'Components/Icons';
import { Button } from 'Components/Button';
import { ExpandMore } from '@mui/icons-material';
import { Input } from 'Components/Forms';
import { QACard, IQuestionAnswer } from 'Components/GeneratePrompt';
import { usePromptStore } from 'State/promptStore';
import { generateUUID } from 'Utils/index';
import { PageLoader } from 'Components/PageLoader';

const defaultAnswer =
  'Supervised learning: This is where the machine learning model is trained on a labeled dataset, where the correct output is known for each input. Te commonly used for tasks such as clustering,';
const defaultQuestion =
  'What are the main types of machine learning algorithms, and how are they used in practice?';

interface EditPageProps {
  onBack: () => void;
  count: number;
}

const EditPage: FC<EditPageProps> = ({ onBack, count }) => {
  const [qaQuestions, setQAQuestions] = usePromptStore((state) => [
    state.qaQuestions,
    state.setQAQuestions
  ]);

  const [isLoading, setLoading] = useState(true);

  const initQuestions = () => {
    const datas: Array<IQuestionAnswer> = [];
    for (let i = 0; i < count; ++i)
      datas.push({
        id: generateUUID(),
        number: i + 1,
        question: defaultQuestion,
        answer: defaultAnswer
      });
    setQAQuestions(datas);
  };

  useEffect(() => {
    initQuestions();

    setTimeout(() => {
      setLoading(!isLoading);
    }, 300);
  }, []);

  return isLoading ? (
    <PageLoader />
  ) : (
    <div className='w-full flex justify-center'>
      <div className='w-[800px] mb-8 xl:2xl:mt-20 lg:mt-8 md:mt-8'>
        <div className='w-full flex items-center border-b border-b-neutral-200 pb-7'>
          <div className='mr-6'>
            <PromptQAContained />
          </div>
          <div>
            <h3 className='font-bold text-slate-800 text-2xl'>
              Question + Answer
            </h3>
            <h4 className='mt-1 text-slate-500'>
              Make a unique quiz from any test, using AI
            </h4>
          </div>
          <div className='ml-auto'>
            <Button
              color='secondary'
              text='Share & Export'
              icon={<ExpandMore />}
              iconPosition='end'
            />
          </div>
        </div>

        <div className='w-full mt-7'>
          <h3 className='font-semibold text-slate-900 text-xl'>Quiz Title</h3>
          <Input className='mt-3' defaultValue='Untitled Quiz' />
        </div>

        {qaQuestions.map(({ id, question, answer }, index) => (
          <div className='mt-6' key={id}>
            <QACard
              question={question}
              answer={answer}
              id={id}
              number={index + 1}
            />
          </div>
        ))}

        <div className='mt-8 flex'>
          <Button text='Back' color='secondary' onClick={onBack} />
          <Button text='Confirm&Updated' className='ml-auto' />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
