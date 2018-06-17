import { Async } from '../utils/Async';

export namespace RandomAction {
  export const FETCH_POST = 'FETCH_POST';
  export const fetchPost = () => Async.action(FETCH_POST);
}
