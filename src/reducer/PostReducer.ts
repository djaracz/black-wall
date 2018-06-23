import reduceReducer from 'reduce-reducers';
import { List } from 'immutable';
import { PostAction } from '../action/PostAction';
import { Post } from '../model/Post';
import { Async } from '../utils/Async';

export namespace PostReducer {
  export type State = List<Post.Type>;

  const initial: State = List();

  export const list = Async.handleAction<State, PostAction.FetchListPayload>(
    PostAction.FETCH_POST_LIST,
    (state: State, action) => action.payload || initial,
    initial
  );

  export const reducer = reduceReducer<State>(
    list
  );
}
