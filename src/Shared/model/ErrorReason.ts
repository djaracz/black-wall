import { AxiosError } from 'axios';
import { Proof } from '../../Utils/Proof';

export namespace ErrorReason {
  export type Type = Readonly<{
    Data?: any;
    Status?: number | undefined;
    StatusText?: string | undefined;
  }>;

  export const create = (error: AxiosError): Type => ({
    Status: error.response && error.response.status,
    StatusText: error.response && error.response.statusText,
    Data: error.response && error.response.data,
  });

  const proof = Proof.create('ErrorReason model');

  export const getData = (type: Type): any => proof.notUndefined(type.Data);
  export const getStatus = (type: Type): number => proof.notUndefined(type.Status);
  export const getStatusText = (type: Type): string => proof.notUndefined(type.StatusText);
}
