import { FC, useEffect, useState, Fragment, useRef } from 'react';
import { Plus } from 'react-feather';
import { Delete, Edit, MoreHoriz } from '@mui/icons-material';
import { Popover, Transition } from '@headlessui/react';
import { useFocusAreaNote } from 'Hooks/useFocusAreaNote';
import { useFocusArea } from 'Hooks/useFocusArea';
import Skeleton from 'Elements/Skeleton';

import Select, { IOption } from 'Elements/Select';
import { Robot } from 'Components/Icons';
import { Button } from 'Components/Button';
import { ConfirmModal } from 'Components/Modal';

import ObjectsContainer from './objects-container';
import AddNotePopup from './add-note-popup';
import Note from './note';
import {
  FocusArea as IFocusArea,
  FocusAreaType,
  FocusAreaNoteType as NoteType
} from '../../../../__generated/graphql';

type Mode = 'normal' | 'edit';

export interface FocusAreaItemProps {
  focusArea: IFocusArea;
  videoLink: string;
  handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
  onRemoveObject: (objectIndex: number) => void;
  onTitleChange: (title: string) => void;
}

export const FocusAreaItemSkeleton: FC = () => {
  return (
    <div className='w-full rounded-md mt-9 border-t border-neutral-300'>
      <h3 className='text-neutral-800 font-bold text-3xl mt-8 mb-5 flex'>
        Focus Area Title
      </h3>
      <div className='flex gap-5'>
        <div className='flex-1'>
          <h5 className='text-neutral-500 text-xl mb-4 font-bold py-2'>
            Score
          </h5>
          <div className='flex flex-col max-h-[300px] h-[300px]'>
            <Skeleton variant='rectangular' />
            <div className='text-neutral-600 text-base mt-4 px-1 flex-1 overflow-scroll scrollbar-hide'>
              <Skeleton variant='text' lines={5} />
            </div>
          </div>
        </div>

        <div className='flex-3 flex flex-col'>
          <h5 className='text-neutral-500 text-xl mb-4 font-bold py-2'>
            Artifacts/Objects
          </h5>
          <div className='relative overflow-auto rounded-md bg-white max-h-[300px] h-[300px] flex-1 scrollbar-hide grid grid-cols-2 gap-3 p-3 border border-neutral-200'>
            <div className='col-span-1 row-span-2'>
              <Skeleton variant='chart' />
            </div>
            <div className='col-span-1 row-span-1 p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-700'>
              <Skeleton variant='text' lines={6} />
            </div>
            <div className='col-span-1 row-span-1 p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-700'>
              <Skeleton variant='text' lines={3} />
            </div>
          </div>
        </div>

        <div className='flex-2 flex flex-col'>
          <div className='flex mb-4 items-center'>
            <h5 className='text-neutral-500 text-xl font-bold py-2'>Notes</h5>
            <div className='ml-auto flex gap-2 items-center' />
          </div>
          <div className='relative rounded-md min-h-[200px] flex-1 flex-col gap-2 flex max-h-[300px] h-[300px] scrollbar-hide overflow-scroll border-neutral-200'>
            <div className='p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-700'>
              <Skeleton variant='text' lines={3} />
            </div>
            <div className='p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-700'>
              <Skeleton variant='text' lines={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FocusAreaItem: FC<FocusAreaItemProps> = ({
  focusArea,
  onTitleChange
}) => {
  const {
    id,
    title,
    focusAreaScore: scores,
    type,
    focusAreaNote: notes
  } = focusArea;

  const [selectedScore, setSelectedScore] = useState<string | null>(null);
  const [isChangingScore, setChangingScore] = useState(false);
  const [normalNote, setNormalNote] = useState('');

  const [isDeletingFocusArea, setDeletingFocusArea] = useState(false);
  const [isAddingAINote, setLoadingAINote] = useState(false);
  const [isAddingNote, setAddingNote] = useState(false);
  const [isNotePopupOpen, setNotePopupOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('normal');
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const notePopoverRef = useRef<HTMLButtonElement>(null);

  const { updateFocusAreaScore, deleteFocusArea } = useFocusArea();

  const { addNote, updateNote } = useFocusAreaNote();

  let selectedIndex = 0;
  const options = [
    {
      id: 'default',
      label: 'Select Score'
    }
  ].concat(
    scores.map((score, index) => {
      if (score.selected) selectedIndex = index + 1;
      return { id: score.id.toString(), label: score.title };
    })
  );
  const [selected, setSelected] = useState<IOption>(options[selectedIndex]);

  const onChangeScore = (t: IOption) => {
    setChangingScore(true);
    updateFocusAreaScore({
      id: t.id === 'default' ? 0 : parseInt(t.id, 10),
      focusArea_id: id,
      selected: true
    }).then(() => {
      setSelected(t);
      setChangingScore(false);
    });
  };

  useEffect(() => {
    if (selected.id === 'default') {
      setSelectedScore('');
      return;
    }
    const score = scores.find((s) => s.id.toString() === selected.id);
    setSelectedScore(score?.description || '');
  }, [selected]);

  const onAddNote = (noteType: NoteType) => {
    // TODO: Replace dummy data here.
    // the AI-generated note should depend on the Focus Area.
    const currFocusArea = titleRef?.current?.innerHTML;
    let aiData = 'Dummy data';
    switch (currFocusArea) {
      case '1a: Demonstrating Knowledge of Content and Pedagogy':
        aiData =
          'In this lesson, the teacher is demonstrating knowledge of content by presenting a math problem and asking the students to solve it using a specific strategy. The teacher is also demonstrating knowledge of pedagogy by asking the students to explain their thinking and how they arrived at their solutions, rather than just giving the answer. The teacher is also using effective teaching strategies, such as giving the students time to discuss and think about the problem with their partner before asking for a volunteer to share their solution. The teacher is also providing feedback and guidance to the students as they work.';
        break;
      case '1b: Demonstrating Knowledge of Students':
        aiData =
          "In this example, the teacher demonstrated knowledge of students by giving time to think and encouraging them to explain their answer and not just shout out the answer. He asked individual students to explain how they arrived at the solution and used a variety of methods to help them, such as counting on their fingers, using a hundreds chart, and adding. He also encouraged students to talk to their partners and listen to each other's explanations. This shows that he was aware of the different ways students might approach a math problem and was able to tailor his instruction to meet their needs.";
        break;
      case '1c: Setting Instructional Outcomes':
        aiData =
          "1. Students will understand that good mathematicians can explain why they know the answer to math problems. 2. Students will be able to explain how to solve math problems using addition, subtraction, and the hundreds chart.' 3. Students will be able to use counting strategies such as using their fingers, toes, and elbows to solve math problems. 4. Students will be able to solve word problems involving addition and subtraction.";
        break;
      case '1d: Demonstrating Knowledge of Resources':
        aiData =
          "The teacher demonstrated knowledge of resources by referencing the hundreds chart and encouraging students to use it to solve math problems. He also pointed out that fingers can be used in addition to other methods, such as counting on one's head, when solving math problems. Finally, he provided examples of how to explain mathematical solutions, emphasizing the importance of understanding the concept rather than just the answer.";
        break;
      case '1e: Designing Coherent Instruction':
        aiData =
          'An example of Designing Coherent Instruction from this lesson is that the teacher takes time to explain the problem, rather than just giving it to the students. He encourages the students to think about what type of math problem it is and what strategies they can use to solve it. He also encourages the students to talk to their partners and to use tools like the hundreds chart to help them with the problem. Lastly, he encourages the students to explain why they know the answer to the problem.';
        break;
      default:
        break;
    }
    const content = noteType === NoteType.Generated ? aiData : normalNote;
    if (!content.length) return;

    if (noteType === NoteType.Generated) setLoadingAINote(true);
    else setAddingNote(true);
    addNote({ focusArea_id: id, type: noteType, content }).then(() => {
      if (noteType === NoteType.Generated) setLoadingAINote(false);
      else {
        setAddingNote(false);
        notePopoverRef?.current?.click();
      }
    });
  };

  const toggleConfirm = () => {
    setConfirmOpen(!isConfirmOpen);
  };

  const onSaveNote = (index: number, value: string) => {
    updateNote({
      id: notes[index].id,
      focusArea_id: id,
      content: value
    });
  };

  const onChangeNote = (value: string) => {
    setNormalNote(value);
  };

  const onEditClick = () => {
    setMode('edit');
  };

  useEffect(() => {
    titleRef?.current?.focus();
  }, [mode]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onTitleChange(titleRef?.current?.innerHTML || '');
      setMode('normal');
    }
  };

  const onConfirmRemove = () => {
    setDeletingFocusArea(true);
    deleteFocusArea({ id }).then(() => {
      toggleConfirm();
      setDeletingFocusArea(false);
    });
  };

  const onCancelRemove = () => {
    toggleConfirm();
  };

  return (
    <div className='w-full rounded-md mt-9 border-t border-neutral-300'>
      <h3 className='text-neutral-800 font-bold text-3xl mt-8 mb-5 flex'>
        <div
          className='flex-1'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: title }}
          ref={titleRef}
          contentEditable={mode === 'edit'}
          onKeyDown={onKeyDown}
          role='presentation'
        />
        <div className='flex items-center justify-center'>
          <Popover className='relative'>
            <Popover.Button className='outline-none text-neutral-600 hover:text-neutral-900 active:text-neutral-500 cursor-pointer'>
              <MoreHoriz />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute right-0 top-[100%] w-[200px] py-4 px-3 z-10 bg-white shadow-2xl shadow-gray-400 rounded-md'>
                {({ close }) => (
                  <div className='w-full'>
                    <button
                      className='w-full text-base text-neutral-500 flex items-center hover:text-neutral-600 active:text-neutral-500'
                      onClick={() => {
                        onEditClick();
                        close();
                      }}
                    >
                      <Edit className='mr-3' />
                      <h3>Edit name</h3>
                    </button>
                    <button
                      className='w-full text-base text-neutral-500 mt-3 flex items-center hover:text-neutral-600 active:text-neutral-500'
                      onClick={toggleConfirm}
                    >
                      <Delete className='mr-3' />
                      <h3>Delete focus area</h3>
                    </button>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </h3>
      <div className='flex gap-5'>
        {type === FocusAreaType.Scored && (
          <div className='flex-1'>
            <h5 className='text-neutral-500 text-xl mb-4 font-bold py-2'>
              Score
            </h5>
            <div className='flex flex-col max-h-[300px] h-[300px]'>
              <Select
                options={options}
                value={selected}
                onChange={onChangeScore}
                isLoading={isChangingScore}
              />
              <div className='text-neutral-600 text-base mt-4 px-1 flex-1 overflow-scroll scrollbar-hide'>
                {selectedScore}
              </div>
            </div>
          </div>
        )}

        <div className='flex-3 flex flex-col'>
          <h5 className='text-neutral-500 text-xl mb-4 font-bold py-2'>
            Artifacts/Objects
          </h5>
          <div className='relative overflow-auto rounded-md bg-neutral-100 max-h-[300px] h-[300px] flex-1 scrollbar-hide p-1 grid grid-cols-2'>
            <ObjectsContainer focusArea={focusArea} />
          </div>
        </div>

        <div className='flex-2 flex flex-col'>
          <div className='flex mb-4 items-center'>
            <h5 className='text-neutral-500 text-xl font-bold'>Notes</h5>
            <div className='ml-auto flex gap-2 items-center'>
              <Button
                icon={<Robot />}
                isLoading={isAddingAINote}
                disabled={isAddingAINote}
                text='Generate Content'
                color='secondary'
                size='sm'
                onClick={() => {
                  onAddNote(NoteType.Generated);
                }}
              />
              <Popover className='relative'>
                <Popover.Button className='hover:text-neutral-500 active:text-neutral-400 outline-none'>
                  <button
                    ref={notePopoverRef}
                    onClick={() => {
                      return setNotePopupOpen(!isNotePopupOpen);
                    }}
                  >
                    <Plus />
                  </button>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute right-0 top-0 z-10 mt-12 w-96 px-4 sm:px-0'>
                    {() => (
                      <AddNotePopup
                        isLoading={isAddingNote}
                        isOpen={isNotePopupOpen}
                        onReturn={() => {
                          onAddNote(NoteType.User);
                        }}
                        onChange={onChangeNote}
                      />
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
          <div className='relative rounded-md min-h-[200px] flex-1 flex-col gap-2 flex max-h-[300px] h-[300px] scrollbar-hide overflow-scroll'>
            {notes.map((note, index) => (
              <Note
                id={note.id}
                key={index}
                type={note.type}
                content={note.content}
                onChangeContent={(value: string) => {
                  onSaveNote(index, value);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isConfirmOpen}
        message='Are you sure you want to delete this Focus Area? All of the attached Artifacts/Objects will be removed.'
        title='Delete focus area'
        onConfirm={onConfirmRemove}
        onCancel={onCancelRemove}
        isConfirming={isDeletingFocusArea}
      />
    </div>
  );
};

export default FocusAreaItem;
