import { FC, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LogoIcon } from './Icons';

export type TopBarProps = {
  firstName: string;
  lastName: string;
  role: 'Teacher' | 'Admin';
  roleName: string;
  email: string;
  avatar: string;
};

const TopBar: FC<TopBarProps> = ({
  firstName,
  lastName,
  avatar,
  email,
  roleName,
  role
}) => {
  return (
    <div className='px-10 py-5 bg-white flex items-center shadow-sm'>
      <div>
        <LogoIcon />
      </div>
      <div className='ml-auto'>
        <Popover className='relative'>
          <Popover.Button className='outline-none active:bg-neutral-400 p-2'>
            <div className='flex flex-row-reverse cursor-pointer'>
              <img
                src={avatar}
                className='w-[50px] h-[50px] rounded-3xl'
                alt='user avatar'
              />
              <div className='mr-4 flex flex-col justify-center'>
                <h3 className='font-bold text-base'>
                  {firstName} {lastName}
                </h3>
                <h4 className='text-neutral-500 mt-1 text-xs'>{roleName}</h4>
              </div>
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute right-0 top-[100%] z-10 w-[200px] bg-white shadow-2xl shadow-gray-400 rounded-md'>
              {() => (
                <>
                  <div className='w-full px-4 py-3 border-b border-neutral-200'>
                    <h3 className='font-bold text-base'>
                      {firstName} {lastName}
                    </h3>
                    <h4 className='text-neutral-600 mt-1 text-xs'>{email}</h4>
                  </div>
                  <div className='w-full text-neutral-600'>
                    {role === 'Admin' && (
                      <div className='py-2 cursor-pointer hover:bg-neutral-200 px-4 active:bg-neutral-100'>
                        Manage Team
                      </div>
                    )}
                    <div className='py-2 cursor-pointer hover:bg-neutral-200 px-4 active:bg-neutral-100'>
                      Profile
                    </div>
                    <div className='py-2 cursor-pointer hover:bg-neutral-200 px-4 active:bg-neutral-100'>
                      Settings
                    </div>
                    <div className='py-2 cursor-pointer hover:bg-neutral-200 px-4 active:bg-neutral-100'>
                      Sign out
                    </div>
                  </div>
                </>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default TopBar;
