import {
  Group,
  Home,
  Note,
  Person,
  SvgIconComponent
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'Components/Button';

import { useAuthInfo } from '@propelauth/react';
import { UseAuthInfoLoggedInProps } from '@propelauth/react/types/useAuthInfo';
import { appLinks } from 'Utils/constants';
import LinkButton from '../elements/LinkButton';
import { ButtonColor, ButtonSize } from '../types';
import { classNames } from '../utils';
import { UserType } from '../__generated/graphql';
import { EdviseLogo } from './Header/components';

type ISideBarLink = {
  id: number;
  label: string;
  icon: SvgIconComponent;
  active?: boolean;
  destination?: string;
  roles: Array<UserType>;
};

export type SidebarProps = {
  links?: ISideBarLink[][];
};

export const defaultLinks = [
  [
    {
      id: 1,
      label: 'Dashboard',
      icon: Home,
      active: true,
      destination: '/dashboard',
      roles: [UserType.Admin, UserType.Teacher]
    },
    {
      id: 2,
      label: 'Staff',
      icon: Group,
      destination: '/team-management',
      roles: [UserType.Admin]
    },
    {
      id: 3,
      label: 'Evaluation',
      icon: Note,
      destination: '/lessons',
      roles: [UserType.Admin, UserType.Teacher]
    }
  ],
  [
    {
      id: 1,
      label: 'Profile',
      icon: Person,
      destination: '/profile',
      roles: [UserType.Admin, UserType.Teacher]
    }
  ]
];

const SideBarLink: React.FC<Omit<ISideBarLink, 'id'>> = ({
  label,
  icon,
  destination,
  roles
}) => {
  const location = useLocation();
  const { orgHelper } = useAuthInfo() as UseAuthInfoLoggedInProps;
  const userRole = orgHelper.getOrgs()?.[0]?.userAssignedRole?.toLowerCase();

  return userRole && roles.indexOf(userRole as UserType) !== -1 ? (
    <LinkButton
      to={destination || '#'}
      size={ButtonSize.FULL}
      color={ButtonColor.DEFAULT}
      icon={icon}
      className={classNames(
        'p-4',
        location.pathname === destination
          ? 'bg-blue-50 text-blue-500 hover:text-blue-600 hover:bg-blue-100'
          : 'text-neutral-500 hover:text-neutral-600 hover:bg-gray-50'
      )}
    >
      {label}
    </LinkButton>
  ) : (
    <></>
  );
};

const SideBarr: React.FC<SidebarProps> = ({ links = defaultLinks }) => {
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 left-0 z-50 flex flex-col w-[300px] bg-white p-5 h-screen overflow-auto scrollbar-hide'>
      <EdviseLogo className='ml-6 my-8' />
      <nav className={classNames('h-full mb-5', links[1] ? 'divide-y' : '')}>
        <div>
          {links[0].map(({ id, ...others }) => (
            <SideBarLink key={id} {...others} />
          ))}
        </div>

        <div>
          {links[1].map(({ id, ...others }) => (
            <SideBarLink key={id} {...others} />
          ))}
        </div>
      </nav>
      <div className='h-[300px] p-5 bg-neutral-50 text-neutral-400 text-center space-y-5'>
        <h4>You can easily manage all your event</h4>
        <Button
          text='Upload'
          width='fit-parent'
          size='xl'
          onClick={() => navigate(appLinks.lessonUploads)}
        />
      </div>
    </div>
  );
};

export default SideBarr;
