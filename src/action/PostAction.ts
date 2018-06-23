import { Async } from '../utils/Async';
import { List } from 'immutable';
import { Post } from '../model/Post';

export namespace PostAction {
  export const FETCH_POST_LIST = 'FETCH_POST_LIST';
  export type FetchListPayload = List<Post.Type>;
  export const fetchList = () => Async.action<FetchListPayload>(FETCH_POST_LIST);
}
