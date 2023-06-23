import { FC } from 'react';
import { classNames } from 'Utils/index';

type SizeProps = 'fit' | 'full';

export interface SkeletonProps {
  variant?: 'rectangular' | 'text' | 'circular' | 'image' | 'chart';
  lines?: number;
  children?: React.ReactElement | React.ReactElement[];
  width?: SizeProps;
  height?: SizeProps;
  isLoading?: boolean;
}

interface BaseProps {
  children?: React.ReactElement | React.ReactElement[];
  width?: SizeProps;
  height?: SizeProps;
  isLoading?: boolean;
}

interface TextProps extends BaseProps {
  lines: number;
}

const getWHClass = (width: SizeProps, height: SizeProps) => {
  return classNames(
    width === 'fit' ? 'w-fit' : '',
    width === 'full' ? 'w-full' : '',
    height === 'fit' ? 'h-fit' : '',
    height === 'full' ? 'h-full' : ''
  );
};

const Text: FC<TextProps> = ({ lines, width }) => {
  const texts = [];
  for (let i = 0; i < lines; ++i)
    texts.push(
      <div
        className={classNames(
          'h-2 bg-gray-200 rounded-full dark:bg-gray-700',
          lines === 1 ? '' : 'mb-2'
        )}
      />
    );

  return (
    <div role='status' className='animate-pulse' style={{ width }}>
      {texts}
    </div>
  );
};

const Image: FC<BaseProps> = ({ children, isLoading }) => {
  return isLoading ? (
    <div role='status' className='animate-pulse dark:border-gray-700'>
      <div
        className={classNames(
          'h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700 relative',
          children ? 'w-fit h-fit' : 'w-full'
        )}
      >
        <div className='absolute flex items-center justify-center left-0 right-0 top-0 bottom-0'>
          <svg
            className='w-12 h-12 text-gray-200 dark:text-gray-600'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 640 512'
          >
            <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
          </svg>
        </div>
        <div className='invisible'>{children}</div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

const Rectangle: FC<BaseProps> = ({ children, isLoading, width, height }) => {
  return isLoading ? (
    <div
      role='button'
      className={classNames(
        'animate-pulse dark:border-gray-700',
        getWHClass(width!, height!)
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div
        className={classNames(
          'flex items-center justify-center bg-gray-300 rounded dark:bg-gray-700 w-full h-full'
        )}
      >
        <div className='invisible w-full h-full'>{children}</div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

const Circular: FC<BaseProps> = ({ children, isLoading }) => {
  return isLoading ? (
    <div role='status' className='animate-pulse w-fit h-fit relative'>
      <div className='bg-gray-300 rounded-full absolute top-0 bottom-0 right-0 left-0' />
      <div className='invisible'>{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

const Chart: FC<BaseProps> = ({ width, height }) => {
  return (
    <div
      role='button'
      className={classNames(
        'max-w-sm p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-700',
        getWHClass(width!, height!)
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-32 mb-2.5' />
      <div className='w-48 h-2 mb-10 bg-gray-300 rounded-full dark:bg-gray-700' />
      <div className='flex items-baseline mt-4 space-x-6'>
        <div className='w-full bg-gray-300 rounded-t-lg h-72 dark:bg-gray-700' />
        <div className='w-full h-56 bg-gray-300 rounded-t-lg dark:bg-gray-700' />
        <div className='w-full bg-gray-300 rounded-t-lg h-72 dark:bg-gray-700' />
        <div className='w-full h-64 bg-gray-300 rounded-t-lg dark:bg-gray-700' />
        <div className='w-full bg-gray-300 rounded-t-lg h-80 dark:bg-gray-700' />
        <div className='w-full bg-gray-300 rounded-t-lg h-72 dark:bg-gray-700' />
        <div className='w-full bg-gray-300 rounded-t-lg h-80 dark:bg-gray-700' />
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

const Skeleton: FC<SkeletonProps> = ({
  variant,
  lines,
  children,
  ...props
}) => {
  if (variant === 'text') return <Text lines={lines || 1} {...props} />;
  if (variant === 'image') return <Image>{children}</Image>;
  if (variant === 'rectangular')
    return <Rectangle {...props}>{children}</Rectangle>;
  if (variant === 'chart') return <Chart {...props} />;
  return <Circular>{children}</Circular>;
};

Skeleton.defaultProps = {
  variant: 'text',
  lines: 1
};

export default Skeleton;
