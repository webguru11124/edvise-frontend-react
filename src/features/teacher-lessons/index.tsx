import { useCallback, useEffect, useState } from 'react';
import NoLessonImage from 'Assets/no-lesson-image.png';
import { BsPlusCircle } from 'react-icons/bs';
import { Button } from 'Components/Button';
import useLessons from 'Hooks/useLessons';
import RootLoader from 'Components/Loader';
import useGlobalStore from 'State/store';
import Lessons from 'Components/Lessons';
import SearchPanel from 'Components/SearchPanel';
import { LessonCardProps } from 'Elements/LessonCard';
import Pagination from 'Elements/Pagination';
import { appLinks } from 'Utils/constants';
import { useNavigate } from 'react-router-dom';

const TeacherLessons: React.FC = () => {
  const [lessons] = useGlobalStore((state) => [state.lessons]);
  const navigate = useNavigate();
  const { loadingLessons } = useLessons();

  const [page, setPage] = useState({ first: 6, offset: 0 });
  const [activeView, setActiveView] = useState('grid');
  const [searchInput, setSearchInput] = useState('');
  const [lessonsInView, setLessonsInView] = useState<LessonCardProps[] | null>(
    lessons
  );

  useEffect(() => {
    if (lessons) {
      setLessonsInView(lessons);
    }
  }, [lessons]);

  const handleSearchInput = useCallback((text: string) => {
    setSearchInput(text);
    const result = lessons?.filter(
      (lesson) =>
        lesson.name.includes(text) || lesson.teacherName.includes(text)
    );
    setLessonsInView(result || []);
  }, []);

  if (loadingLessons) {
    return <RootLoader />;
  }

  return (
    <>
      <div className='max-w-[1225px] mx-auto flex flex-col'>
        <SearchPanel
          setActiveView={setActiveView}
          activeView={activeView}
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
        {lessons?.length ? (
          <>
            <Lessons lessons={lessonsInView} viewType={activeView} />
            <Pagination
              totalPages={Math.ceil(lessons?.length || 1 / page.first)}
              current={page}
              setPage={setPage}
            />
          </>
        ) : (
          <div className='flex items-center justify-center w-full max-h-[35rem] min-h-[30rem] border border-neutral-300 rounded-2xl'>
            <div className='flex flex-col items-center'>
              <img src={NoLessonImage} alt='no lesson' />
              <p className='text-center text-3xl mb-5 font-light text-neutral-500'>
                Upload your first lesson for analysis
              </p>
              <Button
                text='Upload Lesson'
                onClick={() => navigate(appLinks.lessonUploads)}
                color='secondary'
                icon={<BsPlusCircle />}
                iconPosition='start'
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TeacherLessons;
