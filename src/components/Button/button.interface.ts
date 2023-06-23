import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'round' | 'square';
  size?: 'sm' | 'md' | 'lg';
  text: string;
  width?: 'fit-parent' | 'fit-content';
  variant: 'outline' | 'contained';
  onClick?: () => void;
  icon?: JSX.Element;
  iconPosition?: 'start' | 'end';
  color?:
    | 'sky'
    | 'critical'
    | 'neutral'
    | 'success'
    | 'info'
    | 'primary'
    | 'transparent';
}

export interface SocialButtonProps {
  type: 'Google' | 'Apple';
}
