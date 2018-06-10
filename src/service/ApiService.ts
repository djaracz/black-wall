import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiError } from '../utils/ApiError';

export namespace ApiService {
  type GetDumb<Entry> = (customError: ApiError.Content) => Promise<Entry>;
  function getDumb<Entry> (
    url: string,
    config: AxiosRequestConfig,
    instance: AxiosInstance,
  ): GetDumb<Entry> {
    return (content: ApiError.Content) => instance
      .get(url, config)
      .then((response: AxiosResponse<Entry>) => response.data)
      .catch((error: AxiosError) => {
        throw new ApiError(error, content);
      });
  }

  export type Create = {
    get: <Entry>(params?: string, config?: AxiosRequestConfig) => (message: string) => () => Promise<Entry>;
  }
  export function create (
    name: string,
    baseUrl: string,
    instance: AxiosInstance
  ): Create {
    return {
      get: <Entry>(params: string = '', config: AxiosRequestConfig = {}) => (message: string) => () =>
        getDumb<Entry>(
          `${baseUrl}${params}`,
          config,
          instance
        )({ name, message })
    }
  }
}


