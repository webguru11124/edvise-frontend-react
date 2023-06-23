import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from 'Components/Button';
import QuizBox from './QuizBox';

export default function QuizBoxList() {
  const { control, handleSubmit } = useForm();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'quiz'
  });

  useEffect(() => {
    append({ question: '', correctAnswer: '' });
  }, []);

  const onSubmit = (data: any) => console.log(data);

  console.log(fields);

  return (
    <div>
      <div className='flex justify-end'>
        <Button
          text='Add Question'
          onClick={() => {
            append({ question: '', correctAnswer: '' });
          }}
        />
      </div>
      {fields.length === 0 && (
        <div className='p-8 border border-slate-300 rounded-lg my-7'>
          <p className='font-normal text-center'>
            Click on Add Question button to add questions
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <QuizBox
              control={control}
              update={update}
              index={index}
              value={field}
              remove={remove}
            />
          </fieldset>
        ))}
        <div className='flex justify-end'>
          <div>
            <Button text='Confirm & Updated' type='submit' />
          </div>
        </div>
      </form>
    </div>
  );
}
