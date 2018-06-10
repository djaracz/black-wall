import { CounterAction } from '../action/CounterAction';

export namespace CounterReducer {
  export type State = Readonly<{
    value: number
  }>;

  const initial: State = {
    value: 0
  };

  export const reducer = (state: State = initial, action: any) => {
    switch (action.type) {
      case CounterAction.INCREMENT:
        return ({ value: state.value + 1 });
      case CounterAction.DECREMENT:
        return ({ value: state.value - 1 });
      case CounterAction.SET_VALUE:
        return action.payload;
      case CounterAction.RESET:
        return initial;
      default:
        return state;
    }
  }
}
