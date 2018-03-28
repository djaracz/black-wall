import { ActionType } from '../const/ActionType';

export namespace CounterReducer {
  export type State = Readonly<{
    value: number
  }>;

  const initial: State = {
    value: 0
  };

  export const reducer = (state: State, action: any) => {
    switch (action.type) {
      case ActionType.INCREMENT:
        return ({
          value: state.value + 1
        });
      case ActionType.DECREMENT:
        return ({
          value: state.value - 1
        });
      case ActionType.SET_VALUE:
        return action.payload;
      case ActionType.RESET:
        return initial;
      default:
        return initial;
    }
  }
}
