import { FC, useEffect, useRef, useState } from 'react';
import useGlobalStore from 'State/store';
import { useObservation } from 'Hooks/useObservation';

import VideoPlayer from './video-player';
import Script from './script';

import { OnProgressProps } from './evaluation.interface';
import LessonAnalytics from './lesson-analytics';
import FocusArea from './focus-area';
import GeneratedPrompts from './generated-prompts';
import { FocusArea as IFocusArea } from '../../../__generated/graphql';

import analytics from './datas/data-analytics';
import scripts from './datas/data';

const SCRIPT_HEIGHT = {
  MIN: 800,
  MAX: 1500
};

export interface EvaluationLessonProps {
  id: number;
}

const EvaluationLesson: FC<EvaluationLessonProps> = ({ id }) => {
  const [
    setFocusAreas,
    focusAreas,
    videoLink,
    setObservationId,
    observationId
  ] = useGlobalStore((state) => [
    state.setFocusAreas,
    state.focusAreas,
    state.videoLink,
    state.setObservationId,
    state.observationId
  ]);

  const videoRef = useRef(null);
  const [scriptData] = useState(scripts);

  const [videoProgress, setVideoProgress] = useState<OnProgressProps>({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0
  });

  const { getObservation } = useObservation();
  useEffect(() => {
    setObservationId(id);
  }, []);

  useEffect(() => {
    getObservation();
  }, [observationId]);

  const handleFocusAreaChange = (datas: Array<IFocusArea>) => {
    setFocusAreas([...datas]);
  };

  const onRemoveChartFromFocusArea = () => {};

  return (
    <div className='w-full px-8'>
      {/* Video Player & Transcript */}
      <div className='grid grid-cols-5 gap-4 px-4 py-8 h-max'>
        <div className='col-span-3 flex flex-col'>
          <VideoPlayer
            videoRef={videoRef}
            videoProgress={videoProgress}
            setVideoProgress={setVideoProgress}
            selectedSentence={scripts}
            fileUrl={videoLink}
          />
        </div>

        <div
          className='rounded-xl ease-in-out duration-1000 relative px-5 py-6 w-full flex flex-col col-span-2'
          style={{
            height: SCRIPT_HEIGHT.MIN
          }}
        >
          <Script
            videoRef={videoRef}
            videoProgress={videoProgress}
            setVideoProgress={setVideoProgress}
            selectedSentence={scriptData}
            videoLink={videoLink}
            handleFocusAreaChange={handleFocusAreaChange}
            onRemove={onRemoveChartFromFocusArea}
          />
        </div>
      </div>

      {/* Generated Prompts */}
      <GeneratedPrompts />

      {/* Lesosn Analytics */}
      <LessonAnalytics
        analytics={analytics}
        focusAreas={focusAreas}
        handleFocusAreaChange={handleFocusAreaChange}
        onRemove={onRemoveChartFromFocusArea}
      />

      {/* Focus Area */}
      <FocusArea
        videoLink={videoLink}
        handleFocusAreaChange={handleFocusAreaChange}
      />
    </div>
  );
};

export default EvaluationLesson;
