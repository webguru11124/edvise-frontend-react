import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LessonCardProps } from 'Elements/LessonCard';
import { GLOBAL_STORE } from '../utils/constants';
import {
  FocusArea,
  GeneratedPrompt,
  Moment,
  MomentType,
  TranscriptMoment,
  UsersQuery,
  User,
  Rubric,
  VideoNote
} from '../__generated/graphql';
import { TimeLineItem } from '../pages/MVP/evaluation/evaluation.interface';

interface GlobalStoreInterface {
  users: User[] | null;
  setUsers: (users: User[]) => void;

  focusAreas: FocusArea[];
  setFocusAreas: (focusAreas: FocusArea[]) => void;

  currentTranscriptMoment: TranscriptMoment | null;
  setCurrentTranscriptMoment: (moment: TranscriptMoment) => void;

  currentTranscriptNote: VideoNote | null;
  setCurrentTranscriptNote: (note: VideoNote) => void;

  currentMomentType: MomentType;
  setCurrentMomentType: (type: MomentType) => void;

  timelineItems: TimeLineItem[];
  setTimeLineItems: (items: TimeLineItem[]) => void;

  observationId: number;
  setObservationId: (id: number) => void;

  generatedPrompts: GeneratedPrompt[];
  setGeneratedprompts: (prompts: GeneratedPrompt[]) => void;

  lessons: LessonCardProps[] | null;
  setLessons: (lessons: LessonCardProps[]) => void;

  rubricId: number;
  setRubricId: (rubricId: number) => void;

  videoLink: string;
  setVideoLink: (videoLink: string) => void;

  allUsers: UsersQuery['users'][] | null;
  setAllUsers: (allUsers: UsersQuery['users']) => void;

  currentMoment: Moment;
  setCurrentMoment: (currentMoment: Moment) => void;

  rubrics: Rubric[];
  setRubrics: (rubrics: Rubric[]) => void;

  isEvaluationLoading: boolean;
  setEvaluationLoading: (isEvaluationLoading: boolean) => void;
}

const globalStore = (set: any) => ({
  users: null,
  setUsers: (users: User[]) => {
    set({ users });
  },

  /* Related to Focus Area */
  focusAreas: [],
  setFocusAreas: (focusAreas: FocusArea[]) => {
    set({ focusAreas });
  },

  focusAreaNotes: [],
  setFocusAreaNotes: (focusAreaNotes: FocusArea[]) => {
    set({ focusAreaNotes });
  },

  currentMomentType: MomentType.Transcript,
  setCurrentMomentType: (type: MomentType) => {
    set({ currentMomentType: type });
  },

  currentTranscriptMoment: null,
  setCurrentTranscriptMoment: (moment: TranscriptMoment) => {
    set({ currentTranscriptMoment: moment });
  },

  currentTranscriptNote: null,
  setCurrentTranscriptNote: (note: VideoNote) => {
    set({ currentTranscriptNote: note });
  },

  timelineItems: [],
  setTimeLineItems: (items: TimeLineItem[]) => {
    items.sort((a, b) => {
      let aStart = 0;
      let bStart = 0;
      if (a.type === 'moment') aStart = a.item.startTime;
      if (a.type === 'videonote') aStart = a.item.timestamp;
      if (b.type === 'moment') bStart = b.item.startTime;
      if (b.type === 'videonote') bStart = b.item.timestamp;
      if (aStart === bStart) {
        if (a.type === b.type) return a.item.id > b.item.id ? 1 : -1;
        return a.type === 'moment' ? 1 : -1;
      }
      return aStart > bStart ? 1 : -1;
    });
    set({ timelineItems: items });
  },

  observationId: 8,
  setObservationId: (id: number) => {
    set({ observationId: id });
  },

  generatedPrompts: [],
  setGeneratedprompts: (prompts: GeneratedPrompt[]) => {
    set({ generatedPrompts: prompts });
  },

  lessons: null,
  setLessons: (lessons: LessonCardProps[]) => {
    set({ lessons });
  },

  rubricId: 0,
  setRubricId: (rubricId: number) => {
    set({ rubricId });
  },

  videoLink: 'https://www.youtube.com/watch?v=T4t5T5YgM3A',
  // videoLink: 'http://localhost:3001/sample.mp4',
  setVideoLink: (videoLink: string) => {
    set({ videoLink });
  },

  allUsers: null,
  setAllUsers: (allUsers: UsersQuery['users'][]) => {
    set({ allUsers });
  },

  currentMoment: null,
  setCurrentMoment: (currentMoment: Moment) => {
    set({ currentMoment });
  },

  rubrics: [],
  setRubrics: (rubrics: Rubric[]) => {
    set({ rubrics });
  },

  isEvaluationLoading: true,
  setEvaluationLoading: (isEvaluationLoading: boolean) => {
    set({ isEvaluationLoading });
  }
});

const persistedGlobalStore: any = persist(globalStore, { name: GLOBAL_STORE });

const useGlobalStore = create<GlobalStoreInterface>(persistedGlobalStore);

export default useGlobalStore;
