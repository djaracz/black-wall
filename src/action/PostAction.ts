import { Async } from '../utils/Async';
import { List } from 'immutable';
import { Post } from '../model/Post';

export namespace PostAction {
  export const POST_LIST = 'POST_LIST';
  export type ListPayload = List<Post.Type>;
  export const list = () => Async.action<ListPayload>(POST_LIST);
}
