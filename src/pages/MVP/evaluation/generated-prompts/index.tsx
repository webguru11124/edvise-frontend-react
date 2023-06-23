import { Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import useGlobalStore from 'State/store';

import { SideModal } from '../../../../components/SideModal';
import { SwipePanel } from '../../../../components/SwipePanel';
import { GeneratedPrompt } from '../../../../__generated/graphql';
import Prompt from './prompt';

const GeneratedPrompts: FC = () => {
  const [isSideModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentPrompt, setCurrentPrompt] = useState<GeneratedPrompt | null>(
    null
  );

  const gemeratedPrompts = useGlobalStore((state) => state.generatedPrompts);

  const onClickPrompt = (prompt: GeneratedPrompt) => {
    setCurrentPrompt(prompt);
    setModalOpen(true);
  };

  const onCloseSideModal = () => {
    setModalOpen(false);
  };

  function truncate(str: string, n: number, useWordBoundary = true) {
    if (str.length <= n) {
      return str;
    }
    const subString = str.slice(0, n - 1);
    return `${
      useWordBoundary
        ? subString.slice(0, subString.lastIndexOf(' '))
        : subString
    }...`;
  }

  return (
    <div className='w-full mt-6'>
      <div className='flex items-center'>
        <h3 className='text-3xl font-bold text-neutral-800'>
          Generated Prompts
        </h3>
      </div>

      <div className='mt-6'>
        <SwipePanel>
          {gemeratedPrompts.map((prompt, index) => (
            <div className='min-w-[35%] w-[35%] mr-5' key={`Prompt ${index}`}>
              <Prompt
                variant='success'
                title={prompt.title}
                content={truncate(prompt.content, 350)}
                onClick={() => {
                  onClickPrompt(prompt);
                }}
              />
            </div>
          ))}
        </SwipePanel>
      </div>

      {/* Side Modal */}
      <SideModal isOpen={isSideModalOpen} onClose={onCloseSideModal}>
        <div className='px-12 py-8 min-w-[600px] w-[600px]'>
          <div className='flex items-center pb-4 border-b border-neutral-200'>
            <h3 className='text-xl'>{currentPrompt?.title}</h3>
            <div className='ml-auto'>
              <button
                className='text-neutral-500 hover:text-neutral-600 active:text-neutral-500 outline-none'
                onClick={onCloseSideModal}
              >
                <Close />
              </button>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-neutral-900 text-2xl font-bold'>
              {currentPrompt?.title}
            </h3>
            <div className='mt-4 text-neutral-500 text-xl whitespace-pre-wrap'>
              {currentPrompt?.content}
            </div>
          </div>
        </div>
      </SideModal>
    </div>
  );
};

export default GeneratedPrompts;
