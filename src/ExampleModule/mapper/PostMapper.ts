import { Post } from '../model';
import { PostService } from '../service';

export namespace PostMapper {
  export const list = (array: PostService.Entry[]) => array.map(Post.create);
}
