import { FC, useEffect, useState } from 'react';
import { Input, Textarea } from 'Components/Forms';
import { Button } from 'Components/Button';
import Select, { IOption } from 'Elements/Select';
import { classNames, generateUUID, getENCharfromIndex } from 'Utils/index';
import { usePromptStore } from 'State/promptStore';
import { ConfirmModal } from 'Components/Modal';

import PopOver from './Menu';

enum CardStatus {
  VIEW,
  EDIT
}

export interface IMultiChoice {
  choices: string[];
  question: string;
  id: string;
}

const MultiChoiceCard: FC<IMultiChoice> = ({
  id,
  choices: defaultChoices,
  question: defaultQuestion
}) => {
  const [multiChoiceQuestions, setMultiChoiceQuestions] = usePromptStore(
    (state) => [state.multiChoiceQuestions, state.setMultiChoiceQuestions]
  );
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  const [choices, setChoices] = useState(defaultChoices);
  const [question, setQuestion] = useState(defaultQuestion);
  const [editChoices, setEditChoices] = useState(defaultChoices);
  const [editQuestion, setEditQuestion] = useState(defaultQuestion);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [editSelIndex, setEditSelIndex] = useState(0);

  const [mode, setMode] = useState<CardStatus>(CardStatus.VIEW);

  const getChoiceOptions = () => {
    return editChoices.map((choice, index) => ({
      id: index.toString(),
      label: choice
    }));
  };

  const [choiceOptions, setChoiceOptions] = useState<Array<IOption>>([]);

  useEffect(() => {
    if (mode === CardStatus.EDIT) {
      setEditChoices([...choices]);
      setEditQuestion(question);
      setChoiceOptions(getChoiceOptions());
    }
  }, [mode]);

  useEffect(() => {
    setChoiceOptions(getChoiceOptions());
  }, [editChoices]);

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
    setMultiChoiceQuestions(multiChoiceQuestions.filter((t) => t.id !== id));
  };

  const onDuplicate = () => {
    const index = multiChoiceQuestions.findIndex((t) => t.id === id);
    if (index !== -1)
      multiChoiceQuestions.splice(index + 1, 0, {
        id: generateUUID(),
        choices,
        question
      });
    setMultiChoiceQuestions(multiChoiceQuestions);
  };

  const onSave = () => {
    setMode(CardStatus.VIEW);
    setQuestion(editQuestion);
    setChoices(editChoices);
  };

  const onChangeQuestion = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setEditQuestion(e.currentTarget.value);
  };

  const onChangeChoice = (value: string, index: number) => {
    setEditChoices((prevState) => {
      prevState[index] = value;
      return [...prevState];
    });
  };

  const onChangeSelection = (value: IOption) => {
    setEditSelIndex(parseInt(value.id, 10));
  };

  const getCardColor = () => {
    if (selectedIndex === -1 || mode === CardStatus.EDIT)
      return 'border-slate-300';
    if (selectedIndex === editSelIndex) return 'border-green-500';
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
            {choices.map((choice, index) => (
              <div className='mt-4 flex items-center' key={index}>
                <input
                  type='radio'
                  name={`radio${id}`}
                  className='cursor-pointer'
                  checked={selectedIndex === index}
                  onChange={(e) => {
                    if (e.currentTarget.checked) setSelectedIndex(index);
                  }}
                  id={`multi-${id}-${index}`}
                />
                <label
                  className='text-slate-600 font-medium ml-3 cursor-pointer'
                  htmlFor={`multi-${id}-${index}`}
                >
                  {`${getENCharfromIndex(index)}) ${choice}`}
                </label>
              </div>
            ))}
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
          {editChoices.map((choice, index) => (
            <div className='mt-4' key={index}>
              <h4 className='text-base text-slate-900 font-bold'>
                Answer {getENCharfromIndex(index)}
              </h4>
              <Input
                className='mt-2'
                value={choice}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  onChangeChoice(e.currentTarget.value, index);
                }}
              />
            </div>
          ))}
          <div className='mt-4'>
            <h4 className='text-base text-slate-900 font-bold'>
              Correct Answer
            </h4>
            <Select
              className='mt-2'
              selectClass='border border-slate-300 rounded-2xl transition delay-150 px-4 py-3.5 text-slate-800 focus:border-slate-500 outline-none w-full'
              options={choiceOptions}
              value={choiceOptions[editSelIndex]}
              onChange={onChangeSelection}
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

export default MultiChoiceCard;
