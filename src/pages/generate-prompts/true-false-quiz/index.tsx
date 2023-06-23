import { FC, useState } from 'react';
import EditPage from './edit-page';
import GeneratePage from './generate-page';
import { PromptCommonProps } from '../generate-prompts.interface';

const TrueFalseChoiceQuiz: FC<PromptCommonProps> = ({ onBackToSelectPage }) => {
  const [step, setStep] = useState(0);
  const [questionCount, setQuestionCount] = useState(10);

  const onNext = () => {
    setStep(step + 1);
  };

  const onBack = () => {
    setStep(step - 1);
  };

  const onQuestionCountChange = (value: number) => {
    setQuestionCount(value);
  };

  return step === 0 ? (
    <GeneratePage
      onGenerate={onNext}
      onQuestionCountChange={onQuestionCountChange}
      onBack={onBackToSelectPage}
    />
  ) : (
    <EditPage onBack={onBack} count={questionCount} />
  );
};

export default TrueFalseChoiceQuiz;
