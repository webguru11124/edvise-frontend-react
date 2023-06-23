import { useAuthInfo } from '@propelauth/react';
import avatar from '../assets/avatar2.png';

const AuthUser: React.FC = () => {
  const authInfo = useAuthInfo();

  if (authInfo.loading) {
    return <div>Skeleton</div>;
  }

  if (!authInfo.isLoggedIn && !authInfo.loading) {
    return null;
  }

  const { firstName, lastName } = authInfo.user;
  const role =
    `${authInfo.orgHelper.getOrgs()?.[0]?.userAssignedRole} User` ?? 'User';
  const { pictureUrl } = authInfo.user;
  const avi = pictureUrl ?? avatar;

  return (
    <div className='flex gap-x-4 items-center'>
      <div className='flex flex-col justify-end'>
        <span className='font-semibold'>{`${firstName} ${lastName}`}</span>
        <span className='text-sm text-gray-400 capitalize'>{role}</span>
      </div>
      <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
        <img src={avi} alt={`${lastName} avatar`} />
      </div>
    </div>
  );
};

export default AuthUser;
