import { useLogoutFunction } from '@propelauth/react';
import { DropdownMenu } from 'Components/DropdownMenu';
import AuthUser from 'Elements/AuthUser';
import { FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  const logoutFn = useLogoutFunction();
  return (
    <header className='flex justify-end items-center py-3 fixed z-40 top-0 bg-slate-50 backdrop-blur-sm h-20 border-b bg-opacity-95 w-full px-16'>
      <AuthUser />
      <span className='ml-5 mt-2 text-gray-800'>
        <DropdownMenu
          options={[
            {
              title: 'Log Out',
              action: () => {
                logoutFn(true);
                localStorage.clear();
              }
            }
          ]}
          icon={<FaChevronDown />}
        />
      </span>
    </header>
  );
};

export default Header;
