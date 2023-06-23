export interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}
