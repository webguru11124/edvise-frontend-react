/*
  Todo: needs to any type to correct type after integrating the remaining part.
*/

import {
  Moment,
  TranscriptMoment,
  VideoNote
} from '../../../__generated/graphql';

export type Speaker = 'both' | 'teacher' | 'student';

export interface Sentence {
  start: number;
  end: number;
  text: string;
  speakers: Array<number>;
  question: boolean;
  speaker: Speaker;
  emotions: {
    results: {
      passion: number;
      surprise: number;
      suspense: number;
      happiness: number;
      neutral: number;
      sadness: number;
    };
    class: string;
  };
  blooms: {
    results: {
      Analyzing: number;
      Applying: number;
      Creating: number;
      Evaluating: number;
      None: number;
      Remembering: number;
      Understanding: number;
    };
    class: string;
  };
  blooms_custom: {
    results: {
      Applying: number;
      Creating: number;
      Remembering: number;
      Evaluating: number;
      Understanding: number;
      Analyzing: number;
      None: number;
    };
    class: string;
  };
  blooms_keyword: { matches: []; results: unknown };
  selectedbloom?: { id: string; label: string };
}

export interface VideoPlayerProps {
  videoRef: any;
  videoProgress: OnProgressProps;
  setVideoProgress: (progress: OnProgressProps) => void;
  selectedSentence: DataProps;
  fileUrl: string | undefined;
}

export interface Paragraph {
  sentences: Array<{
    text: string;
    start: number;
    end: number;
  }>;
  speaker: string;
  num_words: number;
  start: number;
  end: number;
  bloom: [
    {
      Analyzing: number;
      Applying: number;
      Creating: number;
      Evaluating: number;
      None: number;
      Remembering: number;
      Understanding: number;
    },
    string
  ];
}

export interface Meta {
  audio: {
    channels: number;
    sample_width: number;
    frame_rate: number;
    frame_width: number;
    frame_count: number;
    duration_seconds: number;
    type: string;
  };
  process_time: {
    speech: number;
    emotion: number;
    blooms: number;
    lda: number;
  };
}

export interface Topic {
  start: number;
  end: number;
  text: string;
  topics: Array<{
    topic: string;
    confidence: number;
  }>;
}

export interface Segment {
  summary: string;
  transcript_segment: string;
}

export interface Entity {
  value: string;
  label: string;
  start_char: number;
  end_char: number;
  source: string;
}

export interface DataProps {
  sentences: Array<ExtendedSentence>;
  transcript: {
    original: string;
    parsed: Array<{ type: string; text: string; label?: string }>;
  };
  topics: Array<Topic>;
  summaries: {
    combined: string;
    segments: Array<Segment>;
  };
  entities: Array<Entity>;
  paragraphs: {
    transcript: string;
    paragraphs: Array<Paragraph>;
  };
  lda: [];
  meta: Meta;
  wordcloud: Array<{
    text: string;
    value: number;
  }>;
  blooms_meta: any;
}

export interface TimeLineTypes {
  [key: string]: {
    timelineTypes: Array<any>;
    timelineColors: Array<any>;
  };
}

export interface VideoTimelineProps {
  videoRef: any;
  timelineType: any;
  duration: number;
  progress: OnProgressProps;
  handleSeekChange: (n: number) => void;
}

export interface DraggableRectProps {
  width: number;
  height: number;
  x: number;
  fill: string;
}

export interface EvaluationLessonProps {
  videoLink: string;
  focusArea: Array<IFocusArea>;
  analytics: Array<ChartProps>;
  scripts: DataProps;
}

export interface StepperProps {
  videoRef: any;
  isNote: boolean;
  isActive: boolean;
  tab: string;
  transcript: ExtendedSentence;
  onSelect: (transcript: ExtendedSentence, isNote: boolean) => void;
}

export interface FilterPopoverProps {
  filters: Filters;
  handleFilterChange: (
    value: { id: string; label: string } | { id: boolean; display: boolean },
    name: string
  ) => void;
  resetFilters: () => void;
  applyFilters: () => void;
  close: () => void;
}

export interface Filters {
  [key: string]: any;
  filterBySpeaker: { id: string; label: string };
  filterByCategory: { id: string; label: string };
  showOnlyQuestion: { id: boolean; display: boolean };
  ShowOnlyOATR: { id: boolean; display: boolean };
  ShowOnlyOWN: { id: boolean; display: boolean };
  ShowOnlyNotes: { id: boolean; display: boolean };
}

export interface ExtendedSentence extends Sentence {
  id?: number;
  type?: string;
  notes?: string;
}

export interface ScriptState {
  transcriptViewOpen: boolean;
  noteViewOpen: boolean;
  transcripts: Array<Sentence> | undefined;
  selectedtranscript: ExtendedSentence | null;
  searchkey: string;
  filters: Filters;
}

export interface Tag {
  value: string;
  label: string;
}
export interface CustomTagProps {
  handleCustomTags: (tags: Array<Tag>) => void;
  customtags: Array<Tag>;
}

export interface ChartProps {
  name: string;
  graphtype: string;
  options: {
    maintainAspectRatio?: boolean;
    responsive?: boolean;
    legend?: {
      display: boolean;
      position: string;
    };
    elements?: {
      arc: {
        borderWidth: number;
      };
    };
    plugins?: any;
  };
  data: {
    labels: Array<string>;
    datasets: Array<{
      data: Array<number>;
      backgroundColor: Array<string>;
      hoverBackgroundColor: Array<string>;
    }>;
  };
}

export interface PromptProps {
  variant: 'success' | 'warning' | 'critical' | 'info' | 'neutral' | 'primary';
  title: string;
  content: string;
  onClick?: () => void;
}

export interface AnalyticsChartItemProp {
  chartData: ChartProps;
  width: string;
  height: string;
}

export interface GeneratedPromptsProp {
  prompts: Array<PromptProps>;
}

export interface IFocusArea {
  id: number;
  title: string;
  data: {
    shorthand: string;
    scores: {
      [key: string]: any;
      Unsatisfactory: {
        description: string;
        examples: string;
      };
      Basic: {
        description: string;
        examples: string;
      };
      Proficient: {
        description: string;
        examples: string;
      };
      Distinguished: {
        description: string;
        examples: string;
      };
    };
    scored: boolean;
  };
  objects: Array<any>;
}

export enum POSITION {
  TOP,
  BOTTOM
}

export interface VideoNoteProps {
  onNote: (value: string) => void;
  isSubmitting: boolean;
}

export interface OnProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export type TimeLineItem =
  | { item: TranscriptMoment; type: 'moment'; momentId: number; moment: Moment }
  | { item: VideoNote; type: 'videonote'; momentId: number };
