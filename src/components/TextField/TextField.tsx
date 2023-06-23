import { FC } from 'react';

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  type: 'text' | 'password';
  placeholder: string;
}

const TextField: FC<TextFieldProps> = ({ placeholder, type, ...props }) => {
  return (
    <input
      className='transition duration-150 border border-neutral-300 bg-neutral-50 w-full px-5 py-4 rounded-lg outline-none placeholder-neutral-400 focus:border-neutral-600 focus:ring-0 focus:ring-sky-500 disabled:text-neutral-400'
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};

export default TextField;
