import { useState, useEffect } from 'react';
import { Button } from 'Components/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { DropdownMenu, DropdownOptionTypes } from 'Components/DropdownMenu';
import {
  Control,
  FieldValues,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  useForm,
  useWatch
} from 'react-hook-form';

export interface QuizBoxProps {
  control: Control<FieldValues> | undefined;
  index: number;
  update: UseFieldArrayUpdate<FieldValues, 'quiz'>;
  value: Record<string, string>;
  remove: UseFieldArrayRemove;
}

const alphabet = 'ABCDEFG';

const QuizView = ({
  index,
  control,
  quizOptions
}: {
  index: number;
  control: Control<FieldValues> | undefined;
  quizOptions: DropdownOptionTypes[];
}) => {
  const formData = useWatch({
    control,
    name: `quiz.${index}`
  });

  const actualData: {
    question: string;
    answers: string[];
    correctAnswer: string;
  } = {
    question: formData?.question,
    answers: [],
    correctAnswer: formData?.correctAnswer
  };

  Object.keys(formData).map((key) => {
    if (key.startsWith('answer')) {
      actualData.answers.push(formData[key]);
    }
  });

  return (
    <div className='flex flex-col'>
      {/** ************** View Mode **************** */}
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-xl mb-3'>{formData?.question}</p>
        <div>
          <DropdownMenu
            options={quizOptions}
            icon={<MoreHorizIcon className='text-gray-900' />}
          />
        </div>
      </div>
      <div className=''>
        <fieldset className='space-y-5'>
          <legend className='sr-only'>Quiz</legend>
          {actualData?.answers?.map((answer: any) => (
            <div key={`aid-${answer}`} className='relative flex items-start'>
              <div className='flex h-5 items-center'>
                <input
                  aria-describedby='answers'
                  name='answers'
                  id={`aid-${answer}`}
                  type='radio'
                  disabled
                  className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <div className='ml-4'>
                  <label
                    htmlFor={`aid-${answer}`}
                    className='font-medium text-base text-slate-600'
                  >
                    {answer}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

const QuizBox = ({ control, index, update, value, remove }: QuizBoxProps) => {
  const [editMode, setEditMode] = useState(true);
  const { register, handleSubmit } = useForm({
    defaultValues: value
  });

  const handleModeChange = (state: boolean) => {
    setEditMode(state);
  };

  const quizOptions: DropdownOptionTypes[] = [
    { title: 'Edit', action: () => handleModeChange(true), icon: <FiEdit /> },
    {
      title: 'Delete',
      action: () => remove(index),
      icon: <RiDeleteBinLine />,
      color: 'text-red-500'
    }
  ];

  const onCancel = () => {
    if (value.id) {
      // eslint-disable-next-line no-restricted-globals, no-alert
      const result = confirm('Are you sure you want to cancel?');
      if (result) {
        remove(index);
        setEditMode(false);
      }
    }
  };

  useEffect(() => {
    if (value?.question && value?.correctAnswer) {
      setEditMode(false);
    }
  }, [update]);

  return (
    <>
      {editMode ? (
        <div className='p-8 border border-slate-300 rounded-lg my-7 shadow-lg'>
          {/** ************** Edit Mode **************** */}
          <div className='flex flex-col'>
            <p className='font-semibold text-xl mb-3'>
              Edit Multiple Choice Question
            </p>
            <div className='mt-4'>
              <label
                htmlFor={`qid-${index}`}
                className='block text-base font-bold mb-2 text-slate-900'
              >
                Question
              </label>
              <textarea
                {...register('question', { required: true })}
                rows={3}
                id={`qid-${index}`}
                className='block w-full resize-none border-slate-300 border py-3 rounded-lg focus:ring-0 text-lg'
              />
            </div>
            {/* Editable Answers */}
            {[1, 2].map((answer) => (
              <div className='mt-4' key={answer}>
                <label
                  htmlFor={`aid-${answer}`}
                  className='block text-base font-bold mb-2 text-slate-900'
                >
                  Answer {alphabet.charAt(answer - 1)}
                </label>
                <div className='mt-1'>
                  <input
                    {...register(`answer-${answer}`, { required: true })}
                    type='text'
                    id={`aid-${answer}`}
                    className='block w-full rounded-lg border-slate-300 border p-3 focus:border-indigo-500 focus:ring-indigo-500 text-lg text-slate-900'
                    aria-describedby='answer-text'
                  />
                </div>
              </div>
            ))}
            {/* Correct Answer */}
            <div className='mt-6'>
              <label
                htmlFor='correct-answer'
                className='block text-base font-bold mb-2 text-slate-900'
              >
                Correct Answer
              </label>

              <select
                {...register('correctAnswer', { required: true })}
                id='correct-answer'
                className='mt-1 block w-full rounded-lg border-slate-300 py-2 pl-3 pr-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-lg'
              >
                {[1, 2].map((option) => (
                  <option value={alphabet.charAt(option)} className='my-5'>
                    {alphabet.charAt(option - 1)}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end mt-7'>
              <Button
                text='Cancel'
                shape='round'
                color='secondary'
                className='mr-5 text-primary-500'
                onClick={onCancel}
              />
              <Button
                text='Save'
                color='primary'
                shape='round'
                onClick={handleSubmit((data) => {
                  update(index, data);
                })}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='p-8 border border-slate-300 rounded-lg my-7'>
          <QuizView index={index} control={control} quizOptions={quizOptions} />
        </div>
      )}
    </>
  );
};

export default QuizBox;
