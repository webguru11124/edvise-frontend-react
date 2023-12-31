import React, { FC, useEffect, useState } from 'react';

export interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'danger' | 'info';
  withBg?: boolean;
  lightText?: boolean;
}

const badgeClasses: Array<IBadgeClass> = [
  {
    name: 'info',
    style: 'text-blue-500',
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100'
  },
  {
    name: 'warning',
    style: 'text-yellow-500',
    bg: 'bg-yellow-500',
    bgLight: 'bg-yellow-100'
  },
  {
    name: 'danger',
    style: 'text-red-500',
    bg: 'bg-red-500',
    bgLight: 'bg-red-100'
  },
  {
    name: 'success',
    style: 'text-green-500',
    bg: 'bg-green-500',
    bgLight: 'bg-green-100'
  }
];

interface IBadgeClass {
  name: string;
  style: string;
  bg: string;
  bgLight: string;
}

const Badge: FC<BadgeProps> = ({
  text,
  variant = 'info',
  withBg = false,
  lightText = false
}) => {
  const [style, setStyle] = useState<string>('text-blue-500');

  const handleStyleChange = () => {
    // get the class object based on variant
    const styling: IBadgeClass | undefined = badgeClasses.find((classes) => {
      return classes.name === variant;
    });

    let cssStyle = styling?.style;

    // attach background styling based on prop
    if (withBg === true)
      cssStyle = `${styling?.style} ${styling?.bg} text-white`;

    // attach text styling based on prop
    if (lightText === true) cssStyle = `${styling?.style} ${styling?.bgLight}`;

    setStyle(cssStyle || '');
  };
  useEffect(() => {
    handleStyleChange();
  }, []);

  useEffect(() => {
    handleStyleChange();
  }, [variant, lightText, withBg]);

  return (
    <strong
      className={`border ${style} border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide`}
    >
      {text}
    </strong>
  );
};

Badge.defaultProps = {
  lightText: false,
  withBg: false,
  variant: 'success'
};

export default Badge;
