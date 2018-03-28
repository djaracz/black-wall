import { RootState } from '../reducers';
import { createSelector } from 'reselect';
import { CounterReducer } from '../reducers/CounterReducer';

export namespace CounterSelector {
  export const select = (state: RootState) => state.counter;

  export type SelectValue = number;
  export const selectValue = createSelector(
    select,
    (counter: CounterReducer.State): SelectValue => counter.value
  );
}