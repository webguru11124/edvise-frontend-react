import { ReactNode } from 'react';
import { KeyboardBackspace } from '@mui/icons-material';
import { To, useNavigate } from 'react-router-dom';

interface DashboardNoSidebarProps {
  children: ReactNode;
  backText: string;
  backLink: To;
}

export default function DashboardNoSidebar({
  children,
  backText,
  backLink
}: DashboardNoSidebarProps) {
  const navigate = useNavigate();
  return (
    <div className='w-full py-6 px-4 h-screen'>
      <div className='w-full py-4 px-8'>
        <button
          className='text-xl text-blue-600 flex items-center gap-2 hover:text-blue-500 active:text-blue-600'
          onClick={() => navigate(backLink)}
        >
          <KeyboardBackspace />
          <h3>{backText}</h3>
        </button>
      </div>
      {children}
    </div>
  );
}
