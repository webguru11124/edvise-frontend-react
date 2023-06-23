import { FC, useMemo } from 'react';

import { getCoreRowModel } from '@tanstack/table-core';
import { flexRender, useReactTable } from '@tanstack/react-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  PageTitleHeader,
  PageTitleHeaderProps
} from 'Components/PageTitleHeader';

import { BasicTableProps } from 'Components/BasicTable/BasicTable.interface';
import { DropdownMenu } from 'Components/DropdownMenu';

export interface TeamManagementProps
  extends PageTitleHeaderProps,
    BasicTableProps {}

const TeamManagement: FC<TeamManagementProps> = ({
  button,
  title,
  description,
  icon,
  data: TData,
  columns: TColumn,
  options
}) => {
  const columns = useMemo(() => TColumn, [TColumn]);
  const data = useMemo(() => TData, [TData]);

  const { getRowModel, getHeaderGroups } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className='mt-20'>
      <div className=''>
        <PageTitleHeader
          button={button}
          title={title}
          description={description}
          icon={icon}
        />
        <hr className='mt-8 mb-8' />
        <div className='bg-neutral-100 rounded-lg overflow-hidden pt-10'>
          <table className='w-full bg-neutral-100 border-separate border-spacing-y-6 -mt-10'>
            <thead className='bg-neutral-100'>
              {getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className='text-left text-neutral-500'>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className='px-10 font-normal text-neutral-500'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                  {options?.length ? (
                    <th className='px-10 font-normal text-right text-neutral-500'>
                      Action
                    </th>
                  ) : null}
                </tr>
              ))}
            </thead>
            <tbody>
              {getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`text-left ${
                    row.original.status === 'Pending'
                      ? 'opacity-60 bg-white'
                      : 'bg-white'
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='px-10 text-left py-6'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  {options?.length && (
                    <td className='px-10 text-right py-6 text-neutral-500'>
                      <DropdownMenu
                        options={options}
                        icon={<MoreHorizIcon />}
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
