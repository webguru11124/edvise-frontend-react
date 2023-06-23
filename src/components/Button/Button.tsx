import { Spinner } from 'Components/Icons';
import React, { FC } from 'react';
import { classNames } from 'Utils/index';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'round' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text: string;
  width?: 'fit-parent' | 'fit-content';
  icon?: JSX.Element | null;
  iconPosition?: 'start' | 'end';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  shape = 'round',
  width = 'fit-content',
  icon,
  iconPosition,
  size,
  className = '',
  color = 'primary',
  isLoading,
  ...props
}) => {
  const effectClass = classNames(
    color === 'primary'
      ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:text-white active:bg-blue-600 active:text-white focus:ring-blue-500  disabled:bg-blue-300 disabled:border-blue-300'
      : '',
    color === 'secondary'
      ? 'border-blue-600 text-neutral-900 hover:border-blue-700 hover:bg-blue-700 hover:text-white active:text-neutral-900 focus:ring-blue-500 disabled:opacity-50'
      : '',
    color === 'danger'
      ? 'bg-red-600 border-red-600 text-white hover:bg-red-700 hover:text-white active:bg-red-600 active:text-white focus:ring-red-500 disabled:bg-red-300 disabled:border-red-300'
      : '',
    color === 'warning'
      ? 'bg-yellow-300 border-yellow-300 text-white hover:bg-yellow-400 hover:text-white active:bg-yellow-300 active:text-white focus:ring-yellow-500 disabled:bg-warning-300 disabled:border-warning-300'
      : '',
    color === 'success'
      ? 'bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-600 hover:text-white active:bg-emerald-500 active:text-white focus:ring-emerald-500 disabled:bg-emerald-300 disabled:border-emerald-300'
      : ''
  );

  const sizeClass = classNames(
    size === 'xs' ? 'py-1 px-4' : '',
    size === 'sm' ? 'py-2 px-6' : '',
    size === 'md' ? 'py-2.5 px-6' : '',
    size === 'lg' ? 'py-3 px-8' : '',
    size === 'xl' ? 'py-3.5 px-8' : ''
  );

  const iconElem = (
    <span className={iconPosition === 'start' ? 'mr-3' : 'ml-3'}>
      {isLoading ? <Spinner /> : icon}
    </span>
  );

  return (
    <button
      type='button'
      className={classNames(
        effectClass,
        'cursor-pointer justify-center outline-none px-5 border flex items-center focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed',
        shape === 'round' ? 'rounded-md' : '',
        width === 'fit-parent' ? 'w-full' : '',
        sizeClass,
        className
      )}
      {...props}
    >
      {iconPosition === 'start' && icon && iconElem}
      {!icon && isLoading && (
        <div className='mr-3'>
          <Spinner />
        </div>
      )}
      <span>{text}</span>
      {iconPosition === 'end' && icon && iconElem}
    </button>
  );
};

Button.defaultProps = {
  shape: 'round',
  width: 'fit-content',
  size: 'md',
  color: 'primary',
  icon: null,
  iconPosition: 'start',
  isLoading: false
};

export default Button;
