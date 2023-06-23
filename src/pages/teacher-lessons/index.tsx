import TeacherLessons from 'Features/teacher-lessons';
import { LessonCardProps } from '../../elements/LessonCard';

export type TeacherLessonsProps = { lessons?: LessonCardProps[] };

const TeacherLessonsPage = () => {
  return <TeacherLessons />;
};

export default TeacherLessonsPage;
