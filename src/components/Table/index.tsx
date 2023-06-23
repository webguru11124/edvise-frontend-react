import { FC, useState, useEffect } from 'react';
import { TablePagination } from './table-pagination';

export interface Column {
  id: string;
  name: string | JSX.Element;
  render?: (data: any) => JSX.Element;
  width?: string;
  sortBy?: string;
}

export interface PaginationProps {
  pageSize: number;
}

export interface TableProps {
  data: any[];
  columns: Column[];
  pagination: PaginationProps;
}

const Table: FC<TableProps> = ({ data, columns, pagination }) => {
  const { pageSize } = pagination;
  const totalCount = data.length;
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState<Array<any>>([]);

  useEffect(() => {
    setTableData([
      ...data.filter((c, index) => {
        return index >= (page - 1) * pageSize && index < page * pageSize;
      })
    ]);
  }, [page, tableData]);

  return (
    <div className='rounded-lg overflow-hidden'>
      <table className='w-full border-separate border-spacing-y-6 -mt-6'>
        <thead className='bg-neutral-100'>
          <tr>
            {columns.map((column) => (
              <td className='pl-8 py-6 text-neutral-500'>{column.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((currentValue) => (
            <tr className='bg-white'>
              {columns.map((column) => (
                <td className='pl-8 py-6'>
                  {column.render
                    ? column.render(currentValue)
                    : currentValue[column.id]}
                </td>
              ))}
            </tr>
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

export default Table;
