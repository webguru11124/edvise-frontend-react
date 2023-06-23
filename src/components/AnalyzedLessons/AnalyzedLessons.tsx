import React, { useState, useEffect, useCallback } from 'react';
import { ArrowBack, ArrowForward, Add } from '@mui/icons-material';

import { Lesson, LessonProps } from './components/Lesson';

export interface AnalyzedLessonProps {
  analyzedLessons: Array<LessonProps>;
}

const AnalyzedLessons: React.FC<AnalyzedLessonProps> = ({
  analyzedLessons
}) => {
  const [start, setStart] = useState(0);
  const [lessons, setLessons] = useState<LessonProps[]>([]);
  const displayCount = 3;

  const onBack = useCallback(() => {
    if (start <= 0) return;
    setStart(start - displayCount);
  }, [start, displayCount]);

  const onForward = useCallback(() => {
    if (start >= analyzedLessons.length - displayCount) return;
    setStart(start + displayCount);
  }, [start, displayCount, analyzedLessons.length]);

  const getLessons = useCallback(() => {
    setLessons(
      analyzedLessons.filter((data, index) => {
        return index >= start && index < start + displayCount;
      })
    );
  }, [analyzedLessons, start, displayCount]);

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  return (
    <div className='w-full'>
      <div className='flex items-center max-sm:block mb-5'>
        <h3 className='text-2xl font-semibold text-neutral-500 mr-10 mt-2'>
          Analyzed Lessons
        </h3>
        <div className='mt-2 flex justify-between items-center flex-1'>
          <div>
            <button
              type='button'
              className='text-slate-600 font-medium text-sm p-2 rounded-full border border-slate-300 mr-6'
              onClick={onBack}
            >
              <ArrowBack />
            </button>
            <button
              type='button'
              className='text-slate-600 font-medium text-sm p-2 rounded-full border border-slate-300'
              onClick={onForward}
            >
              <ArrowForward />
            </button>
          </div>
          <button className='bg-sky-500 px-6 py-2 text-white font-medium text-base rounded-2xl flex items-center ml-auto max-sm:ml-0 max-sm:rounded-full'>
            <Add />
            <span className='block m-2 max-sm:hidden text-base'>Add more</span>
          </button>
        </div>
      </div>

      <div className='flex flex-wrap -mx-2'>
        {lessons.map((lesson, index) => (
          <Lesson
            title={lesson.title}
            imageUrl={lesson.imageUrl}
            date={lesson.date}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalyzedLessons;
