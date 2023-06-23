import { FC } from 'react';

export interface BadgeProps {
  text: string;
  variant: 'critical' | 'primary' | 'secondary' | 'danger' | 'skyblue';
}

export const Badge: FC<BadgeProps> = ({ text, variant }) => {
  return (
    <button
      className={`px-4 py-2 bg-${variant}-100 text-${variant}-500 rounded-md`}
    >
      {text}
    </button>
  );
};
