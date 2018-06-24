import { AnyAction } from 'redux';
import { Map } from 'immutable';
import reduceReducer from 'reduce-reducers';
import { Async } from '../utils/Async';
import { ErrorReason } from '../model/ErrorReason';
import { TypeSelector } from '../selectors/TypeSelector';
import { AsyncSelector } from '../selectors/AsyncSelector';

export namespace AsyncReducer {
  export type Async = {
    status: Async.Status,
    error?: ErrorReason.Type
  }
  export type State = Readonly<Map<string, Async>>;

  export const initial: State = Map();

  function async(state: State, action: AnyAction) {
    if (
      AsyncSelector.isActionAsync(action)
      && AsyncSelector.selectTypeExists(action.type)(state)
      && TypeSelector.isRejected(action.type)
    ) {
      return state.set(
        action.meta.type,
        { status: AsyncSelector.selectStatus(action.meta.status), error: action.payload }
      );
    } else if (
      AsyncSelector.isActionAsync(action)
    ) {
      return state.set(
        action.meta.type,
        { status: AsyncSelector.selectStatus(action.meta.status) }
      );
    } else {
      return initial;
    }
  }

  export const reducer = reduceReducer<State>(
    async,
  );
}
