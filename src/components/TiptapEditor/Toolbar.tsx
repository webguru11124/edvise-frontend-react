import { FC } from 'react';
import { Editor } from '@tiptap/react';
import { Bold, Code, Italic, Paragraph, Strike } from './Buttons';

interface ToolbarProps {
  editor: Editor | null;
}

const Divider = () => (
  <div className='border-l-neutral-300 h-6 border-l mx-5' />
);

const Toolbar: FC<ToolbarProps> = ({ editor }) => {
  if (!editor) return <></>;

  return (
    <div className='px-3 pt-2'>
      <div className='button-container bg-slate-100 px-6 py-2 rounded-lg flex items-center'>
        <Paragraph editor={editor} />
        <Divider />
        <Bold editor={editor} />
        <Italic editor={editor} />
        <Strike editor={editor} />
        <Divider />
        <Code editor={editor} />
      </div>
    </div>
  );
};

export default Toolbar;
