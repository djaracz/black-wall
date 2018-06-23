import { PostService } from '../service/PostService';
import { PostReducer } from '../reducer/PostReducer';
import { PostAction } from '../action/PostAction';
import { PostMapper } from '../mapper/PostMapper';
import { Saga } from '../utils/Saga';

export namespace PostSaga {
  export const listAsync = Saga.asyncFork(
    PostAction.FETCH_POST_LIST,
    PostService.list,
    PostReducer.initial,
    PostMapper.list
  );
}
