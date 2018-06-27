import { List } from "immutable";
import reduceReducer from "reduce-reducers";
import { PostAction } from "../action/PostAction";
import { Post } from "../model/Post";
import { Async } from "../utils/Async";

export namespace PostReducer {
  export type State = List<Post.Type>;

  export const initial: State = List();

  export const list = Async.handleAction<State, PostAction.ListPayload>(
    PostAction.POST_LIST,
    (state: State, action) => action.payload || initial,
    initial,
  );

  export const reducer = reduceReducer<State>(list);
}
