import {
  QueryClient,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  type UseQueryResult
} from '@tanstack/react-query';
import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { QueryOptions } from './types';

const baseURL = import.meta.env.VITE_BASE_URL;

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  options?: QueryOptions,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      request(baseURL, document, queryKey[1] ? queryKey[1] : undefined).then(
        (data) => data
      ),
    options
  );
}

export function useGraphQLMutation<
  TData = any,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown
>(
  document: string,
  variables?: Record<any, any>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationFn'
  >
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutation<TData, TError, TVariables, TContext>(
    async (v: any) => request(baseURL, document, v),
    options
  );
}

// export function useGraphQL(
//   cacheKey: string[],
//   document: string,
//   options?: QueryOptions
// ): UseQueryResult {
//   return useQuery(
//     cacheKey,
//     async () => request(baseURL, document).then((data) => data),
//     options
//   );
// }

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 60 * 1000,
      cacheTime: 5 * 60 * 60 * 1000,
      refetchOnWindowFocus: false
    }
  }
});
