import React, { FC } from 'react';

export interface TextDetailedProps {
  text: string;
  detail: string;
  textClasses?: string;
  detailClasses?: string;
}

const TextDetailed: FC<TextDetailedProps> = ({
  text,
  detail,
  textClasses = '',
  detailClasses = ''
}) => {
  return (
    <div>
      <p
        className={`text-secondary-900 overflow-hidden truncate font-semibold text-base ${textClasses}`}
      >
        {text}
      </p>
      <p
        className={`text-neutral-500 overflow-hidden truncate font-normal text-xs ${detailClasses}`}
      >
        {detail}
      </p>
    </div>
  );
};

TextDetailed.defaultProps = {
  textClasses: '',
  detailClasses: ''
};

export default TextDetailed;
