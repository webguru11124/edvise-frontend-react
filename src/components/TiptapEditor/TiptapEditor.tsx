import { FC, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { Extension } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import './index.css';

import Toolbar from './Toolbar';
import { classNames } from '../../utils';

export interface TiptapProps {
  onReturn?: () => void;
  onChange?: (value: string) => void;
  value?: string;
  scrollable?: boolean;
  enterAcceptable?: boolean;
}

const Tiptap: FC<TiptapProps> = ({
  onReturn,
  onChange,
  value,
  scrollable,
  enterAcceptable
}) => {
  const DisableEnter = Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: () => !enterAcceptable!
      };
    }
  });

  const contentEditor = useEditor({
    extensions: [StarterKit, DisableEnter],
    content: value,
    onUpdate: ({ editor }) => {
      if (onChange) onChange(editor?.getHTML());
    }
  });

  useEffect(() => {
    contentEditor?.commands.setContent(value || '');
  }, [value]);

  useEffect(() => {
    contentEditor?.commands.focus('end');
  }, [contentEditor]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && onReturn) {
      e.preventDefault();
      e.stopPropagation();
      onReturn();
    }
  };

  return (
    <div className='overflow-hidden rounded-lg bg-slate-50'>
      <Toolbar editor={contentEditor} />
      <EditorContent
        height={130}
        editor={contentEditor}
        className={classNames(
          'px-5 py-3 focus:outline-none',
          scrollable ? 'scrollable-tiptap' : ''
        )}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

Tiptap.defaultProps = {
  onReturn: () => {
    /* */
  },
  onChange: () => {
    /* */
  },
  value: '',
  scrollable: false,
  enterAcceptable: false
};

export default Tiptap;
