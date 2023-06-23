import { classNames } from '.';
import { ButtonColor, ButtonSize, ButtonVariant } from '../types';

export const getButtonStyle = ({
  size = ButtonSize.MEDIUM,
  color = ButtonColor.PRIMARY,
  variant = ButtonVariant.POLYGON,
  className = 'p-3'
}: {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  className?: string;
}) => {
  return classNames(
    color === ButtonColor.DEFAULT ? '' : '',
    color === ButtonColor.PRIMARY
      ? 'shadow-sm border-transparent text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-100'
      : '',
    color === ButtonColor.SECONDARY
      ? 'border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white'
      : '',
    color === ButtonColor.DANGER
      ? 'border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white'
      : '',
    color === ButtonColor.WARNING
      ? 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
      : '',
    variant === ButtonVariant.DEFAULT ? '' : '',
    variant === ButtonVariant.POLYGON ? 'rounded-md' : '',
    variant === ButtonVariant.CIRCULAR ? 'rounded-full' : '',
    size === ButtonSize.SMALL ? 'w-24' : '',
    size === ButtonSize.MEDIUM ? 'w-36' : '',
    size === ButtonSize.LARGE ? 'w-44' : '',
    size === ButtonSize.FULL ? 'w-full' : '',
    `text-center inline-flex items-center font-medium disabled:cursor-not-allowed disabled:bg-slate-500 ${className}`
  );
};
