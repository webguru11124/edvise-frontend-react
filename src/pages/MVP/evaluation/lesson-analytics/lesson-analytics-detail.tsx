import { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import CustomTag from '../common/custom-tag';
import { Tag } from '../evaluation.interface';
import { IChart } from '../datas/data-chart';

import TrendGraph from './trend-graph';
import 'react-quill/dist/quill.snow.css';
import { TiptapEditor } from '../../../../components/TiptapEditor';
import AddToFocusArea, { IFocusAreaOption } from '../common/add-to-focus-area';
import { FocusArea as IFocusArea } from '../../../../__generated/graphql';

export interface LessonAnalyticsDetailProps {
  isOpen: boolean;
  analytics: IChart | null;
  handleClose: () => void;
  handleChange: (chart: IChart) => void;
  handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
  focusAreas: Array<IFocusArea>;
  selectedFocusAreas: Array<any>;
  onRemove: (values: Array<IFocusAreaOption>) => void;
}

const LessonAnalyticsDetail: FC<LessonAnalyticsDetailProps> = ({
  isOpen,
  analytics,
  focusAreas,
  selectedFocusAreas,
  handleClose,
  handleFocusAreaChange,
  handleChange,
  onRemove
}) => {
  if (!isOpen) return <></>;

  const [state, setState] = useState({
    selectedRubrics: [],
    analytics
  });

  const focusAreaStandards = focusAreas.map((t) => ({
    value: t.id,
    label: t.title
  }));

  const handleCustomtags = (tags: Array<Tag>) => {
    const upstate = { ...state };

    if (!upstate.analytics) return;

    upstate.analytics.customtags = tags;
    setState(upstate);

    handleChange(upstate.analytics);
  };

  const onAddToFocusArea = () => {
    if (!analytics) return;

    // for (let i = 0; i < ids.length; ++i) {
    //   const id = ids[i];
    //   const index = focusAreaStandards.findIndex((t) => t.value === id.value);
    //   const objectIndex = focusAreas[index].objects.findIndex(
    //     (t: any) => t.id === analytics.id
    //   );
    //   if (objectIndex === -1) focusAreas[index].objects.push(analytics);
    //   else focusAreas[index].objects[objectIndex] = analytics;
    // }
    handleClose();
    handleFocusAreaChange(focusAreas);
  };

  const onChangeNote = (value: string) => {
    if (analytics) {
      analytics.notes = value;
      handleChange(analytics);
    }
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
                  className='relative transform rounded-lg bg-white text-left shadow-xl transition-all'
                  style={{ width: '70%' }}
                >
                  <div className='bg-neutral-50 p-5 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mt-3 flex justify-between w-full text-center sm:mt-0 sm:text-left'>
                        <Dialog.Title
                          as='h3'
                          className='text-lg font-medium leading-6 text-gray-900 flex'
                        >
                          <h4 className='text-neutral-800 font-bold text-lg'>
                            {analytics?.name}
                          </h4>
                        </Dialog.Title>
                      </div>
                    </div>

                    <div className='flex gap-5'>
                      <div className='flex-1'>
                        <div className='mt-6 w-full flex justify-center'>
                          <TrendGraph
                            chartData={analytics}
                            width='350'
                            height='270'
                          />
                        </div>

                        <div className='mt-6'>
                          <TiptapEditor
                            onChange={onChangeNote}
                            value={analytics?.notes}
                          />
                        </div>
                      </div>

                      <div className='w-[400px]'>
                        <div className='mt-6'>
                          <CustomTag
                            handleCustomTags={handleCustomtags}
                            customtags={
                              state.analytics?.customtags
                                ? state.analytics.customtags
                                : []
                            }
                          />
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
                              isLoading={false}
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

export default LessonAnalyticsDetail;
