import {
  useQuery,
  useMutation,
  UseMutationResult,
  UseQueryResult
} from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import { getUsers, addUser } from 'Services/queries';
import useGlobalStore from 'State/store';
import { MutationCreateUserArgs, User } from '../__generated/graphql';

export const useUser = (accessToken?: string) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const client = new GraphQLClient(BASE_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const [setUsers] = useGlobalStore((state) => [state.setUsers, state.users]);

  const {
    data: users,
    isLoading: isGettingUsers,
    error: getUsersError
  }: UseQueryResult<User[], unknown> = useQuery(
    ['users'],
    async () => {
      const response = await client.request(getUsers);
      return response.users as User[];
    },
    {
      onSuccess: () => {
        setUsers(users ?? []);
      }
    }
  );

  const {
    mutateAsync: createUserMutation,
    data: user,
    isLoading: isCreatingUser,
    isSuccess: isCreateUserSuccess,
    error: createUserError
  }: UseMutationResult<User, unknown, MutationCreateUserArgs> = useMutation(
    async (createUserInput: MutationCreateUserArgs) => {
      const response: any = await client.request(addUser, createUserInput);
      return response.createUser;
    }
  );

  const createUser = async (createUserInput: MutationCreateUserArgs) => {
    await createUserMutation(createUserInput);
  };

  return {
    users,
    isGettingUsers,
    getUsersError,
    createUser,
    user,
    isCreatingUser,
    isCreateUserSuccess,
    createUserError
  };
};
