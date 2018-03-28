import { createAction } from 'redux-actions';
import { ActionType } from '../const/ActionType';

export namespace CounterAction {
  export const increment = () => ({ type: ActionType.INCREMENT });

  export const decrement = () => ({ type: ActionType.DECREMENT });

  export const reset = () => ({ type: ActionType.RESET });

  export const setValue = (value: number) => ({
    type: ActionType.SET_VALUE,
    value
  });

}
