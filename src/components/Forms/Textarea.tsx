import { FC } from 'react';
import { classNames } from 'Utils/index';

interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={classNames(
        className!,
        'border focus:ring-transparent border-slate-300 rounded-2xl transition px-4 py-3.5 text-slate-800 focus:border-slate-500 outline-none w-full'
      )}
    />
  );
};

export default Input;
