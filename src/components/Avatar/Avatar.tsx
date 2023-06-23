import React, { FC } from 'react';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'small' | 'medium' | 'big';
  shape?: 'round' | 'square';
  url: string;
}

const SIZE_CLASSES = {
  small: 'w-9', // closest to 35px
  medium: 'w-12', // closest to 50px
  big: 'w-20'
};

const SHAPE_CLASSES = {
  round: 'rounded-full',
  square: 'rounded-md'
};

const Avatar: FC<AvatarProps> = ({
  // deprecated defaultProps https://github.com/jsx-eslint/eslint-plugin-react/issues/2396
  size = 'medium',
  shape = 'round',
  alt = '',
  url,
  ...props
}) => {
  const avatarSize = SIZE_CLASSES[size] || SIZE_CLASSES.medium;
  const avatarShape = SHAPE_CLASSES[shape] || SHAPE_CLASSES.round;

  return (
    <img
      src={url}
      alt={alt}
      className={`object-center ${avatarSize} ${avatarShape}`}
      {...props}
    />
  );
};

Avatar.defaultProps = {
  size: 'small',
  shape: 'round'
};

export default Avatar;
