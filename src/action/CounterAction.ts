
export namespace CounterAction {
  export const INCREMENT = 'INCREMENT';
  export const increment = () => ({ type: INCREMENT });

  export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
  export const incrementAsync = () => ({ type: INCREMENT_ASYNC });

  export const DECREMENT = 'DECREMENT';
  export const decrement = () => ({ type: DECREMENT });

  export const RESET = 'RESET';
  export const reset = () => ({ type: RESET });

  export const SET_VALUE = 'SET_VALUE';
  export const setValue = (value: number) => ({
    type: SET_VALUE,
    value
  });

}
