import { createColumnHelper } from '@tanstack/react-table';
import { LessonCardProps } from 'Elements/LessonCard';
import { useNavigate } from 'react-router';
import { transformDateCreated, transformVideoDuration } from 'Utils/index';
import { DropdownOptionTypes } from './DropdownMenu';
import CustomTable from './BasicTable';

export type LessonTableProps = {
  lessons: LessonCardProps[] | null;
  options: DropdownOptionTypes[];
};

const columnHelper = createColumnHelper<LessonCardProps>();

const lessonColumns = [
  columnHelper.accessor('name', {
    header: () => 'Title',
    cell: (info) => {
      return (
        <div className='flex flex-col' title={info.getValue()}>
          <span className='font-bold'>{info.row.original.name}</span>
          <span className='text-xs text-neutral-400'>
            {transformVideoDuration(info.row.original.videoDuration)}
          </span>
        </div>
      );
    }
  }),
  columnHelper.accessor('teacherName', {
    header: () => 'Teacher',
    cell: (info) => {
      return (
        <div className='flex gap-x-2'>
          <div className='h-[40px] w-[40px] rounded-full'>
            <img src={info.row.original.avatarUrl} alt='avatar' />
          </div>
          <div className='flex flex-col items-start'>
            <span
              className='text-ellipsis whitespace-nowrap overflow-hidden w-28'
              title={info.getValue()}
            >
              {info.renderValue()}
            </span>
            <span className='text-xs text-gray-400'>
              {info.row.original.teacherId}
            </span>
          </div>
        </div>
      );
    }
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => (
      <div className='flex items-center h-full'>
        {transformDateCreated(info.row.original.date)}
      </div>
    )
  })
];

export default function LessonTable({ lessons, options }: LessonTableProps) {
  const navigate = useNavigate();
  const rowClicked = (data: Record<string, any>) => {
    navigate(`/evaluation/${data.id}`);
  };

  return (
    <>
      <CustomTable
        data={lessons || []}
        columns={lessonColumns}
        options={options}
        rowClicked={rowClicked}
      />
    </>
  );
}
