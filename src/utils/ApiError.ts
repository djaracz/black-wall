import { AxiosError } from "axios";

export namespace ApiError {
  export type CreateMessage = (error: AxiosError) => string;
  export interface Content {
    name: string;
    message: string;
  }
}

export class ApiError extends Error {
  // todo: error not ready yet
  // static createMessage: ApiError.CreateMessage = error => {
  //   const title: string = error.response && error.response.status
  //     ? error.response.status.toString()
  //     : 'Unknows status';
  //   return title;
  // };

  constructor(axiosError: AxiosError, content: ApiError.Content) {
    super();
    this.name = content.name;
    this.message = content.message;
  }
}
