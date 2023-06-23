import { FC, useState } from 'react';
import { PromptTrueFalseContained } from 'Components/Icons';
import { Textarea } from 'Components/Forms';
import Select, { IOption } from 'Elements/Select';
import { Button } from 'Components/Button';
import { ArrowBack } from '@mui/icons-material';

const questionTypeOptions: Array<IOption> = [
  {
    id: 'true_or_false',
    label: 'True or false'
  }
];

const difficultyOptions: Array<IOption> = [
  {
    id: 'easy',
    label: 'Easy'
  },
  {
    id: 'medium',
    label: 'Medium'
  },
  {
    id: 'difficult',
    label: 'Difficult'
  }
];

const questionCountOptions: Array<IOption> = [
  {
    id: '10',
    label: 'Auto'
  },
  {
    id: '1',
    label: '1'
  },
  {
    id: '2',
    label: '2'
  },
  {
    id: '3',
    label: '3'
  },
  {
    id: '4',
    label: '4'
  },
  {
    id: '5',
    label: '5'
  }
];

export interface GeneratePageProps {
  onGenerate: () => void;
  onQuestionCountChange: (value: number) => void;
  onBack: () => void;
}

const GeneratePage: FC<GeneratePageProps> = ({
  onGenerate,
  onQuestionCountChange,
  onBack
}) => {
  const [questionType, setQuestionType] = useState(questionTypeOptions[0]);
  const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
  const [questionCount, setQuestionCount] = useState(questionCountOptions[0]);

  return (
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
            <h4 className='mt-1 text-slate-500'>
              Make a unique quiz from any test, using AI
            </h4>
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='text-slate-900 text-xl font-semibold'>Your Text</h3>
        </div>
        <Textarea className='mt-3' rows={5} />

        <div className='mt-8 w-full flex gap-8'>
          <div className='w-full'>
            <h3 className='text-slate-900 text-xl font-semibold'>
              Question Type
            </h3>

            <Select
              className='mt-2'
              selectClass='border border-slate-300 rounded-2xl transition delay-150 px-4 py-3.5 text-slate-800 focus:border-slate-500 outline-none w-full'
              options={questionTypeOptions}
              value={questionType}
              onChange={(value) => {
                setQuestionType(value);
              }}
            />
          </div>
          <div className='w-full'>
            <h3 className='text-slate-900 text-xl font-semibold'>Difficulty</h3>

            <Select
              className='mt-2'
              selectClass='border border-slate-300 rounded-2xl transition delay-150 px-4 py-3.5 text-slate-800 focus:border-slate-500 outline-none w-full'
              options={difficultyOptions}
              value={difficulty}
              onChange={(value) => {
                setDifficulty(value);
              }}
            />
          </div>
        </div>
        <div className='w-full mt-6'>
          <h3 className='text-slate-900 text-xl font-semibold'>
            Number of question
          </h3>
          <Select
            className='mt-2'
            selectClass='border border-slate-300 rounded-2xl transition delay-150 px-4 py-3.5 text-slate-800 focus:border-slate-500 outline-none w-full'
            options={questionCountOptions}
            value={questionCount}
            onChange={(value) => {
              setQuestionCount(value);
              onQuestionCountChange(parseInt(value.id, 10));
            }}
          />
        </div>

        <div className='2xl:mt-20 xl:mt-12 lg:mt-10 md:mt-4 sm:mt-4 flex'>
          <Button
            color='secondary'
            text='Back'
            icon={<ArrowBack />}
            onClick={onBack}
          />
          <Button
            text='Generate Quiz'
            className='ml-auto'
            onClick={onGenerate}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
