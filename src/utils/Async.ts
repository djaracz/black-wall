import { Map } from 'immutable';
import { handleActions, Reducer } from 'redux-actions';

export namespace Async {
  export enum Status {
    VOID = 'VOID',
    PENDING = 'PENDING',
    RESOLVED = 'RESOLVED',
    REJECTED = 'REJECTED'
  }

  export type CreateTypes = Map<string, string>;
  export const createTypes = (type: string): CreateTypes => Map({
    [Status.VOID]: `${type}_VOID`,
    [Status.PENDING]: type,
    [Status.RESOLVED]: `${type}_RESOLVED`,
    [Status.REJECTED]: `${type}_REJECTED`,
  });

  export const handleAction = <State, Payload, Meta = any>(
    type: string,
    reducer: Reducer<State, Payload>,
    initial: State
  ): Reducer<State, Payload> => {
    const types: CreateTypes = createTypes(type);

    return handleActions(
      {
        [types.get(Status.VOID)]: () => initial,
        [types.get(Status.REJECTED)]: () => initial,
        [types.get(Status.RESOLVED)]: reducer,
      },
      initial
    );
  };

  export const action = <Payload>(type: string, payload?: Payload, status: Status = Status.PENDING) => {
    const types: CreateTypes = createTypes(type);
    const asyncType: string = status === Status.PENDING
      ? types.get(Status.PENDING)
      : types.get(status);

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