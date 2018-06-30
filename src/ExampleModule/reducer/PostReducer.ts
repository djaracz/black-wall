import { List } from 'immutable';
import { AnyAction } from 'redux';
import reduceReducer from 'reduce-reducers';

import { Async } from '../../Utils/Async';
import { Post } from '../model';
import { PostAction } from '../action';

export namespace PostReducer {
  export type State = List<Post.Type>;

  export const initial: State = List();

  export const list = Async.handleAction<State, PostAction.ListPayload>(
    PostAction.POST_LIST,
    (state: State, action: AnyAction) => action.payload,
    initial,
  );

  export const reducer = reduceReducer<State>(list);
}
