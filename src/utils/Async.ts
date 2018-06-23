import { Map } from 'immutable';
import { handleAction as reduxActionsHandleAction, Reducer } from 'redux-actions';

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
    switch (type) {
      case types.get(Status.RESOLVED):
        return reduxActionsHandleAction(
          types.get(Status.RESOLVED),
          reducer,
          initial
        );
      case types.get(Status.REJECTED):
        return reduxActionsHandleAction(
          types.get(Status.RESOLVED),
          () => initial,
          initial
        );
      default:
        return reduxActionsHandleAction(
          types.get(Status.VOID),
          () => initial,
          initial
        );
    }
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