import { combineReducers } from 'redux';
import { CounterReducer } from './CounterReducer';

export type RootState = {
  counter: CounterReducer.State,
  // posts:
};

export const rootReducer = combineReducers<RootState>({
  counter: CounterReducer.reducer,
});