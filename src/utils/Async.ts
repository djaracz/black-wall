export namespace Async {
  export enum Status {
    VOID = 'VOID',
    PENDING = 'PENDING',
    RESOLVED = 'RESOLVED',
    REJECTED = 'REJECTED'
  }

  export const action = <Payload>(type: string, payload?: Payload, status: Status = Status.PENDING) => {
    const asyncType: string = status === Status.PENDING
      ? type
      : `${type}_${status}`;
    return {
      type: asyncType,
      payload,
      meta: {
        async: true,
        status
      }
    }
  };
}