import { combineReducers } from 'redux';

import { AsyncReducer } from './AsyncReducer';
import { CounterReducer, PostReducer } from '../../ExampleModule/reducer';

export type RootState = {
  async: AsyncReducer.State;
  post: PostReducer.State;
  counter: CounterReducer.State;
};

export const rootReducer = combineReducers<RootState>({
  async: AsyncReducer.reducer,
  post: PostReducer.reducer,
  counter: CounterReducer.reducer,
});
