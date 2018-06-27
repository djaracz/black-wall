import { combineReducers } from "redux";
import { AsyncReducer } from "./AsyncReducer";
import { CounterReducer } from "./CounterReducer";
import { PostReducer } from "./PostReducer";

export interface RootState {
  async: AsyncReducer.State;
  post: PostReducer.State;
  counter: CounterReducer.State;
}

export const rootReducer = combineReducers<RootState>({
  async: AsyncReducer.reducer,
  post: PostReducer.reducer,
  counter: CounterReducer.reducer,
});
