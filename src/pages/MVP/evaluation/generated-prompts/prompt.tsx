import { FC, useState } from 'react';

import { Button } from 'Components/Button';
import Skeleton from 'Elements/Skeleton';
import { Robot, Spinner, AIBot, Bookmark } from 'Components/Icons';
import ContentWriting from 'Assets/content_writing.png';
import { PromptProps } from '../evaluation.interface';

const Prompt: FC<PromptProps> = ({ title, content, onClick }) => {
  const [loadingNote, setLoadingNote] = useState(false);
  const [isGenerated, setGenerated] = useState(false);

  const onClickGenerateContent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLoadingNote(true);
    setTimeout(() => {
      setLoadingNote(false);
      setGenerated(true);
    }, 2000);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Skeleton variant='rectangular' isLoading={false}>
      <div
        className='flex flex-col h-full transition-all w-full shadow-md rounded-2xl border border-neutral-200 px-9 py-8 bg-neutral-50 hover:shadow-xl'
        onClick={onClick}
        role='button'
      >
        <div className='flex items-center border-b border-neutral-300 pb-6'>
          <div className='flex items-center'>
            <AIBot />
            <h4 className='text-xl text-neutral-800 ml-4'>AI Suggestion</h4>
          </div>
          <div className='ml-auto'>
            <Bookmark />
          </div>
        </div>

        <div className='mt-6 flex-1'>
          <h3 className='text-2xl text-neutral-900 font-bold'>{title}</h3>
          <div className='mt-5 text-l text-neutral-600 whitespace-pre-wrap'>
            {isGenerated && content}
            <div className='flex justify-center items-center'>
              {!isGenerated && (
                <div className='pointer-events-none'>
                  <img src={ContentWriting} alt='Content Writing' />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='mt-5 flex'>
          <div className='ml-auto flex gap-2'>
            {!isGenerated && (
              <Button
                isLoading={loadingNote}
                disabled={loadingNote}
                icon={loadingNote ? <Spinner /> : <Robot />}
                text='Generate Content'
                color='secondary'
                size='sm'
                onClick={onClickGenerateContent}
              />
            )}
            {isGenerated && <Button text='Export PDF' />}
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default Prompt;
