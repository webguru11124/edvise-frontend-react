import { FC, useState } from 'react';

import 'react-quill/dist/quill.snow.css';
import { Button } from '../../../../components/Button';
import { TiptapEditor } from '../../../../components/TiptapEditor';
import { VideoNoteProps } from '../evaluation.interface';
import './note.css';

const VideoNote: FC<VideoNoteProps> = ({ onNote, isSubmitting }) => {
  const [note, setNote] = useState('');

  const onChangeNote = (value: string) => {
    setNote(value);
  };

  const onSubmitNote = () => {
    if (note.length) onNote(note);
    setNote('');
  };

  return (
    <div className='flex-1 flex flex-col note'>
      <TiptapEditor scrollable onChange={onChangeNote} value={note} />
      <div className='mt-4 flex gap-2 flex-wrap'>
        <Button
          text='Review'
          shape='round'
          width='fit-content'
          color='secondary'
          onClick={() => {
            // TODO: Hook up to something
            onChangeNote('This is a good part of the math lesson to review:');
          }}
        />
        <Button
          text='Great work'
          shape='round'
          width='fit-content'
          color='secondary'
          onClick={() => {
            // TODO: Hook up to something
            onChangeNote('Great work with this part of the math lesson!');
          }}
        />
        <Button
          text='Reflection'
          shape='round'
          width='fit-content'
          color='secondary'
          onClick={() => {
            // TODO: Hook up to something
            onChangeNote("Let's reflect on this part of the math lesson:");
          }}
        />
        <Button
          text='Innovative'
          shape='round'
          width='fit-content'
          color='secondary'
          onClick={() => {
            // TODO: Hook up to something
            onChangeNote('This is an innovative way to teach math:');
          }}
        />
        <Button
          text='Thoughtful'
          shape='round'
          width='fit-content'
          color='secondary'
          onClick={() => {
            // TODO: Hook up to something
            onChangeNote('This is a thoughtful way to teach math:');
          }}
        />
        <Button text='+' shape='round' width='fit-content' color='secondary' />
        <Button
          text='Submit'
          shape='round'
          width='fit-content'
          onClick={onSubmitNote}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default VideoNote;
