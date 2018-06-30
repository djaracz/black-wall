import { Async } from '../../Utils/Async';
import { Proof } from '../../Utils/Proof';

import { ErrorReason } from './ErrorReason';

export namespace AsyncData {
  export type Type = Readonly<{
    Status: Async.Status;
    Reason?: ErrorReason.Type;
  }>;

  export const create = (status: Async.Status, reason?: ErrorReason.Type): Type => ({
    Status: status,
    Reason: reason ? reason : undefined,
  });

  const proof = Proof.create('AsyncData model');

  export const getStatus = (type: Type): Async.Status => proof.notUndefined(type.Status);
  export const getReason = (type: Type): ErrorReason.Type => proof.notUndefined(type.Reason);
}
