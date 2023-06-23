import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PROMPT_STORE } from 'Utils/constants';
import {
  IMultiChoice,
  IQuestionAnswer,
  ITrueFalseChoice
} from 'Components/GeneratePrompt';

interface PromptStoreInterface {
  multiChoiceQuestions: IMultiChoice[];
  setMultiChoiceQuestions: (multiChoiceQuestions: IMultiChoice[]) => void;

  qaQuestions: IQuestionAnswer[];
  setQAQuestions: (qaQuestions: IQuestionAnswer[]) => void;

  tfQuestions: ITrueFalseChoice[];
  setTFQuestions: (tfQuestions: ITrueFalseChoice[]) => void;
}

const promptStore = (set: any) => ({
  multiChoiceQuestions: [],
  setMultiChoiceQuestions: (multiChoiceQuestions: IMultiChoice[]) => {
    set({ multiChoiceQuestions });
  },

  qaQuestions: [],
  setQAQuestions: (qaQuestions: IQuestionAnswer[]) => {
    set({ qaQuestions });
  },

  tfQuestions: [],
  setTFQuestions: (tfQuestions: ITrueFalseChoice[]) => {
    set({ tfQuestions });
  }
});

const persistedGlobalStore: any = persist(promptStore, { name: PROMPT_STORE });

export const usePromptStore =
  create<PromptStoreInterface>(persistedGlobalStore);
