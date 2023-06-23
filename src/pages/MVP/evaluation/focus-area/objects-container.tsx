import { Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import { useMoment } from 'Hooks/useMoment';
import useGlobalStore from 'State/store';
import { ConfirmModal } from 'Components/Modal';

// import AnalyticsChartItem from '../lesson-analytics/analytics-chart-item';
// import LessonAnalyticsDetail from '../lesson-analytics/lesson-analytics-detail';
import ScriptCard from '../script/script-card';
// import ScriptDetail from '../script/script-detail';

import {
  FocusArea as IFocusArea,
  Moment,
  MomentType
} from '../../../../__generated/graphql';
import AnalyticsChartItem from '../lesson-analytics/analytics-chart-item';
import ScriptDetail from '../script/script-detail';

export interface ObjectsContainerProps {
  focusArea: IFocusArea;
  // handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
}

const dummyChartData = {
  name: 'Talk Time by Speaker',
  graphtype: 'donut',
  options: {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
      position: 'right'
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  },
  data: {
    labels: ['teacher', 'student', 'both'],
    datasets: [
      {
        data: [550.9597587000001, 172.3656800000001],
        backgroundColor: ['#42a5f5', '#F05467', '#c084fc'],
        hoverBackgroundColor: ['#42a5dd', '#F054dd', '#c084ee']
      }
    ]
  }
};

const ObjectsContainer: FC<ObjectsContainerProps> = ({
  focusArea
  // handleFocusAreaChange
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [objectIndex, setObjectIndex] = useState(-1);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  /* Backend integration */
  const [
    focusAreas,
    setCurrentMomentType,
    setCurrentTranscriptMoment,
    setCurrentMoment
  ] = useGlobalStore((state) => [
    state.focusAreas,
    state.setCurrentMomentType,
    state.setCurrentTranscriptMoment,
    state.setCurrentMoment
  ]);
  const { removeMomentFromFocusAreas } = useMoment();

  const toggleConfirmOpen = () => {
    setConfirmOpen(!isConfirmOpen);
  };

  const onSelectItem = (moment: Moment) => {
    setCurrentMomentType(MomentType.Transcript);
    setCurrentTranscriptMoment(moment.transcriptMoment!);
    setCurrentMoment(moment);
    toggleModal();
  };

  const onRemoveItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    toggleConfirmOpen();
    e.stopPropagation();
    setObjectIndex(index);
  };

  const onConfirm = () => {
    setDeleting(true);
    removeMomentFromFocusAreas({
      focusArea_ids: [focusArea.id],
      moment_id: objectIndex
    }).then(() => {
      setDeleting(false);
      toggleConfirmOpen();
    });
  };

  const onCancel = () => {
    toggleConfirmOpen();
  };

  return (
    <>
      {focusArea.moment.map((moment: Moment, index) => {
        if (moment.type === MomentType.Transcript) {
          const { transcriptMoment } = moment;
          return (
            transcriptMoment && (
              <div
                className='p-2 rounded-md cursor-pointer relative col-span-1 row-span-1 min-h-[250px]'
                onClick={() => {
                  onSelectItem(moment);
                }}
                role='button'
                key={index}
              >
                <div className='bg-white w-full rounded-md h-full'>
                  {transcriptMoment && (
                    <ScriptCard tab='paragraph' moment={transcriptMoment} />
                  )}
                </div>
                <button
                  className='absolute right-[10px] top-[10px] hover:text-neutral-400 active:text-neutral-800'
                  onClick={(e) => {
                    onRemoveItem(e, moment.id);
                  }}
                >
                  <Close />
                </button>
              </div>
            )
          );
        }

        const { analyticsMoment } = moment;
        return (
          analyticsMoment && (
            <div
              className='cursor-pointer p-2 relative col-span-1 row-span-2'
              key={index}
              role='button'
              onClick={() => {
                // onSelectItem(moment);
              }}
            >
              <AnalyticsChartItem
                chartData={dummyChartData}
                width='300'
                height='250'
              />
              <button
                className='absolute right-[10px] top-[10px] hover:text-neutral-400 active:text-neutral-800'
                onClick={(e) => {
                  onRemoveItem(e, index);
                }}
              >
                <Close />
              </button>
            </div>
          )
        );
      })}

      <ScriptDetail
        handleClose={toggleModal}
        disableTags
        handleTranscriptChange={() => {}}
        isOpen={isOpen}
        focusAreas={focusAreas}
        handleFocusAreaChange={() => {}}
        onRemove={() => {}}
      />

      {/* <LessonAnalyticsDetail
        analytics={currentObject}
        selectedFocusAreas={selectedFocusAreas}
        focusAreas={focusAreas}
        handleChange={() => {}}
        isOpen={isOpen && currentObject.type === 'chart'}
        handleClose={toggleModal}
        handleFocusAreaChange={handleFocusAreaChange}
        onRemove={() => {}}
      /> */}

      <ConfirmModal
        isOpen={isConfirmOpen}
        isConfirming={isDeleting}
        title='Remove From Focus Area'
        message='Are you sure want to remove from focus area?'
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default ObjectsContainer;
