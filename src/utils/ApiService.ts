import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiError } from "./ApiError";

export namespace ApiService {
  type GetDumb<Entry> = (customError: ApiError.Content) => Promise<Entry>;
  function getDumb<Entry>(
    url: string,
    config: AxiosRequestConfig,
    instance: AxiosInstance,
  ): GetDumb<Entry> {
    return (content: ApiError.Content) =>
      instance
        .get(url, config)
        .then((response: AxiosResponse<Entry>) => response.data)
        .catch((error: AxiosError) => {
          throw new ApiError(error, content);
        });
  }

  type PostDumb<Entry> = (customError: ApiError.Content) => Promise<Entry>;
  function postDumb<Entry>(
    url: string,
    data: any,
    config: AxiosRequestConfig,
    instance: AxiosInstance,
  ): PostDumb<Entry> {
    return (content: ApiError.Content) =>
      instance
        .post(url, data, config)
        .then((response: AxiosResponse<Entry>) => response.data)
        .catch((error: AxiosError) => {
          throw new ApiError(error, content);
        });
  }

  type PutDumb<Entry> = (customError: ApiError.Content) => Promise<Entry>;
  function putDumb<Entry>(
    url: string,
    data: any,
    config: AxiosRequestConfig,
    instance: AxiosInstance,
  ): PutDumb<Entry> {
    return (content: ApiError.Content) =>
      instance
        .put(url, data, config)
        .then((response: AxiosResponse<Entry>) => response.data)
        .catch((error: AxiosError) => {
          throw new ApiError(error, content);
        });
  }

  type DeleteDumb<Entry> = (customError: ApiError.Content) => Promise<Entry>;
  function deleteDumb<Entry>(
    url: string,
    config: AxiosRequestConfig,
    instance: AxiosInstance,
  ): DeleteDumb<Entry> {
    return (content: ApiError.Content) =>
      instance
        .delete(url, config)
        .then((response: AxiosResponse<Entry>) => response.data)
        .catch((error: AxiosError) => {
          throw new ApiError(error, content);
        });
  }

  export interface ICreate {
    get: <Entry>(
      params?: string,
      config?: AxiosRequestConfig,
    ) => (message: string) => () => Promise<Entry>;
    post: <Entry>(
      params?: string,
      data?: any,
      config?: AxiosRequestConfig,
    ) => (message: string) => () => Promise<Entry>;
    put: <Entry>(
      params?: string,
      data?: any,
      config?: AxiosRequestConfig,
    ) => (message: string) => () => Promise<Entry>;
    delete: <Entry>(
      params?: string,
      config?: AxiosRequestConfig,
    ) => (message: string) => () => Promise<Entry>;
  }
  export function create(name: string, baseUrl: string, instance: AxiosInstance): ICreate {
    return {
      get: <Entry>(params: string = "", config: AxiosRequestConfig = {}) => (
        message: string,
      ) => () => getDumb<Entry>(`${baseUrl}/${params}`, config, instance)({ name, message }),
      post: <Entry>(params: string = "", data: any = {}, config: AxiosRequestConfig = {}) => (
        message: string,
      ) => () => postDumb<Entry>(`${baseUrl}/${params}`, data, config, instance)({ name, message }),
      put: <Entry>(params: string = "", data: any = {}, config: AxiosRequestConfig = {}) => (
        message: string,
      ) => () => putDumb<Entry>(`${baseUrl}/${params}`, data, config, instance)({ name, message }),
      delete: <Entry>(params: string = "", config: AxiosRequestConfig = {}) => (
        message: string,
      ) => () => deleteDumb<Entry>(`${baseUrl}/${params}`, config, instance)({ name, message }),
    };
  }
}
