import { FC } from 'react';
import { TranscriptMoment } from '../../../../__generated/graphql';

import { Speaker } from '../evaluation.interface';

type T = {
  [key: string]: Speaker;
};

export const speakers: T = {
  both: 'both',
  teacher: 'teacher',
  student: 'student'
};

export const questions = [
  { value: 'question', label: 'Question' },
  { value: 'statement', label: 'Statement' }
];

export interface ScriptCardProps {
  tab: string;
  moment: TranscriptMoment;
}

const ScriptCard: FC<ScriptCardProps> = ({ moment }) => {
  // const getTranscriptTags = (selectedTranscript: ExtendedSentence) => {
  //   const newtranscript = {
  //     customtags: [],
  //     text: '',
  //     edvisetag: { label: '', value: '' },
  //     selectedbloom: {
  //       id: '',
  //       label: ''
  //     },
  //     question: { value: '', label: '' },
  //     notes: '',
  //     bloomslist: undefined
  //   };

  //   newtranscript.text = selectedTranscript.text;
  //   newtranscript.selectedbloom = selectedTranscript.selectedbloom
  //     ? selectedTranscript.selectedbloom
  //     : { id: 'none', label: 'None' };
  //   newtranscript.edvisetag = {
  //     value: selectedTranscript.speaker.toLowerCase(),
  //     label: speakers[selectedTranscript.speaker.toLowerCase()]
  //   };

  //   const question = questions.find(
  //     (t) => `${t.value}` === `${transcript.question}`
  //   );

  //   if (question) newtranscript.question = question;

  //   newtranscript.notes = transcript.notes ? transcript.notes : '';
  //   return newtranscript;
  // };

  // const newTranscript = getTranscriptTags(transcript);

  return (
    <div className='px-5 pb-2 cursor-pointer'>
      <div className='flex'>
        {/* <ul className='block'>
          {newTranscript.edvisetag && (
            <li
              style={{
                backgroundColor: getColorCodes(newTranscript.edvisetag.value)
              }}
              className='float-left capitalize px-3 py-2 text-base text-white rounded-lg mr-3 mt-2'
            >
              {newTranscript.edvisetag.label}
            </li>
          )}
          {!newTranscript.bloomslist &&
            newTranscript.selectedbloom.id !== 'none' && (
              <li
                style={{
                  backgroundColor: getColorCodes(
                    newTranscript.selectedbloom.id.toLowerCase()
                  )
                }}
                className='float-left capitalize px-3 py-2 text-base text-white rounded-lg mr-3 mt-2'
              >
                {newTranscript.selectedbloom.label}
              </li>
            )}
          {newTranscript.bloomslist &&
            Object.keys(newTranscript.bloomslist).map((bloom, key) => {
              return bloom !== 'None' ? (
                <li
                  key={key}
                  style={{
                    backgroundColor: getColorCodes(bloom.toLowerCase())
                  }}
                  className='float-left capitalize px-3 py-2 text-base text-white rounded-lg mr-3 mt-2'
                >
                  {bloom}{' '}
                </li>
              ) : (
                <></>
              );
            })}
          {newTranscript.question &&
            newTranscript.question.value === 'question' && (
              <li
                style={{
                  backgroundColor: getColorCodes(newTranscript.question.label)
                }}
                className='float-left capitalize px-3 py-2 text-base text-white rounded-lg mr-3 mt-2'
              >
                {newTranscript.question.label}
              </li>
            )}
        </ul> */}
      </div>
      <div className='pt-10'>
        <div className='text-base font-bold text-neutral-600 overflow-hidden transition-all h-auto'>
          {moment.text}
        </div>
      </div>
    </div>
  );
};

export default ScriptCard;
