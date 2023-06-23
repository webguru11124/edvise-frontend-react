import { FC, useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Search } from '@mui/icons-material';
import useGlobalStore from 'State/store';

import { Filter, Message } from 'Components/Icons';

import {
  Sentence,
  ScriptState,
  ExtendedSentence,
  OnProgressProps,
  DataProps,
  TimeLineItem
} from '../evaluation.interface';

import ScriptDetail from './script-detail';
import Stepper, { StepperSkeleton } from './stepper-flat';
import FilterPopover from './filter-popover';
import { speakerOptions, filterblooms, speakers } from '../utils';
import NoteModal from './note-modal';
import Select, { IOption } from '../../../../elements/Select';
import { IFocusAreaOption } from '../common/add-to-focus-area';
import {
  FocusArea as IFocusArea,
  MomentType
} from '../../../../__generated/graphql';

// type ViewMode = 'NotesOnly' | 'All';

export interface ScriptProps {
  videoRef: any;
  videoProgress: OnProgressProps;
  selectedSentence: DataProps;
  setVideoProgress: (progress: OnProgressProps) => void;
  videoLink: string;
  handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
  onRemove: (values: Array<IFocusAreaOption>, id: number) => void;
}

const StepperSkeletons = () => {
  const skeletons: JSX.Element[] = [];
  for (let i = 0; i < 10; ++i) {
    skeletons.push(<StepperSkeleton />);
  }
  return <>{skeletons}</>;
};

