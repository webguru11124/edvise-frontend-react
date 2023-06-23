import { ButtonColor, ButtonSize, ButtonVariant } from '../types';

export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

export const getButtonStyle = ({
  size = ButtonSize.MEDIUM,
  color,
  variant = ButtonVariant.POLYGON,
  className = ''
}: {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  className?: string;
}) => {
  return classNames(
    color === ButtonColor.PRIMARY
      ? 'shadow-sm border-transparent text-white bg-sky-400 hover:bg-sky-500 disabled:bg-sky-100'
      : '',
    color === ButtonColor.SECONDARY ? 'border border-sky-400 text-sky-400' : '',
    color === ButtonColor.DANGER ? '' : '',
    variant === ButtonVariant.POLYGON ? '' : '',
    size === ButtonSize.SMALL ? 'w-24' : '',
    size === ButtonSize.MEDIUM ? 'w-36' : '',
    size === ButtonSize.LARGE ? 'w-44' : '',
    size === ButtonSize.XLARGE ? 'p-8' : '',
    size === ButtonSize.FULL ? 'p-3 w-full' : '',
    `text-center inline-flex items-center justify-center font-medium rounded-md disabled:cursor-not-allowed disabled:bg-slate-500 ${className}`
  );
};
