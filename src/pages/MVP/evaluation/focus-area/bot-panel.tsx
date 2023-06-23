import { Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import BotImage from 'Assets/little-bot.png';

import { classNames } from '../../../../utils';

interface BotPanelProps {
  direction?: 'normal' | 'reverse';
  text: string;
  variant: 'success' | 'warning' | 'critical' | 'info';
  onRemove: () => void;
  onChange: (value: string) => void;
}

const BotPanel: FC<BotPanelProps> = ({
  direction = 'normal',
  text,
  variant,
  onRemove,
  onChange
}) => {
  const [mode, setMode] = useState('view');
  const [content, setContent] = useState(text);

  const onChangeContent = (e: React.FormEvent<HTMLDivElement>) => {
    setContent(e.currentTarget.innerHTML);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setMode('view');
      onChange(content);
    }
  };

  return (
    <div
      className={classNames(
        'gap-2 w-full rounded-lg flex p-6 items-center cursor-pointer',
        direction === 'reverse' ? 'flex-row-reverse' : '',
        `bg-${variant}-200`
      )}
      role='presentation'
      onClick={() => {
        setMode('edit');
      }}
    >
      <div
        className='text-neutral-600 flex-1 break-normal'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: text
        }}
        contentEditable={mode !== 'view'}
        onKeyDown={onKeyDown}
        role='presentation'
        onInput={onChangeContent}
      />
      <img src={BotImage} alt='BOT' />
      <button onClick={onRemove}>
        <Close />
      </button>
    </div>
  );
};

BotPanel.defaultProps = {
  direction: 'normal'
};

export default BotPanel;
