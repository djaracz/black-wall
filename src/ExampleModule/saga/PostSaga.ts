import { Saga } from '../../Utils/Saga';
import { PostAction } from '../action';
import { PostMapper } from '../mapper';
import { PostService } from '../service';

export namespace PostSaga {
  export const listAsync = Saga.asyncFork(PostAction.POST_LIST, PostService.list, PostMapper.list);
}
