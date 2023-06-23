import { FC } from 'react';
import { classNames } from 'Utils/index';

export interface ButtonGroupProps {
  buttons: Array<{
    text: string;
    active: boolean;
  }>;
  onChange: (text: string) => void;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ buttons, onChange }) => {
  return (
    <div className='bg-neutral-100 rounded-lg w-fit px-1 py-1'>
      {buttons.map((button, index) => (
        <button
          className={classNames(
            'px-3 py-2 font-semibold text-slate-500 rounded-lg',
            button.active === true ? 'bg-white' : ''
          )}
          key={index}
          onClick={() => {
            onChange(button.text);
          }}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
