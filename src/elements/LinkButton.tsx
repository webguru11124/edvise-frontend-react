import { Link } from 'react-router-dom';
import { LinkProps } from '../types';
import { classNames } from '../utils';
import { getButtonStyle } from '../utils/getButtonStyles';

const LinkButton: React.FC<LinkProps> = ({
  to,
  external,
  size,
  color,
  variant,
  className = 'text-blue-400',
  children,
  iconRight,
  ...props
}) => {
  if (external) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noreferrer'
        className={getButtonStyle({ size, color, variant, className })}
      >
        <div
          className={classNames('flex', iconRight ? 'flex-row-reverse' : '')}
        >
          <span className='sr-only'>{children}</span>
          {props.icon && <props.icon />}
          {children}
        </div>
      </a>
    );
  }
  return (
    <Link
      to={to}
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
    </Link>
  );
};

export default LinkButton;
