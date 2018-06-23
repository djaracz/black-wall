import reduceReducer from 'reduce-reducers';
import { combineReducers } from 'redux';
import { handleAction, Action } from 'redux-actions';
import { CounterAction } from '../action/CounterAction';

export namespace CounterReducer {
  export type State = Readonly<{
    value: number
  }>;

  const initial: State = {
    value: 0
  };

  export const increment = handleAction(
    CounterAction.INCREMENT,
    (state: State) => ({ value: state.value + 1 }),
    initial
  );

  export const decrement = handleAction(
    CounterAction.DECREMENT,
    (state: State) => ({ value: state.value - 1 }),
    initial
  );

  export const reset = handleAction(
    CounterAction.RESET,
    (state: State) => (initial),
    initial
  );

  export const setValue = handleAction(
    CounterAction.SET_VALUE,
    (state: State, action: CounterAction.SetValueAction) => ({ value: action.payload || state.value }),
    initial
  );

  export const reducer = reduceReducer(
    increment,
    decrement,
    reset
  );

  // export const reducer = handleActions({
  //   value: combineActions(increment)
  // }, initial)

  // export const reducer = (state: State = initial, action: any) => {
  //   switch (action.type) {
  //     case CounterAction.INCREMENT:
  //       return ({ value: state.value + 1 });
  //     case CounterAction.DECREMENT:
  //       return ({ value: state.value - 1 });
  //     case CounterAction.SET_VALUE:
  //       return action.payload;
  //     case CounterAction.RESET:
  //       return initial;
  //     default:
  //       return state;
  //   }
  // }
}
