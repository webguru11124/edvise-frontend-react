import { FC, useCallback, useEffect, useState } from 'react';

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  page: number;
  setPage: (n: number) => void;
}

export interface EvaluationTableProps {
  datas: Array<any>;
  pageSize: number;
}

export type RangeContent = number | 'NextDot' | 'PrevDot';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

function getRange(
  totalCount: number,
  pageSize: number,
  page: number,
  siblingCount = 1
) {
  let rangeArr: Array<RangeContent> = [];

  const totalPageNumbers = 5 + siblingCount;

  const totalPageCount = Math.ceil(totalCount / pageSize);
  if (totalPageNumbers >= totalPageCount) {
    rangeArr = range(1, totalPageCount);
  } else {
    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      rangeArr = [...leftRange, 'NextDot', totalPageCount];
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      rangeArr = [firstPageIndex, 'PrevDot', ...rightRange];
    } else if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      rangeArr = [
        firstPageIndex,
        'PrevDot',
        ...middleRange,
        'NextDot',
        lastPageIndex
      ];
    }
  }
  return rangeArr;
}

export const TablePagination: FC<PaginationProps> = ({
  totalCount,
  pageSize,
  siblingCount,
  page,
  setPage
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const [pages, setPages] = useState<Array<RangeContent>>([]);

  useEffect(() => {
    const rangeArr = getRange(totalCount, pageSize, page, siblingCount);
    setPages([...rangeArr]);
  }, [totalCount, pageSize, page]);

  const onClickPage = (index: number) => {
    const e = pages[index];

    if (e === 'NextDot') {
      const next = pages[index - 1];
      if (typeof next === 'number') setPage(next + 1);
      return;
    } else if (e === 'PrevDot') {
      const prev = pages[index + 1];
      if (typeof prev === 'number') setPage(prev - 1);
      return;
    }
    setPage(e);
  };

  const onPrevPage = useCallback(() => {
    if (page === 1) return;
    setPage(page - 1);
  }, [page, setPage]);

  const onNextPage = useCallback(() => {
    if (page === totalPageCount) return;
    setPage(page + 1);
  }, [page, setPage]);

  return (
    <>
      <button
        className='px-3 py-2 bg-white rounded-md font-semibold disabled:text-neutral-300 text-sm'
        disabled={page === 1}
        onClick={onPrevPage}
      >
        Prev
      </button>
      {pages.map((p, index) => (
        <button
          className={`px-3 text-sm py-2 rounded-md font-semibold border border-neutral-100 w-[40px] h-[40px] ml-1 ${
            p === page ? 'bg-sky-500 text-white' : 'bg-white'
          }`}
          key={index}
          onClick={() => {
            onClickPage(index);
          }}
        >
          {typeof p === 'number' ? p : '...'}
        </button>
      ))}
      <button
        className='px-3 py-2 bg-white rounded-md font-semibold disabled:text-neutral-300 text-sm ml-1'
        disabled={page === totalPageCount}
        onClick={onNextPage}
      >
        Next
      </button>
    </>
  );
};
