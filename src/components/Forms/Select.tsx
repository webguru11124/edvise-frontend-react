import { FC } from 'react';
import { classNames } from 'Utils/index';

interface InputProps extends React.HTMLProps<HTMLSelectElement> {
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Input: FC<InputProps> = ({ className, children, ...props }) => {
  return (
    <select
      {...props}
      className={classNames(
        className!,
        'border border-slate-300 rounded-2xl transition px-4 py-3.5 text-slate-800 focus:border-slate-500 outline-none w-full'
      )}
    >
      {children}
    </select>
  );
};

export default Input;
