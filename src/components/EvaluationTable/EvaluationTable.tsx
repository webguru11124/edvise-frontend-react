import { FC, useEffect, useState } from 'react';
import { EvaluationRow } from '../EvaluationRow';
import { MeetingStatusEnum } from '../MeetingStatus';
import { StatusEnum } from '../StatusDropdown';
import { TablePagination } from './TablePagination';

export interface EvaluationTableProps {
  datas: Array<TeacherProps>;
  pageSize: number;
}

export interface TeacherProps {
  avatar: string;
  name: string;
  code: string;
}

export const EvaluationTable: FC<EvaluationTableProps> = ({
  pageSize,
  datas
}) => {
  const totalCount = datas.length;
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState<Array<TeacherProps>>([]);

  useEffect(() => {
    setTableData([
      ...datas.filter((data, index) => {
        return index >= (page - 1) * pageSize && index < page * pageSize;
      })
    ]);
  }, [page, tableData]);

  return (
    <div className='rounded-lg overflow-hidden'>
      <table className='w-full'>
        <thead className='text-left bg-neutral-100 text-neutral-500'>
          <th className='pl-4 py-6 pr-3'>Teacher</th>
          <th className='px-3 py-6'>Evaluation Process</th>
          <th className='px-3 py-6'>Meeting</th>
          <th className='px-3 py-6'>Progress</th>
          <th className='relative whitespace-nowrap py-6 pl-3 pr-4 text-right sm:pr-6'>
            Status
          </th>
          <th className='relative whitespace-nowrap py-6 pl-3 pr-4 text-left sm:pr-6'>
            Actions
          </th>
        </thead>

        <tbody>
          {tableData.map(({ avatar, name, code }) => (
            <EvaluationRow
              teacher={{
                avatar,
                name,
                code
              }}
              evaluationProcess={{
                name: 'Probationary/Non-Tenure',
                type: 'Teacher'
              }}
              meetingStatus={MeetingStatusEnum.DISCUSSION}
              status={StatusEnum.DISCUSSION}
              progress={15}
            />
          ))}
        </tbody>
      </table>

      <div className='mt-5 flex justify-center'>
        <TablePagination
          page={page}
          totalCount={totalCount}
          pageSize={pageSize}
          siblingCount={1}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default EvaluationTable;
