import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { BasicTableProps } from 'Components/BasicTable/BasicTable.interface';
import { DropdownMenu } from 'Components/DropdownMenu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function StackedList({
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

  const gridCol = `grid-cols-${
    getHeaderGroups()[0].headers.length + 1 + (options?.length ? 1 : 0)
  }`;

  const id = nanoid();
  return (
    <div>
      <div
        key={id}
        className='bg-slate-50 rounded-lg shadow-sm text-neutral-500 mb-5 p-5 overflow-auto'
      >
        {getHeaderGroups().map((headerGroup) => (
          <div
            key={headerGroup.id}
            className={`text-slate-500 grid ${gridCol} max-w-full min-w-fit text-left`}
          >
            {headerGroup.headers.map((header, headerId) => (
              <span
                className={`${headerId === 0 ? 'col-span-2' : ''}`}
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </span>
            ))}
            {options?.length ? (
              <span className='px-10 font-normal text-right text-neutral-500'>
                Action
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className='flex flex-col space-y-5'>
        {getRowModel().rows.map((row) => (
          <div
            role='row'
            key={row.id}
            className={`px-5 border-2 border-slate-200 text-left bg-white cursor-pointer hover:shadow-lg transition-shadow hover:shadow-slate-200 rounded-lg w-full align-middle grid ${gridCol}`}
            onClick={() => rowClicked && rowClicked(row.original)}
          >
            {row.getVisibleCells().map((cell, cellId) => (
              <div
                key={cell.id}
                className={`py-6 text-ellipsis whitespace-nowrap overflow-hidden text-left ${
                  cellId === 0 ? 'col-span-2' : ''
                } flex items-center h-full`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
            {options?.length && (
              <span className='px-10 flex items-center justify-end text-right py-6 text-neutral-500'>
                <DropdownMenu
                  options={options}
                  icon={<MoreHorizIcon />}
                  rowData={row.original}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
