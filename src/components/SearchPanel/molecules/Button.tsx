import { getButtonStyle } from '../helpers';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={getButtonStyle({ size, color, variant, className })}
      {...props}
    >
      <span className='sr-only'>{children}</span>
      {children}
    </button>
  );
};

export default Button;
