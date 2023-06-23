import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { DropdownMenu, DropdownOptionTypes } from 'Components/DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { transformDateCreated, transformVideoDuration } from '../utils';

export type LessonCardProps = {
  id: number;
  date: string;
  name: string;
  teacherId: string;
  teacherName: string;
  thumbnailUrl: string;
  avatarUrl: string;
  videoDuration: number;
  options?: DropdownOptionTypes[];
};

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  date,
  teacherId,
  teacherName,
  name,
  thumbnailUrl,
  avatarUrl,
  videoDuration,
  options
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/evaluation/${id}`);
  };

  return (
    <button
      className='overflow-hidden rounded-xl shadow hover:shadow-xl bg-white'
      onClick={handleCardClick}
    >
      <div className='bg-gray-200 relative min-h-[200px] w-full overflow-hidden'>
        <img
          src={thumbnailUrl}
          alt={name}
          className='h-full w-full object-cover min-h-[200px]'
        />
        <span className='absolute top-0 right-0 bg-white rounded-lg px-2 mt-3 mr-3'>
          {transformVideoDuration(videoDuration)}
        </span>
      </div>
      <div className='px-3'>
        <div className='flex justify-between border-b w-full p-2'>
          <div className='flex flex-col items-start'>
            <h3
              className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap text-start w-56'
              title={name}
            >
              {name}
            </h3>
            <div className='text-sm'>
              <span className='text-gray-400'>Date: </span>
              <span>{transformDateCreated(date)}</span>
            </div>
          </div>
          <DropdownMenu
            icon={<MoreVertOutlinedIcon />}
            options={options || []}
            rowData={{ teacherId, name, teacherName }}
          />
        </div>

        <div className='flex justify-between items-center px-2 py-5'>
          <div className='flex gap-x-2'>
            <div className='h-[40px] w-[40px] rounded-full'>
              <img src={avatarUrl} alt='' />
            </div>
            <div className='flex flex-col items-start'>
              <span
                className='text-ellipsis overflow-hidden whitespace-nowrap text-start w-32'
                title={teacherName}
              >
                {teacherName}
              </span>
              <span className='text-xs text-gray-400'>{teacherId}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default LessonCard;
