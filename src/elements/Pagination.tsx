import { classNames } from '../utils';

export type PaginationProps = {
  totalPages: number;
  current: {
    first: number;
    offset: number;
  };
  setPage: React.Dispatch<
    React.SetStateAction<{
      first: number;
      offset: number;
    }>
  >;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  current: page,
  setPage
}) => {
  const handleClick = (value: number) => {
    setPage?.((prev) => ({ ...prev, offset: prev.first * (value - 1) }));
  };

  const handlePrevious = () => {
    if (page.offset / page.first + 1 <= 1) return;
    setPage?.((prev) => ({ ...prev, offset: prev.offset - prev.first }));
  };

  const handleNext = () => {
    if (page.offset / page.first + 1 >= totalPages) return;
    setPage?.((prev) => ({ ...prev, offset: prev.offset + prev.first }));
  };

  const pages = [...new Array(totalPages)].map((_, idx) => ({ id: idx + 1 }));

  const range =
    totalPages < 6
      ? pages
      : page.offset / page.first + 1 < 4
      ? pages.slice(0, 3)
      : page.offset / page.first + 1 > totalPages - 2
      ? pages.slice(totalPages - 3)
      : pages.slice(
          page.offset / page.first + 1 - 3,
          page.offset / page.first + 1
        );
  const showLast = page.offset / page.first + 1 <= totalPages - 2;
  const showFirst = !showLast;

  return (
    <div className='flex gap-5 justify-center mt-10 mb-20'>
      <button
        onClick={handlePrevious}
        className={classNames(
          'text-gray-600 bg-white shadow rounded-md w-20',
          page.offset / page.first + 1 <= 1
            ? 'text-gray-300 cursor-default'
            : ''
        )}
      >
        Previous
      </button>
      {showFirst && totalPages > 5 && (
        <>
          <button
            onClick={() => handleClick(1)}
            className={classNames(
              Math.floor(page.offset / page.first + 1) === 1
                ? 'bg-blue-500 text-white'
                : 'shadow',
              'shadow h-8 w-8 rounded-md'
            )}
          >
            {1}
          </button>
          <span className='border h-8 w-8 rounded-md text-center'>...</span>
        </>
      )}

      {range?.map(({ id }) => {
        return (
          <button
            onClick={() => handleClick(id)}
            className={classNames(
              id === Math.floor(page.offset / page.first + 1)
                ? 'bg-blue-500 text-white'
                : 'shadow',
              'h-8 w-8 rounded-md'
            )}
          >
            {id}
          </button>
        );
      })}

      {showLast && totalPages > 5 && (
        <>
          <span className='border h-8 w-8 rounded-md text-center'>...</span>
          <button
            onClick={() => handleClick(totalPages)}
            className={classNames(
              totalPages === page.offset / page.first + 1
                ? 'bg-blue-500 text-white'
                : 'shadow',
              'shadow h-8 w-8  rounded-md'
            )}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={handleNext}
        className={classNames(
          'text-gray-600 bg-white shadow rounded-md w-20',
          page.offset / page.first + 1 >= totalPages
            ? 'text-gray-300 cursor-default'
            : ''
        )}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
