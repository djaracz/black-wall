import { RootState } from '../../Shared/reducer';

export namespace CounterSelector {
  export const select = (state: RootState) => state.counter;
}
