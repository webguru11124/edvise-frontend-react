import { useState } from 'react';
import { Modal } from 'Components/Modal';
import EditLessonModal from 'Components/Modal/components/EditLessonModal';
import LessonCard, { LessonCardProps } from '../elements/LessonCard';
import LessonTable from './LessonTable';

export type LessonsProps = {
  lessons: LessonCardProps[] | null;
  viewType?: string;
};

const Lessons: React.FC<LessonsProps> = ({ lessons, viewType }) => {
  const [editModalState, setEditModalState] = useState(false);

  const options = [
    {
      title: 'Edit',
      action: (el: any) => {
        console.log(el);
        setEditModalState(true);
      }
    },
    {
      title: 'Delete',
      action: () => {
        /* Delete Role */
      }
    }
  ];

  return (
    <>
      <div className='flex justify-center w-full'>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10'>
          {viewType === 'grid' &&
            lessons?.map((lesson) => (
              <LessonCard key={lesson.id} {...lesson} options={options} />
            ))}
        </div>
      </div>
      <div className='grid'>
        {viewType === 'list' && (
          <LessonTable lessons={lessons} options={options} />
        )}
      </div>
      <Modal isOpen={editModalState} onClose={() => setEditModalState(false)}>
        <EditLessonModal
          onClose={() => setEditModalState(false)}
          onApprove={() => setEditModalState(false)}
        />
      </Modal>
    </>
  );
};

export default Lessons;
