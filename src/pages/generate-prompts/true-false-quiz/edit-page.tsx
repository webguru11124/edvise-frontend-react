import { FC, useEffect, useState } from 'react';
import { PromptTrueFalseContained } from 'Components/Icons';
import { Button } from 'Components/Button';
import { ExpandMore } from '@mui/icons-material';
import { Input } from 'Components/Forms';
import {
  TrueFalseChoiceCard,
  ITrueFalseChoice
} from 'Components/GeneratePrompt';
import { usePromptStore } from 'State/promptStore';
import { generateUUID } from 'Utils/index';
import { PageLoader } from 'Components/PageLoader';

const defaultAnswer = true;

const defaultQuestion = 'What is the purpose of Aritifical Intelligence(AI)?';

interface EditPageProps {
  onBack: () => void;
  count: number;
}

const EditPage: FC<EditPageProps> = ({ onBack, count }) => {
  const [tfQuestions, setTFQuestions] = usePromptStore((state) => [
    state.tfQuestions,
    state.setTFQuestions
  ]);
  const [isLoading, setLoading] = useState(true);

  const initQuestions = () => {
    const datas: Array<ITrueFalseChoice> = [];
    for (let i = 0; i < count; ++i)
      datas.push({
        id: generateUUID(),
        answer: defaultAnswer,
        question: defaultQuestion
      });
    setTFQuestions(datas);
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
            <PromptTrueFalseContained />
          </div>
          <div>
            <h3 className='font-bold text-slate-800 text-2xl'>
              True/False Quiz
            </h3>
            <h4 className='mt-1 text-slate-500'>True/False Quiz</h4>
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

        {tfQuestions.map(({ id, answer, question }) => (
          <div className='mt-6' key={id}>
            <TrueFalseChoiceCard question={question} answer={answer} id={id} />
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
