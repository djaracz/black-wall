import { ApiService } from './ApiService';
import { apiClient } from './apiClient';

export namespace RandomService {
  export type Entry = {
    id: number,
    userId: number,
    title: string,
    body: string,
  };

  const client = ApiService.create(
    'Random service',
    'posts',
    apiClient
  );

  const GET_ERROR_MESSAGE: string = 'Get random service error message';
  export const get = (id: string) => client.get<Entry>(id)(GET_ERROR_MESSAGE);

  const LIST_ERROR_MESSAGE: string = 'List of random service error message';
  export const list = client.get<Entry[]>()(LIST_ERROR_MESSAGE);
}