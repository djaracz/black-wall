import { combineReducers } from 'redux';
import { PostReducer } from './PostReducer';
import { CounterReducer } from './CounterReducer';

export type RootState = {
  post: PostReducer.State,
  counter: CounterReducer.State,
};

export const rootReducer = combineReducers<RootState>({
  post: PostReducer.reducer,
  counter: CounterReducer.reducer,
});
