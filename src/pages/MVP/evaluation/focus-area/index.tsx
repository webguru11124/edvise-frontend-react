import { Add } from '@mui/icons-material';
import { FC, useState } from 'react';
import useGlobalStore from 'State/store';
import { useFocusArea } from 'Hooks/useFocusArea';

import { Button } from '../../../../components/Button';
import AddFocusAreaModal from './add-focus-area';
import FocusAreaItem, { FocusAreaItemSkeleton } from './focus-area-item';

import {
  FocusAreaType,
  FocusArea as IFocusArea
} from '../../../../__generated/graphql';

export interface FocusAreaProps {
  videoLink: string;
  handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
}

const FocusAreaItemSkeletons: FC = () => {
  const skeletons: JSX.Element[] = [];
  for (let i = 0; i < 5; ++i) {
    skeletons.push(<FocusAreaItemSkeleton />);
  }
  return <>{skeletons}</>;
};

const FocusArea: FC<FocusAreaProps> = ({
  videoLink,
  handleFocusAreaChange
}) => {
  const { createFocusArea, updateFocusArea } = useFocusArea();
  const [focusAreas, rubricId, isEvaluationLoading] = useGlobalStore(
    (state) => [state.focusAreas, state.rubricId, state.isEvaluationLoading]
  );

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isBottom, setBottom] = useState(false);
  const [isAdding, setAdding] = useState(false);

  const toggleAddModalOpen = () => {
    setAddModalOpen(!isAddModalOpen);
  };

  const onClickAddNewFocusArea = () => {
    toggleAddModalOpen();
  };

  const addFocusArea = (name: string, description: string) => {
    setAdding(true);
    createFocusArea({
      title: name,
      rubric_id: rubricId,
      type: FocusAreaType.Unscored,
      description,
      addToBottom: isBottom
    }).then(() => {
      setAdding(false);
      toggleAddModalOpen();
    });
  };

  const onTitleChange = (title: string, id: number) => {
    updateFocusArea({
      id,
      title,
      type: FocusAreaType.Unscored
    });
  };

  return isEvaluationLoading ? (
    <FocusAreaItemSkeletons />
  ) : (
    <div className='w-full mt-8'>
      <div className='flex items-center'>
        <h3 className='text-xl text-neutral-500'>Focus Area</h3>
        <div className='ml-auto flex gap-4'>
          <Button
            shape='round'
            text='Export to pdf'
            color='secondary'
            width='fit-content'
            className='text-base'
          />
          <Button
            shape='round'
            text='Add new focus area'
            color='primary'
            width='fit-content'
            className='text-base'
            icon={<Add />}
            iconPosition='start'
            onClick={() => {
              setBottom(false);
              onClickAddNewFocusArea();
            }}
          />
        </div>
      </div>

      {focusAreas &&
        focusAreas.map((t, index: number) => {
          return (
            <FocusAreaItem
              focusArea={t}
              key={index}
              videoLink={videoLink}
              handleFocusAreaChange={handleFocusAreaChange}
              onRemoveObject={() => {}}
              onTitleChange={(title: string) => {
                onTitleChange(title, t.id);
              }}
            />
          );
        })}

      <AddFocusAreaModal
        isOpen={isAddModalOpen}
        onClose={toggleAddModalOpen}
        onSave={addFocusArea}
        isAdding={isAdding}
      />

      {/* Add Focus Area Button */}
      <div className='mt-7'>
        <button
          className='flex border border-dashed border-info-500 pt-6 pb-7 items-center justify-center bg-info-100 rounded-md w-full hover:text-neutral-500 active:text-black'
          onClick={() => {
            setBottom(true);
            onClickAddNewFocusArea();
          }}
        >
          <Add className='mr-2' />{' '}
          <h3 className='text-xl'>Add New Focus Area</h3>
        </button>
      </div>
    </div>
  );
};

export default FocusArea;
