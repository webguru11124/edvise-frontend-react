import { FC } from 'react';

import { Sidebar, SidebarProps } from '../components/Sidebar';
import { PageHeader, PageHeaderProps } from '../components/PageHeader';

export interface EvaluatorViewProps extends SidebarProps, PageHeaderProps {}

const EvaluatorView: FC<EvaluatorViewProps> = ({ items, unread, user }) => {
  return (
    <div className='w-full'>
      <div className='h-0'>
        <div className='w-[300px] fixed top-0 left-0'>
          <Sidebar items={items} />
        </div>
      </div>
      <div className='pl-[300px]'>
        <div className='py-3 px-10'>
          <PageHeader unread={unread} user={user} />
        </div>
      </div>
    </div>
  );
};

export default EvaluatorView;
