import { PostAction } from "../action/PostAction";
import { PostMapper } from "../mapper/PostMapper";
import { PostService } from "../service/PostService";
import { Saga } from "../utils/Saga";

export namespace PostSaga {
  export const listAsync = Saga.asyncFork(PostAction.POST_LIST, PostService.list, PostMapper.list);
}
