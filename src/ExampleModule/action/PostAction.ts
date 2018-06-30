import { List } from 'immutable';

import { Async } from '../../Utils/Async';
import { Post } from '../model';

export namespace PostAction {
  export const POST_LIST = 'POST_LIST';
  export type ListPayload = List<Post.Type>;
  export const list = () => Async.action<ListPayload>(POST_LIST);
}
