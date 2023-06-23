import { FC } from 'react';

export interface PromptCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const PromptCard: FC<PromptCardProps> = ({ icon, title, description }) => (
  <div
    className='bg-white border border-slate-300 w-full rounded-xl py-9 px-7 flex flex-col align-center hover:bg-neutral-100 cursor-pointer active:bg-white'
    role='button'
  >
    <div>{icon}</div>
    <h3 className='text-xl font-semibold mt-9 text-slate-800'>{title}</h3>
    <h4 className='text-base font-medium mt-3 text-slate-500'>{description}</h4>
  </div>
);

export default PromptCard;
