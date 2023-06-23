import { FC, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useVideoNotes } from 'Hooks/useVideoNotes';
import useGlobalStore from 'State/store';

import VideoTimeline from './video-timeline';

import {
  TimeLineTypes,
  VideoPlayerProps,
  OnProgressProps
} from '../evaluation.interface';
import { getColorCodes } from '../utils';
import Note from './note';
import Select, { IOption } from '../../../../elements/Select';

const VideoPlayer: FC<VideoPlayerProps> = ({
  videoRef,
  videoProgress,
  setVideoProgress,
  selectedSentence,
  fileUrl
}) => {
  const [observationId] = useGlobalStore((store) => [store.observationId]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [duration, setDuration] = useState(0);
  const [state, setState] = useState({
    sentences: selectedSentence.sentences,
    fileurl: fileUrl
  });

  const { createVideoNote } = useVideoNotes();

  const times = {
    student_times: state.sentences.filter(
      (sentence: any) => sentence.speaker === 'student'
    ),
    teacher_times: state.sentences.filter(
      (sentence: any) => sentence.speaker === 'teacher'
    ),
    both_times: state.sentences.filter(
      (sentence: any) => sentence.speaker === 'both'
    ),
    question_times: state.sentences.filter(
      (sentence: any) => sentence.question === true
    ),
    create_times: state.sentences.filter(
      (sentence: any) => sentence.blooms_custom.class === 'Creating'
    ),
    evaluate_times: state.sentences.filter(
      (sentence: any) => sentence.blooms_custom.class === 'Evaluating'
    ),
    analyze_times: state.sentences.filter(
      (sentence: any) => sentence.blooms_custom.class === 'Analyzing'
    ),
    apply_times: state.sentences.filter(
      (sentence: any) => sentence.blooms_custom.class === 'Applying'
    ),
    remember_times: state.sentences.filter(
      (sentence: any) => sentence.blooms_custom.class === 'Remembering'
    ),
    understand_times: state.sentences.filter(
      (sentence: any) => sentence.blooms_custom.class === 'Understanding'
    )
  };

  const timeLineTypesJson: TimeLineTypes = {
    'Student-Teacher Talk': {
      timelineTypes: [
        times.student_times,
        times.teacher_times,
        times.both_times
      ],
      timelineColors: [
        'fill-rose-500 hover:fill-rose-600',
        'fill-blue-400 hover:fill-blue-500',
        'fill-purple-400 hover:fill-purple-500'
      ]
    },
    Questions: {
      timelineTypes: [times.question_times],
      timelineColors: ['fill-lime-300 hover:fill-lime-400']
    },
    Blooms: {
      timelineTypes: [
        times.create_times,
        times.evaluate_times,
        times.analyze_times,
        times.apply_times,
        times.understand_times,
        times.remember_times
      ],
      timelineColors: [
        'fill-red-600 hover:fill-red-700',
        'fill-orange-500 hover:fill-orange-600',
        'fill-yellow-200 hover:fill-yellow-300',
        'fill-green-600 hover:fill-green-700',
        'fill-blue-600 hover:fill-blue-700',
        'fill-violet-600 hover:fill-violet-700'
      ]
    }
  };

  const timelineOptions = [
    { id: '1', label: 'Student-Teacher Talk' },
    { id: '2', label: 'Questions' },
    { id: '3', label: 'Blooms' }
  ];

  const [selectedTimeline, setTimeline] = useState(timelineOptions[0]);

  // const timeArray = selectedSentence.sentences.map(
  //   (sentence: Sentence) => sentence.start
  // );

  // const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  // useEffect(() => {
  //   const elemIndexReversed = timeArray
  //     .slice()
  //     .reverse()
  //     .findIndex((e: number) => e < videoProgress.playedSeconds);
  //   const elemIndex =
  //     elemIndexReversed !== -1 ? timeArray.length - elemIndexReversed : 0;

  //   setCurrentScrollPosition(elemIndex);
  // }, [setCurrentScrollPosition]);

  const handleDuration = (t: number) => {
    setDuration(t);
  };

  const handleProgress = (progress: OnProgressProps) => {
    setVideoProgress(progress);
  };

  const handleSeekChange = (time: number) => {
    videoRef.current.seekTo(time);
  };

  const [selectedTimelineName, setSelectedTimelineName] = useState(
    'Student-Teacher Talk'
  );
  const [selectedTimelineType, setSelectedTimelineType] = useState(
    timeLineTypesJson[selectedTimelineName]
  );

  const onSubmitNote = (note: string) => {
    setIsSubmitting(true);
    createVideoNote({
      content: note,
      observation_id: observationId,
      timestamp: Math.floor(videoProgress.played * 100)
    }).then(() => {
      setIsSubmitting(false);
    });
  };

  const changeTimelineOption = (t: IOption) => {
    setTimeline(t);

    setSelectedTimelineName(t.label);
    setSelectedTimelineType(timeLineTypesJson[t.label]);
  };

  useEffect(() => {
    setState({
      sentences: selectedSentence.sentences,
      fileurl: fileUrl
    });
  }, [fileUrl, selectedSentence.sentences]);

  const { fileurl } = state;

  return (
    <>
      <div>
        <div className='rounded-lg overflow-hidden'>
          {fileurl && (
            <ReactPlayer
              url={fileurl}
              controls
              ref={videoRef}
              onDuration={handleDuration}
              onProgress={handleProgress}
              progressInterval={100}
              width='100%'
              playing
              height='350px'
            />
          )}
        </div>
        <div className='flex mt-5 mb-5'>
          <div className='w-1/3'>
            <Select
              options={timelineOptions}
              value={selectedTimeline}
              onChange={changeTimelineOption}
            />
          </div>
          <ul className='flex flex-1 justify-end'>
            {selectedTimelineName === 'Student-Teacher Talk' && (
              <>
                <li
                  style={{
                    backgroundColor: getColorCodes('student')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  Student
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('teacher')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  Teacher
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('both')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  Both
                </li>
              </>
            )}
            {selectedTimelineName === 'Questions' && (
              <>
                <li
                  style={{
                    backgroundColor: getColorCodes('question')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  Question
                </li>
              </>
            )}
            {selectedTimelineName === 'Blooms' && (
              <>
                <li
                  style={{
                    backgroundColor: getColorCodes('creating')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  creating
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('evaluating')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  evaluating
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('analyzing')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  analyzing
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('applying')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  applying
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('understanding')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  understanding
                </li>
                <li
                  style={{
                    backgroundColor: getColorCodes('remembering')
                  }}
                  className='capitalize px-4 py-2 text-white rounded-lg m-1'
                >
                  remembering
                </li>
              </>
            )}
          </ul>
        </div>
        <div className='mb-2'>
          <VideoTimeline
            videoRef={videoRef}
            timelineType={selectedTimelineType}
            duration={duration}
            progress={videoProgress}
            handleSeekChange={handleSeekChange}
          />
        </div>
      </div>
      <Note onNote={onSubmitNote} isSubmitting={isSubmitting} />
    </>
  );
};

export default VideoPlayer;
