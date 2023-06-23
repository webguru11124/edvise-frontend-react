import { FC, Fragment } from 'react';
import { Spinner } from 'Components/Icons';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ExpandMore } from '@mui/icons-material';

import { classNames } from '../utils';

export interface IOption {
  id: string;
  label: string;
}

export interface SelectProps {
  options: Array<IOption>;
  value: IOption;
  onChange: (value: IOption) => void;
  className?: string;
  isLoading?: boolean;
  selectClass?: string;
}

const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
  isLoading,
  selectClass
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className={classNames('relative', className || '')}>
            <Listbox.Button
              className={classNames(
                selectClass ||
                  'relative h-full w-full cursor-default rounded-md border py-2 pl-3 pr-10 text-left shadow-sm focus:border-skyblue-500 focus:outline-none sm:text-sm'
              )}
            >
              <span className='block truncate text-left'>
                {isLoading && <Spinner />}
                {isLoading && (
                  <span className='absolute left-0 right-0 top-0 bottom-0 bg-neutral-300 opacity-30' />
                )}
                {value.label}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ExpandMore className='h-5 w-5 text-gray-400' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='px-4 py-3 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-opacity-5 focus:outline-none sm:text-sm'>
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-skyblue-100' : 'text-gray-900',
                        'relative cursor-default select-none py-2 px-2 rounded-lg'
                      )
                    }
                    value={option}
                  >
                    <div className='flex justify-between w-full'>
                      <span
                        className={classNames(
                          value.id === option.id
                            ? 'text-neutral-900'
                            : 'text-neutral-600',
                          'break-all flex-1'
                        )}
                      >
                        {option.label}
                      </span>

                      {value.id === option.id && (
                        <span className='flex items-center'>
                          <Check className='h-5 w-5 text-neutral-800' />
                        </span>
                      )}
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

Select.defaultProps = {
  className: '',
  isLoading: false
};

export default Select;
