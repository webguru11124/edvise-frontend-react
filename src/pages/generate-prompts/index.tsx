import { FC, useState } from 'react';
import {
  PromptMultiChoiceContained,
  PromptNoteContained,
  PromptQAContained,
  PromptDiscussionContained,
  PromptTrueFalseContained,
  PromptPollContained
} from 'Components/Icons';
import PromptCard, {
  PromptCardProps
} from 'Components/GeneratePrompts/PromptCard';
import LessonSummary from './lesson-summary';
import QAQuiz from './question-answer-quiz';
import MultiChoiceQuiz from './multi-choice-quiz';
import TrueFalseChoiceQuiz from './true-false-quiz';

enum PromptType {
  LESSON_SUMMARY,
  POLL,
  DISCUSSION,
  QUESTION_ANSWER,
  TRUE_FALSE,
  MULTI_CHOICE
}

const prompts: Array<PromptCardProps & { type: PromptType }> = [
  {
    title: 'Lesson Summary',
    icon: <PromptNoteContained />,
    description: 'Lorem Ipsum is simply dummy text of printing',
    type: PromptType.LESSON_SUMMARY
  },
  {
    title: 'Poll',
    icon: <PromptPollContained />,
    description: 'Lorem Ipsum is simply dummy text of printing',
    type: PromptType.POLL
  },
  {
    title: 'Discussion Prompts',
    icon: <PromptDiscussionContained />,
    description: 'Lorem Ipsum is simply dummy text of printing',
    type: PromptType.DISCUSSION
  },
  {
    title: 'Question + Answer',
    icon: <PromptQAContained />,
    description: 'Lorem Ipsum is simply dummy text of printing',
    type: PromptType.QUESTION_ANSWER
  },
  {
    title: 'True/False Quiz',
    icon: <PromptTrueFalseContained />,
    description: 'Lorem Ipsum is simply dummy text of printing',
    type: PromptType.TRUE_FALSE
  },
  {
    title: 'Multiple Choice Quiz',
    icon: <PromptMultiChoiceContained />,
    description: 'Lorem Ipsum is simply dummy text of printing',
    type: PromptType.MULTI_CHOICE
  }
];

const PromptsContainer: FC = () => {
  const [currentPrompt, setCurrentPrompt] = useState<PromptType | null>(null);

  const onBackToSelectPage = () => {
    setCurrentPrompt(null);
  };

  return (
    <div className='flex justify-center'>
      <div className='max-w-[900px]'>
        {currentPrompt === null && (
          <>
            <h3 className='font-bold text-slate-900 text-3xl xl:2xl:mt-20 lg:mt-8 md:mt-8'>
              Generate Prompts
            </h3>
            <h4 className='mt-2 text-slate-500 text-lg pb-6 mb-8 border-b border-b-neutral-200'>
              Make a unique quiz from any test, using AI
            </h4>
            <div className='w-full grid md:grid-cols-3 gap-6 sm:grid-cols-2'>
              {prompts.map(({ title, icon, description, type }) => (
                <div
                  onClick={() => {
                    setCurrentPrompt(type);
                  }}
                  role='button'
                >
                  <PromptCard
                    title={title}
                    icon={icon}
                    description={description}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {currentPrompt === PromptType.LESSON_SUMMARY && (
          <LessonSummary onBackToSelectPage={onBackToSelectPage} />
        )}
        {currentPrompt === PromptType.QUESTION_ANSWER && (
          <QAQuiz onBackToSelectPage={onBackToSelectPage} />
        )}
        {currentPrompt === PromptType.MULTI_CHOICE && (
          <MultiChoiceQuiz onBackToSelectPage={onBackToSelectPage} />
        )}
        {currentPrompt === PromptType.TRUE_FALSE && (
          <TrueFalseChoiceQuiz onBackToSelectPage={onBackToSelectPage} />
        )}
      </div>
    </div>
  );
};

export default PromptsContainer;
