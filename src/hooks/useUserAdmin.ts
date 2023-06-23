import { useGraphQL } from 'Services/api';
import { getAdminUsers } from 'Services/queries';
import useGlobalStore from 'State/store';
import { UsersQuery } from '../__generated/graphql';

export default function useUserAdmin(pageNumber: number, pageSize: number) {
  const [setAllUsers] = useGlobalStore((state) => [state.setAllUsers]);

  const { data: users, isFetching: fetchingUsers } = useGraphQL(
    getAdminUsers,
    {
      onSuccess: ({ users: usersData }: UsersQuery) => {
        setAllUsers(usersData);
      },
      keepPreviousData: true
    },
    { pageNumber, pageSize }
  );

  return { users, fetchingUsers };
}
