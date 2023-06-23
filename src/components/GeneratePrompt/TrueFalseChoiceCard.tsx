import { FC, useEffect, useState } from 'react';
import { Textarea } from 'Components/Forms';
import { Button } from 'Components/Button';
import { classNames, generateUUID } from 'Utils/index';
import { usePromptStore } from 'State/promptStore';
import { ConfirmModal } from 'Components/Modal';

import PopOver from './Menu';

enum CardStatus {
  VIEW,
  EDIT
}

export interface ITrueFalseChoice {
  answer: boolean;
  question: string;
  id: string;
}

const TrueFalseChoiceCard: FC<ITrueFalseChoice> = ({
  id,
  answer: defaultAnswer,
  question: defaultQuestion
}) => {
  const [tfQuestions, setTFQuestions] = usePromptStore((state) => [
    state.tfQuestions,
    state.setTFQuestions
  ]);
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  const [question, setQuestion] = useState(defaultQuestion);
  const [editQuestion, setEditQuestion] = useState(defaultQuestion);
  const [answer, setAnswer] = useState(defaultAnswer);
  const [editAnswer, setEditAnswer] = useState(defaultAnswer);

  const [mode, setMode] = useState<CardStatus>(CardStatus.VIEW);

  useEffect(() => {
    if (mode === CardStatus.EDIT) {
      setEditQuestion(question);
      setEditAnswer(answer);
    }
  }, [mode]);

  const onEdit = () => {
    setMode(CardStatus.EDIT);
  };

  const toggleConfirmModal = () => {
    setConfirmOpen(!isConfirmOpen);
  };

  const onDelete = () => {
    toggleConfirmModal();
  };

  const onConfirmDelete = () => {
    setTFQuestions(tfQuestions.filter((t) => t.id !== id));
  };

  const onDuplicate = () => {
    const index = tfQuestions.findIndex((t) => t.id === id);
    if (index !== -1)
      tfQuestions.splice(index + 1, 0, {
        id: generateUUID(),
        answer,
        question
      });
    setTFQuestions(tfQuestions);
  };

  const onSave = () => {
    setMode(CardStatus.VIEW);
    setQuestion(editQuestion);
  };

  const onChangeQuestion = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setEditQuestion(e.currentTarget.value);
  };

  const getCardColor = () => {
    if (mode === CardStatus.EDIT) return 'border-slate-300';
    if (answer === editAnswer) return 'border-green-500';
    return 'border-red-500';
  };

  return (
    <div
      className={classNames(
        'border px-7 py-6 w-full rounded-xl max-w-[800px]',
        getCardColor()
      )}
    >
      {mode === CardStatus.VIEW && (
        <>
          <div className='mb-1 flex'>
            <h3 className='font-semibold text-slate-800 text-xl'>{question}</h3>
            <div className='ml-auto'>
              <PopOver
                onEdit={onEdit}
                onDelete={onDelete}
                onDuplicate={onDuplicate}
              />
            </div>
          </div>
          <div>
            <div className='mt-4 flex items-center'>
              <input
                type='radio'
                name={`radio${id}`}
                className='cursor-pointer'
                checked={answer}
                id={`tf-${id}-0`}
                onChange={(e) => {
                  if (e.currentTarget.checked) setAnswer(true);
                }}
              />
              <label
                className='text-slate-600 font-medium ml-3 cursor-pointer'
                htmlFor={`tf-${id}-0`}
              >
                A) True
              </label>
            </div>
            <div className='mt-4 flex items-center'>
              <input
                type='radio'
                name={`radio${id}`}
                className='cursor-pointer'
                checked={!answer}
                id={`tf-${id}-1`}
                onChange={(e) => {
                  if (e.currentTarget.checked) setAnswer(false);
                }}
              />
              <label
                className='text-slate-600 font-medium ml-3 cursor-pointer'
                htmlFor={`tf-${id}-1`}
              >
                B) False
              </label>
            </div>
          </div>
        </>
      )}
      {/* EDIT MODE */}
      {mode === CardStatus.EDIT && (
        <>
          <h3 className='text-slate-800 font-semibold text-xl'>
            Edit Multiple Choice Question
          </h3>
          <div className='mt-8'>
            <h4 className='text-base text-slate-900 font-bold'>Question</h4>
            <Textarea
              className='mt-2'
              value={editQuestion}
              onChange={onChangeQuestion}
            />
          </div>

          <div className='mt-4 flex items-center'>
            <input
              type='radio'
              name={`radio${id}`}
              className='cursor-pointer'
              checked={editAnswer}
              id={`tf-${id}-0`}
              onChange={(e) => {
                if (e.currentTarget.checked) setEditAnswer(true);
              }}
            />
            <label
              className='text-slate-600 font-medium ml-3 cursor-pointer'
              htmlFor={`tf-${id}-0`}
            >
              A) True
            </label>
          </div>
          <div className='mt-4 flex items-center'>
            <input
              type='radio'
              name={`radio${id}`}
              className='cursor-pointer'
              checked={!editAnswer}
              id={`tf-${id}-1`}
              onChange={(e) => {
                if (e.currentTarget.checked) setEditAnswer(false);
              }}
            />
            <label
              className='text-slate-600 font-medium ml-3 cursor-pointer'
              htmlFor={`tf-${id}-1`}
            >
              B) False
            </label>
          </div>
          <div className='mt-7 flex'>
            <div className='flex ml-auto gap-3'>
              <Button
                color='secondary'
                text='Cancel'
                onClick={() => {
                  setMode(CardStatus.VIEW);
                }}
              />
              <Button color='primary' text='Save' onClick={onSave} />
            </div>
          </div>
        </>
      )}

      <ConfirmModal
        isOpen={isConfirmOpen}
        onConfirm={onConfirmDelete}
        onCancel={toggleConfirmModal}
        message='Are you sure you want to delete this question?'
        title='Delete question'
      />
    </div>
  );
};

export default TrueFalseChoiceCard;