const Script: FC<ScriptProps> = ({
  videoRef,
  selectedSentence,
  handleFocusAreaChange,
  onRemove
}) => {
  const [
    setCurrentTranscriptMoment,
    setCurrentTranscriptNote,
    setCurrentMomentType,
    timelineItems,
    setCurrentMoment,
    isEvaluationLoading
  ] = useGlobalStore((state) => [
    state.setCurrentTranscriptMoment,
    state.setCurrentTranscriptNote,
    state.setCurrentMomentType,
    state.timelineItems,
    state.setCurrentMoment,
    state.isEvaluationLoading
  ]);
  const [focusAreas] = useGlobalStore((state) => [state.focusAreas]);

  const selectedSentences = selectedSentence ? selectedSentence.sentences : [];

  // const timeArray = selectedSentences.map(
  //   (sentence: Sentence) => sentence.start
  // );

  // const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  // const [viewMode, setViewMode] = useState<ViewMode>('All');

  // useEffect(() => {
  //   const elemIndexReversed = timeArray
  //     .slice()
  //     .reverse()
  //     .findIndex((e: number) => e < videoProgress.playedSeconds);
  //   const elemIndex =
  //     elemIndexReversed !== -1 ? timeArray.length - elemIndexReversed : 0;

  //   setCurrentScrollPosition(elemIndex);
  // }, [setCurrentScrollPosition]);

  const tabs = [
    { id: 'paragraph', label: 'paragraph' },
    { id: 'sentences', label: 'sentences' }
  ];

  const [tab, setTab] = useState(tabs[0]);

  const initialFilters = {
    filterBySpeaker: speakerOptions[0],
    filterByCategory: filterblooms[0],
    showOnlyQuestion: { id: false, display: true },
    ShowOnlyOATR: { id: false, display: true },
    ShowOnlyOWN: { id: false, display: true },
    ShowOnlyNotes: { id: false, display: true }
  };

  const initialState: ScriptState = {
    transcriptViewOpen: false,
    transcripts: selectedSentences,
    selectedtranscript: null,
    searchkey: '',
    filters: initialFilters,
    noteViewOpen: false
  };

  const [state, setState] = useState(initialState);

  const handleLessonTranscriptView = () => {
    setState((prevState) => {
      return {
        ...prevState,
        transcriptViewOpen: !prevState.transcriptViewOpen
      };
    });
  };

  const onNoteViewClose = () => {
    setState((prevState) => {
      return {
        ...prevState,
        noteViewOpen: false
      };
    });
  };

  const handleTranscriptChange = (transcript: ExtendedSentence) => {
    const currentstate = { ...state };
    if (!currentstate.transcripts) return;
    const index = currentstate.transcripts.findIndex(
      (t: ExtendedSentence) => t.id === transcript.id
    );
    currentstate.transcripts[index] = transcript;
    setState(currentstate);
  };

  const mergeSpeakerSentences = (): Array<Sentence> => {
    const filteredArray: Array<Sentence> = [];
    let index = 0;
    const sentences = JSON.parse(JSON.stringify(selectedSentences));
    const sentencesLength = sentences.length;

    while (index < sentencesLength) {
      const currentSentence = sentences[index];
      currentSentence.bloomslist = {};
      currentSentence.bloomslist[currentSentence.blooms_custom.class] = 1;
      for (let j = index + 1; j < sentencesLength; j++) {
        const nextSentence = sentences[j];
        if (currentSentence.speaker === nextSentence.speaker) {
          currentSentence.text += nextSentence.text;
          currentSentence.start = nextSentence.start;
          if (
            currentSentence.bloomslist[nextSentence.blooms_custom.class] ===
            undefined
          ) {
            currentSentence.bloomslist[nextSentence.blooms_custom.class] = 1;
          } else {
            currentSentence.bloomslist[nextSentence.blooms_custom.class]++;
          }
          index = j;
        } else {
          index = j;
          break;
        }
      }
      filteredArray.push(currentSentence);
      if (index === sentencesLength - 1) {
        return filteredArray;
      }
    }

    return filteredArray;
  };

  const onChangeTab = (t: IOption) => {
    const currentstate = { ...state };
    if (t.id === 'paragraph') {
      currentstate.transcripts = mergeSpeakerSentences();
    } else {
      currentstate.transcripts = selectedSentences;
    }
    setState(currentstate);
    setTab(t);
  };

  const {
    searchkey,
    transcriptViewOpen,
    selectedtranscript,
    filters,
    noteViewOpen
  } = state;

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const currentstate = { ...state };
    if (value === '') {
      currentstate.transcripts = selectedSentences;
    } else {
      const filter = selectedSentences.filter((sentence: Sentence) =>
        sentence.text.toLowerCase().includes(value.toLowerCase())
      );
      currentstate.transcripts = filter;
    }
    currentstate.searchkey = value;
    setState(currentstate);
  };

  const onSelectStepper = (timelineItem: TimeLineItem) => {
    if (timelineItem.type === 'moment') {
      setCurrentMomentType(MomentType.Transcript);
      setCurrentTranscriptMoment(timelineItem.item);
      setCurrentMoment(timelineItem.moment);
    }
    if (timelineItem.type === 'videonote') {
      setCurrentTranscriptNote(timelineItem.item);
    }

    setState((prevState) => {
      if (timelineItem.type === 'videonote')
        return {
          ...prevState,
          noteViewOpen: !prevState.noteViewOpen
        };
      return {
        ...prevState,
        transcriptViewOpen: !prevState.transcriptViewOpen
      };
    });
  };

  const applyFilters = () => {
    const currentstate = { ...state };
    let filteredTranscripts = selectedSentences;
    if (currentstate.filters.ShowOnlyOATR.id) {
      filteredTranscripts = [];
    }

    if (currentstate.filters.filterBySpeaker.id !== 'all') {
      filteredTranscripts = filteredTranscripts.filter(
        (transcript: Sentence) =>
          speakers[transcript.speaker] ===
          currentstate.filters.filterBySpeaker.id
      );
    }
    if (currentstate.filters.filterByCategory.id !== 'all') {
      filteredTranscripts = filteredTranscripts.filter(
        (transcript: Sentence) =>
          transcript.blooms_custom.class.toLowerCase() ===
          currentstate.filters.filterByCategory.id.toLowerCase()
      );
    }
    if (currentstate.filters.showOnlyQuestion.id) {
      filteredTranscripts = filteredTranscripts.filter(
        (transcript: Sentence) => transcript.question
      );
    }
    // setViewMode(currentstate.filters.ShowOnlyNotes.id ? 'NotesOnly' : 'All');
    currentstate.transcripts = filteredTranscripts;
    setState(currentstate);
  };

  const handleFilterChange = (
    value: { id: string; label: string } | { id: boolean; display: boolean },
    name: string
  ) => {
    const currentstate = { ...state };
    currentstate.filters[name] = value;
    setState(currentstate);
  };

  const resetFilters = () => {
    const currentstate = { ...state };
    currentstate.filters = initialFilters;
    setState(currentstate);
  };

  const removeFromFocusArea = (values: IFocusAreaOption[]) => {
    if (selectedtranscript?.id) onRemove(values, selectedtranscript?.id);
  };

  return (
    <>
      <div className='flex flex-col border-neutral-200 pb-1'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <Message />
            <h3 className='text-xl font-bold text-neutral-800 ml-2 font-manrope'>
              Transcript
            </h3>
          </div>

          <button className='bg-transparent'>
            <Popover className='relative'>
              <Popover.Button className='outline-none active:bg-neutral-400 p-2'>
                <button
                  onClick={() => {
                    return applyFilters();
                  }}
                >
                  <Filter />
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
                <Popover.Panel className='absolute right-0 top-0 z-10 mt-8 w-96 px-4 sm:px-0'>
                  {({ close }) => (
                    <FilterPopover
                      filters={filters}
                      handleFilterChange={handleFilterChange}
                      resetFilters={resetFilters}
                      applyFilters={applyFilters}
                      close={close}
                    />
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          </button>
        </div>
      </div>
      <div className='relative my-5 w-full flex gap-3'>
        <div className='w-[70%] flex items-center border border-slate-200 text-gray-900 rounded-lg bg-slate-50'>
          <div className='px-4 overflow-hidden'>
            <Search />
          </div>
          <input
            className='w-full focus:ring-blue-500 focus:border-blue-500 py-2 outline-none bg-transparent'
            placeholder='Search'
            value={searchkey}
            onChange={onSearch}
          />
        </div>
        <div className='w-[30%]'>
          <Select
            options={tabs}
            value={tab}
            onChange={onChangeTab}
            className='h-full bg-slate-50 border-slate-200'
          />
        </div>
      </div>
      <div className='overflow-auto scrollbar-hide h-full bg-slate-50 rounded-xl relative'>
        <div className='my-2 overflow-hidden px-7 py-7'>
          {/* {transcripts &&
            transcripts.length > 0 &&
            transcripts.map((transcript: any, i: number) => {
              return (
                <div>
                  {viewMode === 'All' && (
                    <Stepper
                      key={`transcript ${i}`}
                      isNote={false}
                      tab={tab.label}
                      transcript={transcript}
                      videoRef={videoRef}
                      isActive={currentScrollPosition === i + 1}
                      onSelect={onSelectStepper}
                    />
                  )}
                  {transcript.notes && (
                    <Stepper
                      isNote
                      key={`notes ${i}`}
                      
                      videoRef={videoRef}
                      tab={tab.label}
                      transcript={transcript}
                      onSelect={onSelectStepper}
                    />
                  )}
                </div>
              );
            })} */}
          {isEvaluationLoading ? (
            <StepperSkeletons />
          ) : (
            timelineItems.map((t: TimeLineItem) => {
              return (
                <Stepper
                  videoRef={videoRef}
                  key={t.item.id}
                  timelineItem={t}
                  isActive={false}
                  onSelect={onSelectStepper}
                  tab={tab.label}
                />
              );
            })
          )}
        </div>
        <div className='w-full sticky bottom-0 h-[100px] left-0 bg-gradient-to-t from-slate-100' />
      </div>
      <ScriptDetail
        handleClose={handleLessonTranscriptView}
        disableTags={tab.label !== 'sentences'}
        handleTranscriptChange={handleTranscriptChange}
        isOpen={transcriptViewOpen}
        focusAreas={focusAreas}
        handleFocusAreaChange={handleFocusAreaChange}
        onRemove={removeFromFocusArea}
      />

      <NoteModal isOpen={noteViewOpen} handleClose={onNoteViewClose} />
    </>
  );
};

export default Script;
