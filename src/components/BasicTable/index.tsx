import { useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BasicTableProps } from './BasicTable.interface';
import { DropdownMenu } from '../DropdownMenu';

export default function CustomTable({
  data: TData,
  columns: TColumn,
  options,
  rowClicked
}: BasicTableProps) {
  const columns = useMemo(() => TColumn, [TColumn]);
  const data = useMemo(() => TData, [TData]);

  const { getRowModel, getHeaderGroups } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className='pt-10 overflow-x-auto relative'>
      <table className='w-full border-separate table-auto border-spacing-y-6 -mt-10'>
        <thead className='rounded-lg'>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='text-left bg-slate-50'>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-10 font-normal first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg text-slate-500 py-6'
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
                <th className='px-10 font-normal text-right text-slate-500 rounded-tr-lg rounded-br-lg'>
                  Action
                </th>
              ) : null}
            </tr>
          ))}
        </thead>
        <tbody>
          {!getRowModel().rows.length && (
            <tr className='absolute top-3/4 left-1/2 -translate-x-1/2'>
              No data
            </tr>
          )}
          {getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className='text-left bg-white cursor-pointer hover:shadow-lg hover:shadow-slate-200 custom-border-table transition-shadow'
              onClick={() => rowClicked && rowClicked(row.original)}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='px-10 text-left py-6 max-w-xs text-ellipsis whitespace-nowrap first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg border-y-2 border-slate-300 first:border-l-2 last:border-r-2'
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {options?.length && (
                <td className='px-10 text-right py-6 text-neutral-500 rounded-tr-lg rounded-br-lg border-slate-300 border-r-2 border-y-2'>
                  <DropdownMenu
                    options={options}
                    icon={<MoreHorizIcon />}
                    rowData={row.original}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
