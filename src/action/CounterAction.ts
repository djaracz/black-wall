import { Action, BaseAction } from "redux-actions";

export namespace CounterAction {
  export const INCREMENT = "INCREMENT";
  export type IncrementAction = BaseAction;
  export const increment = (): IncrementAction => ({ type: INCREMENT });

  export const DECREMENT = "DECREMENT";
  export type DecrementAction = BaseAction;
  export const decrement = (): DecrementAction => ({ type: DECREMENT });

  export const RESET = "RESET";
  export type ResetAction = BaseAction;
  export const reset = (): ResetAction => ({ type: RESET });

  export const SET_VALUE = "SET_VALUE";
  export type SetValueAction = Action<number>;
  export const setValue = (payload: number): SetValueAction => ({
    type: SET_VALUE,
    payload,
  });
}
