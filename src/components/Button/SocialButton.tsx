import { FC } from 'react';
import { GoogleIcon, AppleIcon } from '../Icons';

export interface SocialButtonProps {
  type: 'Google' | 'Apple';
}

const SocialButton: FC<SocialButtonProps> = ({ type }) => {
  let Icon: JSX.Element = <></>;

  if (type === 'Google') Icon = <GoogleIcon />;
  else if (type === 'Apple') Icon = <AppleIcon />;

  return (
    <button className='px-7 py-4 rounded-md border border-neutral-300 flex items-center'>
      {Icon}
      <span className='ml-3'>With {type}</span>
    </button>
  );
};

export default SocialButton;
