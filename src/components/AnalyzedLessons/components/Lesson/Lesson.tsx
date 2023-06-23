import React, {
  useState,
  useCallback,
  Fragment,
  useRef,
  KeyboardEvent,
  useEffect
} from 'react';
import { MoreVert, Add } from '@mui/icons-material';
import { Menu, Transition } from '@headlessui/react';

import { Avatar } from '../../../Avatar';
import { PlusCircle } from '../../../Icons';

export interface LessonProps {
  imageUrl: string;
  title: string;
  date: string;
}

const LessonItem: React.FC<LessonProps> = ({ imageUrl, title, date }) => {
  const [isFocused, setFocus] = useState(false);
  const placeholderEl = useRef<HTMLDivElement>(null);

  const onFocusTitle = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlurTitle = useCallback(() => {
    setFocus(false);
  }, []);

  const onPlaceHolderChange = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setFocus(false);
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    if (isFocused) placeholderEl?.current?.focus();
    else placeholderEl?.current?.blur();
  }, [isFocused]);

  return (
    <div className='flex flex-row w-1/3 2xl:w-1/3 xl:w-1/3 lg:w-1/3 px-2 mt-2'>
      <div className='flex-col rounded-2xl overflow-hidden bg-white flex w-full h-100'>
        <img
          src={imageUrl}
          className='w-full 2xl:h-[350px] xl:h-[300px] md:h-[250px]'
          alt='Lesson'
        />
        <div className='px-4 py-5 flex-1 flex break-all max-sm:flex-col'>
          <div className='flex-1'>
            <h4 className='text-2xl font-bold text-neutral-600'>
              <div
                contentEditable={isFocused}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: title }}
                className='outline-none w-full text-xl'
                onFocus={onFocusTitle}
                onBlur={onBlurTitle}
                ref={placeholderEl}
                onKeyDown={onPlaceHolderChange}
                role='presentation'
              />
            </h4>
            <h3 className='text-base font-normal text-neutral-500 mt-1'>
              {date}
            </h3>
          </div>
          <div className='ml-auto flex items-center mt-2'>
            <Avatar
              size='small'
              url='https://cdn-icons-png.flaticon.com/512/147/147144.png'
            />
            <button
              type='button'
              className={`text-slate-600 font-medium text-sm p-2 rounded-full border-2 bg-neutral-100 border-white -ml-3 ${
                isFocused ? 'hidden' : 'block'
              }`}
            >
              <Add />
            </button>

            <Menu
              as='div'
              className='text-slate-500 ml-6 hover:text-slate-700 active:text-slate-500 relative'
            >
              <div>
                <Menu.Button className='flex items-center focus:outline-none'>
                  <MoreVert />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-xl focus:outline-none'>
                  <div className='py-5 px-2'>
                    {/* <Menu.Item>
											{({ active }) => (
												<div
													className={`${active ? 'bg-gray-100 text-gray-900 text-white' : 'text-gray-700'} block px-4 py-2 text-base`}
													onClick={onEditTitle}
												>
													<div className="flex items-center">
														<Edit/>
														<span className="ml-3">Edit title</span>
													</div>
												</div>
											)}
										</Menu.Item>  */}
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900 text-white'
                              : 'text-gray-700'
                          } block px-4 py-2 text-base`}
                        >
                          <div className='flex items-center'>
                            <PlusCircle />
                            <span className='ml-3'>Placeholder</span>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900 text-white'
                              : 'text-gray-700'
                          } block px-4 py-2 text-base`}
                        >
                          <div className='flex items-center'>
                            <PlusCircle />
                            <span className='ml-3'>Placeholder</span>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900 text-white'
                              : 'text-gray-700'
                          } block px-4 py-2 text-base`}
                        >
                          <div className='flex items-center'>
                            <PlusCircle />
                            <span className='ml-3'>Placeholder</span>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className='px-5 pb-5 flex mt-3'>
          <button
            className={`transition ease-in-out duration-400 px-4 py-2 rounded-xl mr-2 border-2 text-base leading-[14px] ${
              isFocused
                ? 'bg-red-200 text-critical-500 border-red-200'
                : 'bg-sky-50 text-sky-500 border-sky-50'
            }`}
          >
            Pre Observation
          </button>
          <button className='text-base px-4 py-2 rounded-xl bg-indigo-100 text-blue-700 mr-2 border-2 border-indigo-100 leading-[14px]'>
            Discussion
          </button>
          <button
            className={`text-xl ml-auto px-2 rounded-xl text-blue-600 border-dashed border flex items-center justify-center ${
              isFocused ? 'hidden' : 'block'
            }`}
          >
            <Add sx={{ fontSize: '1rem' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
