import reduceReducer from 'reduce-reducers';
import { handleAction } from 'redux-actions';

import { CounterAction } from '../action';

export namespace CounterReducer {
  export type State = Readonly<number>;

  export const initial: State = 0;

  export const increment = handleAction<State, undefined>(
    CounterAction.INCREMENT,
    (state: State) => state + 1,
    initial,
  );

  export const decrement = handleAction<State, undefined>(
    CounterAction.DECREMENT,
    (state: State) => state - 1,
    initial,
  );

  export const reset = handleAction<State, undefined>(
    CounterAction.RESET,
    (state: State) => initial,
    initial,
  );

  export const setValue = handleAction<State, number>(
    CounterAction.SET_VALUE,
    (state: State, action: CounterAction.SetValueAction) => action.payload || initial,
    initial,
  );

  export const reducer = reduceReducer<State>(increment, decrement, reset);
}
