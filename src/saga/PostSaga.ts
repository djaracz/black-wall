import { PostService } from '../service/PostService';
import { PostAction } from '../action/PostAction';
import { PostReducer } from '../reducer/PostReducer';
import { Saga } from '../utils/Saga';

export namespace PostSaga {
  // todo: mapper
  export const listAsync = Saga.asyncFork(
    PostAction.FETCH_POST_LIST,
    PostService.list,
    PostReducer.initial
  );
}
