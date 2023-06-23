import { FC } from 'react';
// import { TranscriptMoment } from '../../../../__generated/graphql';

import { Speaker, TimeLineItem } from '../evaluation.interface';

export interface ScriptCardProps {
  tab: string;
  timelineItem: TimeLineItem;
}

const bgColors = ['#DEF7EC', '#EDEBFE', '#E1EFFE', '#FCE8F3', '#FDF6B2'];
const textColors = ['#03543F', '#5521B5', '#1E429F', '#99154B', '#723B13'];

export const getBackground = (speaker: string) =>
  bgColors[speaker.length % bgColors.length];

export const getColor = (speaker: string) =>
  textColors[speaker.length % textColors.length];

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

const ScriptCard: FC<ScriptCardProps> = ({ timelineItem }) => {
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

  if (timelineItem.type !== 'moment') return <></>;
  const { speaker, text } = timelineItem.item;

  return (
    <div className='px-5 pb-2 cursor-pointer'>
      <div className='pt-1'>
        <div className='text-base font-bold text-neutral-600 overflow-hidden transition-all h-auto'>
          {text}
        </div>
      </div>
      <div className='flex mt-4 mb-3'>
        <ul className='block'>
          <li
            style={{
              backgroundColor: getBackground(speaker),
              color: getColor(speaker)
            }}
            className='float-left capitalize px-3 py-0.5 text-sm rounded-lg mr-3 mt-2 font-semibold'
          >
            {speaker}
          </li>
        </ul>
        {/* <ul className='block'>
          {newTranscript.edvisetag && (
            <li
              style={{
                backgroundColor: getBackground(newTranscript.edvisetag.value),
                color: getColor(newTranscript.edvisetag.value)
              }}
              className='float-left capitalize px-3 py-0.5 text-sm rounded-lg mr-3 mt-2 font-semibold'
            >
              {newTranscript.edvisetag.label}
            </li>
          )}
          {!newTranscript.bloomslist &&
            newTranscript.selectedbloom.id !== 'none' && (
              <li
                style={{
                  backgroundColor: getBackground(
                    newTranscript.selectedbloom.id.toLowerCase()
                  ),
                  color: getColor(newTranscript.selectedbloom.id.toLowerCase())
                }}
                className='float-left capitalize px-3 py-0.5 text-sm rounded-lg mr-3 mt-2 font-semibold'
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
                    backgroundColor: getBackground(bloom.toLowerCase()),
                    color: getColor(bloom.toLowerCase())
                  }}
                  className='float-left capitalize px-3 py-0.5 text-sm rounded-lg mr-3 mt-2 font-semibold'
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
                  backgroundColor: getBackground(newTranscript.question.value),
                  color: getColor(newTranscript.question.value)
                }}
                className='float-left capitalize px-3 py-0.5 text-sm rounded-lg mr-3 mt-2 font-semibold'
              >
                {newTranscript.question.label}
              </li>
            )}
        </ul> */}
      </div>
    </div>
  );
};

export default ScriptCard;
