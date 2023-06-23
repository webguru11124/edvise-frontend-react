import {
  withRequiredAuthInfo,
  WithLoggedInAuthInfoProps
} from '@propelauth/react';
import SideBarr from 'Components/SideBarr';
import { Header } from 'Components/Header';
import { Outlet, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

const noSidebarRoutes = [
  '/lessons/uploads',
  '/lessons/uploads/scheduled',
  '/lessons/uploads/live',
  '/lessons/uploads/written',
  '/lessons/uploads/pre-recorded'
];

const DashboardLayout: React.FC<WithLoggedInAuthInfoProps> = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (noSidebarRoutes.includes(location.pathname)) {
      setShowSidebar(false);
      return;
    }
    setShowSidebar(true);
  }, [location]);

  return (
    <div className='bg-slate-50'>
      {showSidebar && <SideBarr />}
      <Header />
      <div className={`${showSidebar ? 'ml-[300px]' : 'ml-0'}`}>
        <div className='w-full flex max-w-[1500px] min-w-[1100px] mx-auto px-16'>
          <div className='w-full mt-20'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRequiredAuthInfo(DashboardLayout);
