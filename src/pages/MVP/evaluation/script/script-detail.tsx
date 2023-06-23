import { FC, useState, Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player';

import useGlobalStore from 'State/store';
import { useMoment } from 'Hooks/useMoment';

import { Dialog, Transition } from '@headlessui/react';

import Tiptap from 'Components/TiptapEditor/TiptapEditor';
import { blooms, edviseTags } from '../utils';
import { Sentence } from '../evaluation.interface';

import 'react-quill/dist/quill.snow.css';

import CustomTag from '../common/custom-tag';
import Select from '../../../../elements/Select';
import AddToFocusArea, { IFocusAreaOption } from '../common/add-to-focus-area';

import { FocusArea as IFocusArea } from '../../../../__generated/graphql';

interface ScriptDetailProps {
  handleClose: () => void;
  disableTags: boolean;
  handleTranscriptChange: (transcript: Sentence) => void;
  isOpen: boolean;
  focusAreas: Array<IFocusArea>;
  handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
  onRemove: (values: Array<IFocusAreaOption>) => void;
}

const questions = [
  { id: 'question', label: 'Question' },
  { id: 'statement', label: 'Statement' }
];

const ScriptDetail: FC<ScriptDetailProps> = ({
  handleClose,
  isOpen,
  handleFocusAreaChange
}) => {
  if (!isOpen) return <></>;
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<
    Array<IFocusAreaOption>
  >([]);
  const [focusAreaStandards, setFocusAreaStandards] = useState<
    Array<IFocusAreaOption>
  >([]);

  /* Backend & State Integration */
  const [
    videoLink,
    currentTranscriptMoment,
    focusAreas,
    currentMoment,
    setFocusAreas
  ] = useGlobalStore((state) => [
    state.videoLink,
    state.currentTranscriptMoment,
    state.focusAreas,
    state.currentMoment,
    state.setFocusAreas
  ]);
  const [isAdding, setIsAdding] = useState(false);

  const { addMomentToFocusAreas, removeMomentFromFocusAreas } = useMoment();
  /* Backend & State Integration */

  useEffect(() => {
    const selections: Array<IFocusAreaOption> = [];
    focusAreas.forEach((focusArea) => {
      console.log(focusArea.moment);
      focusArea.moment.forEach((moment) => {
        if (moment.id === currentMoment.id)
          selections.push({
            value: focusArea.id,
            label: focusArea.title
          });
      });
    });

    setSelectedFocusAreas(selections);
  }, [currentMoment, setSelectedFocusAreas]);

  useEffect(() => {
    setFocusAreaStandards(
      focusAreas.map((t) => ({
        value: t.id,
        label: t.title
      }))
    );
  }, [focusAreas]);

  const onAddToFocusArea = (ids: Array<IFocusAreaOption>) => {
    const focusAreaIds = ids.map((t) => t.value);
    setIsAdding(true);
    addMomentToFocusAreas({
      focusArea_ids: focusAreaIds,
      moment_id: currentMoment.id
    }).then(() => {
      setIsAdding(false);
      handleClose();
      setFocusAreas(
        focusAreas.map((focusArea) => {
          if (focusAreaIds.indexOf(focusArea.id) !== -1) {
            focusArea.moment.push(currentMoment);
          }
          return focusArea;
        })
      );
    });
    handleFocusAreaChange(focusAreas);
  };

  const onRemove = (ids: Array<IFocusAreaOption>) => {
    const focusAreaIds = ids.map((t) => t.value);
    removeMomentFromFocusAreas({
      focusArea_ids: focusAreaIds,
      moment_id: currentMoment.id
    }).then(() => {});
  };

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-40'
            leave='ease-in duration-200'
            leaveFrom='opacity-40'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-neutral-700 opacity-40 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel
                  className='relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full w-[80%]'
                  style={{ width: '80%' }}
                >
                  <div className='bg-neutral-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='flex w-full px-[100px] py-[70px] gap-8 sm:max-xl:px-[20px] sm:max-xl:py-[20px] md:max-xl:px-[30px] md:max-xl:py-[30px]'>
                      <div className='flex-2'>
                        <ReactPlayer
                          url={videoLink}
                          controls
                          width='100%'
                          playing
                          height='280px'
                        />
                        <h3 className='mt-9 pb-7 mb-5 text-2xl font-bold text-neutral-800 border-b border-neutral-300'>
                          {currentTranscriptMoment?.text}
                        </h3>
                        <div className='flex-1 flex flex-col h-[200px] break-all'>
                          <Tiptap />
                        </div>
                      </div>

                      <div className='flex-1 w-[35%]'>
                        <h3 className='text-neutral-500 text-xl'>
                          Lesson Transcript View
                        </h3>
                        <CustomTag
                          handleCustomTags={() => {}}
                          customtags={[]}
                        />

                        <div className='border-t border-neutral-300 py-5 mt-5'>
                          <h3 className='text-neutral-500 text-xl'>
                            Edvise Tags
                          </h3>
                          <div className='mt-2 flex gap-2 flex-col'>
                            <div className='mt-2'>
                              <Select
                                options={edviseTags}
                                value={edviseTags[0]}
                                onChange={() => {}}
                              />
                            </div>
                            <div className='mt-2'>
                              <Select
                                options={blooms}
                                value={blooms[0]}
                                onChange={() => {}}
                              />
                            </div>
                            <div className='mt-2'>
                              <Select
                                options={questions}
                                value={questions[0]}
                                onChange={() => {}}
                              />
                            </div>
                          </div>
                        </div>

                        <div className='border-t border-neutral-300 py-5 mt-5'>
                          <h3 className='text-neutral-500 text-xl'>
                            Add To Focus Area
                          </h3>
                          <div className='w-full mt-3 flex gap-1'>
                            <AddToFocusArea
                              options={focusAreaStandards}
                              onAdd={onAddToFocusArea}
                              selectedFocusAreas={selectedFocusAreas}
                              onRemove={onRemove}
                              isLoading={isAdding}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ScriptDetail;
