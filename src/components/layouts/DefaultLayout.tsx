import {
  withRequiredAuthInfo,
  WithLoggedInAuthInfoProps
} from '@propelauth/react';
import SideBarr from 'Components/SideBarr';
import { Header } from 'Components/Header';
import { Outlet } from 'react-router';

const DefaultLayout: React.FC<WithLoggedInAuthInfoProps> = () => (
  <div className='flex bg-slate-50'>
    <SideBarr />
    <div className='w-[400px] h-[200px]' />
    <div className='w-full m-5'>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  </div>
);

export default withRequiredAuthInfo(DefaultLayout);
