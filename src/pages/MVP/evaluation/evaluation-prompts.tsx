import { FC, Fragment } from 'react';
import LittleBotImage from 'Assets/little-bot.png';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from 'Utils/index';
import {
  Delete,
  MoreHoriz,
  Note,
  PictureAsPdf,
  RemoveRedEye,
  Send
} from '@mui/icons-material';
import {
  PromptCardDicussion,
  PromptCardKey,
  PromptCardNote,
  PromptCardPen,
  PromptCardQA
} from 'Components/Icons';

export interface EvaluationPromptsProps {
  prompts: Array<any>;
}

export interface PromptItemProps {
  color: 'lime' | 'skyblue' | 'yellow';
  title: string;
  content: string;
  icon: JSX.Element;
}

const PromptItem: FC<PromptItemProps> = ({ color, title, content, icon }) => (
  <div className='cols-1'>
    <div className='hover:shadow-lg cursor-pointer rounded-2xl'>
      <div
        className={classNames(
          'h-[100px] relative flex items-center pr-8 rounded-tl-2xl rounded-tr-2xl',
          `bg-${color}-100`
        )}
      >
        <div className='ml-auto'>{icon}</div>
        <div className='bg-white w-fit rounded-lg border-2 border-amber-300 absolute bottom-[-50%] left-[40px]'>
          <img src={LittleBotImage} alt='bot' />
        </div>
      </div>
      <div className='bg-neutral-50 px-10 pb-10 rounded-bl-2xl rounded-br-2xl'>
        <div className='flex pt-8'>
          {/* Todo: making reusable menu */}
          <Menu as='div' className='text-slate-500 ml-6 relative ml-auto'>
            <div>
              <Menu.Button className='flex items-center focus:outline-none hover:text-slate-700 active:text-slate-500'>
                <MoreHoriz />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-xl focus:outline-none'>
                <div className='py-5 px-4'>
                  <div className='flex text-slate-500 hover:text-slate-700 active:text-slate-500 items-center'>
                    <RemoveRedEye />
                    <h4 className='ml-3 text-sm'>Preview</h4>
                  </div>
                  <div className='flex mt-3 text-slate-500 hover:text-slate-700 active:text-slate-500 items-center'>
                    <Note />
                    <h4 className='ml-3 text-sm'>Edit</h4>
                  </div>
                  <div className='flex mt-3 text-slate-500 hover:text-slate-700 active:text-slate-500 items-center'>
                    <PictureAsPdf className='text-red-500' />
                    <h4 className='ml-3 text-sm'>Export to PDF</h4>
                  </div>
                  <div className='flex mt-3 text-slate-500 hover:text-slate-700 active:text-slate-500 items-center'>
                    <Send />
                    <h4 className='ml-3 text-sm'>Send to students</h4>
                  </div>
                  <div className='w-full border-t border-slate-200 mt-3' />
                  <div className='flex mt-3 text-red-500 hover:text-red-700 active:text-red-500 items-center'>
                    <Delete />
                    <h4 className='ml-3 text-sm'>Delete</h4>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <h3 className='font-bold text-2xl text-neutral-800 leading-10 pt-12'>
          {title}
        </h3>
        <div className='pt-2 text-lg text-slate-500 break-normal'>
          {content}
        </div>
      </div>
    </div>
  </div>
);

const EvaluationPrompts: FC<EvaluationPromptsProps> = () => {
  return (
    <div className='grid grid-cols-3 w-full px-9 py-4 gap-10'>
      <PromptItem
        color='lime'
        title='Lesson Summary'
        content='Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text'
        icon={<PromptCardNote />}
      />
      <PromptItem
        color='skyblue'
        title='Open Ended Discussion'
        content='Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text'
        icon={<PromptCardDicussion />}
      />
      <PromptItem
        color='yellow'
        title='Kep Concept'
        content='Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text'
        icon={<PromptCardKey />}
      />
      <PromptItem
        color='lime'
        title='Question & Answer'
        content='Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text'
        icon={<PromptCardQA />}
      />
      <PromptItem
        color='skyblue'
        title='Discussions Prompts'
        content='Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text'
        icon={<PromptCardPen />}
      />
      <PromptItem
        color='yellow'
        title='Quiz Choice'
        content='Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text'
        icon={<PromptCardKey />}
      />
    </div>
  );
};

export default EvaluationPrompts;
