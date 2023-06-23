import { UseQueryOptions } from '@tanstack/react-query';

export type QueryOptions =
  | (Omit<
      UseQueryOptions<any, unknown, any, any[]>,
      'queryKey' | 'queryFn' | 'initialData'
    > & { initialData?: (() => undefined) | undefined })
  | undefined;
