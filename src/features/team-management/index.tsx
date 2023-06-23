import { FC, useEffect, useState } from 'react';
import { Button } from 'Components/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { PageTitleHeader } from 'Components/PageTitleHeader';
import UserIcon from 'Stories/assets/user-icon.svg';

import useUserAdmin from 'Hooks/useUserAdmin';
import { createColumnHelper } from '@tanstack/react-table';
import { TeamManagementDataType } from 'Stories/components/BasicTable.stories';
import { User } from 'Components/PageHeader/components/User';
import AvatarImage from 'Assets/avatar.png';
import { Badge } from 'Components/Badge';
import { DropdownMenu } from 'Components/DropdownMenu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from 'Elements/Pagination';
import CustomTable from 'Components/BasicTable';

const TeamColumnHelper = createColumnHelper<TeamManagementDataType>();

const TeamColumns = [
  TeamColumnHelper.accessor('name', {
    header: () => 'Name',
    cell: (info) => (
      // eslint-disable-next-line jsx-a11y/aria-role
      <User avatar={AvatarImage} name={info.getValue()} role='SK328899' />
    )
  }),
  TeamColumnHelper.accessor('status', {
    header: () => 'Status',
    cell: () => <Badge text='Active' variant='success' withBg lightText />
  }),
  TeamColumnHelper.accessor('type', {
    header: () => 'Role',
    cell: (info) => (
      <DropdownMenu
        dropdownText={info.getValue()}
        options={[
          {
            title: 'Teacher',
            action: () => console.log('Teacher')
          },
          {
            title: 'Admin',
            action: () => console.log('Admin')
          }
        ]}
        icon={<ExpandMoreIcon />}
      />
    )
  })
];

const teamTableOptions = [
  {
    title: 'Edit',
    action: () => {
      /* Change Role */
    }
  },
  {
    title: 'Delete',
    action: () => {
      /* Delete Role */
    }
  }
];

const TeamManagement: FC = () => {
  const [currentPage, setCurrentPage] = useState({ first: 10, offset: 1 });
  const [pageInView, setPageInView] = useState(1);
  const { users } = useUserAdmin(pageInView, currentPage.first);

  const handleClick = (el: any) => {
    console.log(el);
  };

  useEffect(() => {
    setPageInView(Math.floor(currentPage.offset / currentPage.first + 1));
  }, [currentPage]);

  return (
    <div className='mt-7'>
      <PageTitleHeader
        button={
          <Button
            text='Add members'
            color='primary'
            icon={<AddRoundedIcon />}
            iconPosition='start'
          />
        }
        title='Team Management'
        description='Manage your team members and thier account permission here.'
        icon={UserIcon}
      />
      <hr className='mt-4' />
      <div className='rounded-lg overflow-hidden'>
        <CustomTable
          columns={TeamColumns}
          data={users?.users || []}
          options={teamTableOptions}
          rowClicked={handleClick}
        />
      </div>
      <div>
        <Pagination
          current={currentPage}
          totalPages={5}
          setPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TeamManagement;
