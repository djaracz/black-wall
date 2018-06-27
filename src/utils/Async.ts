import { Map } from "immutable";
import { ActionMeta, handleActions, Reducer } from "redux-actions";
import { TypeSelector } from "../selectors/TypeSelector";

export namespace Async {
  /**
   * Async action statuses
   */
  export enum Status {
    REQUESTED = "REQUESTED",
    PENDING = "PENDING",
    RESOLVED = "RESOLVED",
    REJECTED = "REJECTED",
  }

  /**
   * Creates async types for given type
   * @param {string} type
   */
  export type CreateTypes = Map<string, string>;
  export const createTypes = (type: string): CreateTypes =>
    Map({
      [Status.REQUESTED]: `${type}_REQUESTED`,
      [Status.PENDING]: `${type}_PENDING`,
      [Status.RESOLVED]: `${type}_RESOLVED`,
      [Status.REJECTED]: `${type}_REJECTED`,
    });

  /**
   * Handle async actions by async type
   * Optionally handle reducers:
   *  - reduceOnRequest,
   *  - reduceOnPending,
   *  - reduceOnRejected,
   * @param {string} type
   * @param {Reducer<State, Payload>} reducer
   * @param {State} initial
   * @param {Reducer<State, Payload>} reduceOnRequest
   * @param {Reducer<State, Payload>} reduceOnPending
   * @param {Reducer<any, Payload>} reduceOnRejected
   * @returns {Reducer<State, Payload>}
   */
  export const handleAction = <State, Payload, Meta = any>(
    type: string,
    reducer: Reducer<State, Payload>,
    initial: State,
    reduceOnRequest?: Reducer<State, Payload>,
    reduceOnPending?: Reducer<State, Payload>,
    reduceOnRejected?: Reducer<any, Payload>,
  ): Reducer<State, Payload> => {
    const types: CreateTypes = createTypes(type);

    return handleActions(
      {
        [types.get(Status.REQUESTED)]: reduceOnRequest ? reduceOnRequest : () => initial,
        [types.get(Status.PENDING)]: reduceOnPending ? reduceOnPending : () => initial,
        [types.get(Status.REJECTED)]: reduceOnRejected ? reduceOnRejected : () => initial,
        [types.get(Status.RESOLVED)]: reducer,
      },
      initial,
    );
  };

  export interface Meta {
    type: string;
    async: boolean;
    status: Status;
  }
  export type Action = ActionMeta<any, Meta>;
  /**
   * Dispatch async action
   * handled by async state
   * @param {string} type
   * @param {Payload} payload
   * @param {Async.Status} status
   * @returns {Async.Action}
   */
  export const action = <Payload>(
    type: string,
    payload?: Payload,
    status: Status = Status.REQUESTED,
  ): Action => ({
    type: TypeSelector.selectTypeForStatus(status)(type),
    payload: payload ? payload : undefined,
    meta: {
      type,
      async: true,
      status,
    },
  });
}
