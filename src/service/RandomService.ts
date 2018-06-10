import { ApiService } from './ApiService';
import { apiClient } from './apiClient';

export namespace RandomService {
  const client = ApiService.create(
    'Random service',
    'posts',
    apiClient
  );

  const GET_ERROR_MESSAGE: string = 'Error api message';
  export const get = client.get()(GET_ERROR_MESSAGE)
}