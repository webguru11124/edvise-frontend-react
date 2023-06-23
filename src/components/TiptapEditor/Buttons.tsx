import { FC } from 'react';
import { Editor } from '@tiptap/react';
import {
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  Code as CodeIcon,
  FormatTextdirectionLToR as ParagraphIcon
} from '@mui/icons-material';

import { classNames } from '../../utils';

interface ButtonProps {
  editor: Editor;
}

export const Bold: FC<ButtonProps> = ({ editor }) => (
  <button
    onClick={() => editor.chain().focus().toggleBold().run()}
    disabled={!editor.can().chain().focus().toggleBold().run()}
    className={classNames(
      editor.isActive('bold') ? 'active' : '',
      'toolbar-button'
    )}
  >
    <FormatBold />
  </button>
);

export const Italic: FC<ButtonProps> = ({ editor }) => (
  <button
    onClick={() => editor.chain().focus().toggleItalic().run()}
    disabled={!editor.can().chain().focus().toggleItalic().run()}
    className={classNames(
      editor.isActive('italic') ? 'active' : '',
      'toolbar-button'
    )}
  >
    <FormatItalic />
  </button>
);

export const Strike: FC<ButtonProps> = ({ editor }) => (
  <button
    onClick={() => editor.chain().focus().toggleStrike().run()}
    disabled={!editor.can().chain().focus().toggleStrike().run()}
    className={classNames(
      editor.isActive('strike') ? 'active' : '',
      'toolbar-button'
    )}
  >
    <FormatStrikethrough />
  </button>
);

export const Code: FC<ButtonProps> = ({ editor }) => (
  <button
    onClick={() => editor.chain().focus().toggleCode().run()}
    disabled={!editor.can().chain().focus().toggleCode().run()}
    className={classNames(
      editor.isActive('code') ? 'active' : '',
      'toolbar-button'
    )}
  >
    <CodeIcon />
  </button>
);

export const Paragraph: FC<ButtonProps> = ({ editor }) => (
  <button
    onClick={() => editor.chain().focus().setParagraph().run()}
    className={classNames(
      editor.isActive('paragraph') ? 'active' : '',
      'toolbar-button'
    )}
  >
    <ParagraphIcon />
  </button>
);
