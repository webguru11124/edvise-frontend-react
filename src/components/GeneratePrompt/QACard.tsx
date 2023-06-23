import { FC, useEffect, useState } from 'react';
import { Textarea } from 'Components/Forms';
import { Button } from 'Components/Button';
import { ConfirmModal } from 'Components/Modal';
import { usePromptStore } from 'State/promptStore';
import { generateUUID } from 'Utils/index';

import PopOver from './Menu';

enum CardStatus {
  VIEW,
  EDIT
}

export interface IQuestionAnswer {
  id: string;
  answer: string;
  question: string;
  number: number;
}

const QACard: FC<IQuestionAnswer> = ({
  id,
  number,
  answer: defaultAnswer,
  question: defaultQuestion
}) => {
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [answer, setAnswer] = useState(defaultAnswer);
  const [editAnswer, setEditAnswer] = useState(defaultAnswer);
  const [question, setQuestion] = useState(defaultQuestion);
  const [editQuestion, setEditQuestion] = useState(defaultQuestion);

  const [qaQuestions, setQAQuestions] = usePromptStore((state) => [
    state.qaQuestions,
    state.setQAQuestions
  ]);

  const [mode, setMode] = useState<CardStatus>(CardStatus.VIEW);

  const onEdit = () => {
    setMode(CardStatus.EDIT);
  };

  useEffect(() => {}, []);

  const toggleConfirmModal = () => {
    setConfirmOpen(!isConfirmOpen);
  };

  const onDelete = () => {
    toggleConfirmModal();
  };

  const onConfirmDelete = () => {
    setQAQuestions(qaQuestions.filter((t) => t.id !== id));
  };

  const onDuplicate = () => {
    const index = qaQuestions.findIndex((t) => t.id === id);
    if (index !== -1)
      qaQuestions.splice(index + 1, 0, {
        id: generateUUID(),
        answer,
        question,
        number: 0
      });
    setQAQuestions(qaQuestions);
  };

  const onSave = () => {
    setMode(CardStatus.VIEW);
    setQuestion(editQuestion);
    setAnswer(editAnswer);
  };

  const onChangeEditQuestion = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setEditQuestion(e.currentTarget.value);
  };

  const onChangeEditAnswer = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setEditAnswer(e.currentTarget.value);
  };

  return (
    <div className='border px-7 py-6 w-full rounded-xl max-w-[800px] border-slate-300'>
      {mode === CardStatus.VIEW && (
        <div className='flex'>
          <div className='mr-5'>
            <div className='w-[35px] h-[35px] bg-blue-600 text-white font-bold text-xl rounded-full flex items-center justify-center'>
              {number}
            </div>
          </div>
          <div className='flex-1 p-1'>
            <div className='mb-1 flex'>
              <h3 className='font-semibold text-slate-800 text-xl break-normal pr-3'>
                {question}
              </h3>
              <div className='ml-auto'>
                <PopOver
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onDuplicate={onDuplicate}
                />
              </div>
            </div>
            <div className='text-slate-600 text-xl mt-4'>{answer}</div>
          </div>
        </div>
      )}
      {/* EDIT MODE */}
      {mode === CardStatus.EDIT && (
        <div className='flex-1 p-1'>
          <h3 className='text-slate-800 font-semibold text-xl'>
            Edit Question + Answer
          </h3>
          <div className='mt-8'>
            <h4 className='text-base text-slate-900 font-bold'>Question</h4>
            <Textarea
              className='mt-2'
              value={editQuestion}
              onChange={onChangeEditQuestion}
            />
          </div>
          <div className='mt-8'>
            <h4 className='text-base text-slate-900 font-bold'>Answer</h4>
            <Textarea
              className='mt-2'
              value={editAnswer}
              onChange={onChangeEditAnswer}
              rows={4}
            />
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
        </div>
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

export default QACard;
