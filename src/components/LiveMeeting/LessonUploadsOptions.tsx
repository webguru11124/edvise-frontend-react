import LiveMeeting from 'Assets/svg/live_meeting.svg';
import PrerecordedLesson from 'Assets/svg/prerecorded_lesson.svg';
import ScheduledMeeting from 'Assets/svg/scheduled_meeting.svg';
import WrittenMaterial from 'Assets/svg/written_material.svg';
import DashboardNoSidebar from 'Components/layouts/DashboardNoSidebar';
import { useNavigate } from 'react-router-dom';
import { appLinks } from 'Utils/constants';

const uploadOptions = [
  {
    id: 1,
    title: 'Pre-Recorded Lesson',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    icon: PrerecordedLesson,
    bgColor: 'bg-green-100',
    destination: appLinks.preRecordedUploads
  },
  {
    id: 2,
    title: 'Written Material',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    icon: WrittenMaterial,
    bgColor: 'bg-amber-100',
    destination: appLinks.writtenMaterialUploads
  },
  {
    id: 3,
    title: 'Scheduled Meeting',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    icon: ScheduledMeeting,
    bgColor: 'bg-green-100',
    destination: appLinks.scheduledLessonUploads
  },
  {
    id: 4,
    title: 'Live Meeting',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    icon: LiveMeeting,
    bgColor: 'bg-red-50',
    destination: appLinks.liveLessonUploads
  }
];

export default function LessonUploadsOptions() {
  const navigate = useNavigate();

  return (
    <DashboardNoSidebar
      backLink={appLinks.lessons}
      backText='Back to Dashboard'
    >
      <div className='w-full py-4 px-8'>
        <div>
          <h2 className='text-slate-900 text-3xl mb-3'>
            What would you like to add
          </h2>
          <p className='text-slate-500'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <hr className='mt-8 mb-14' />
        <div>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {uploadOptions.map((option) => (
              <div
                className='border-slate-300 hover:border-blue-600 border p-8 rounded-2xl transition-all'
                key={option.id}
                role='button'
                onClick={() => navigate(option.destination)}
              >
                <div
                  className={`${option.bgColor} h-20 w-20 p-5 rounded-full flex justify-center items-center`}
                >
                  <img src={option.icon} alt={option.title} />
                </div>
                <div className='mt-10'>
                  <p className='text-slate-800 font-semibold text-xl mb-2'>
                    {option.title}
                  </p>
                  <p className='text-slate-500 font-medium text-base'>
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardNoSidebar>
  );
}
