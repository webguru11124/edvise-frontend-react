import { ButtonProps } from '../types';
import { classNames, getButtonStyle } from '../utils';

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  variant,
  className,
  children,
  iconRight,
  ...props
}) => {
  return (
    <button
      className={getButtonStyle({ size, color, variant, className })}
      {...props}
    >
      <div
        className={classNames(
          'flex gap-x-3',
          iconRight ? 'flex-row-reverse' : ''
        )}
      >
        <span className='sr-only'>{children}</span>
        {props.icon && <props.icon />}
        {children}
      </div>
    </button>
  );
};

export default Button;
