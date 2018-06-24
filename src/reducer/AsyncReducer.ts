import { AnyAction } from 'redux';
import { Map } from 'immutable';
import reduceReducer from 'reduce-reducers';
import { AsyncSelector } from '../selectors/AsyncSelector';
import { AsyncData } from '../model/AsyncData';
import { ErrorReason } from '../model/ErrorReason';

export namespace AsyncReducer {
  export type State = Readonly<Map<string, AsyncData.Type>>;

  export const initial: State = Map();

  function async(state: State, action: AnyAction) {
    if (
      AsyncSelector.isActionAsync(action)
      && AsyncSelector.isRejected(action)
    ) {
      return state.set(
        action.meta.type,
        AsyncData.create(
          AsyncSelector.selectStatus(action.meta.status),
          ErrorReason.create(action.payload)
        )
      );
    } else if (
      AsyncSelector.isActionAsync(action)
    ) {
      return state.set(
        action.meta.type,
        AsyncData.create(AsyncSelector.selectStatus(action.meta.status))
      );
    } else {
      return initial;
    }
  }

  export const reducer = reduceReducer<State>(
    async,
  );
}
