import { PostService } from '../service/PostService';
import { Post } from '../model/Post';

export namespace PostMapper {
  export const list = (array: PostService.Entry[]) => array
    .map((entry: PostService.Entry) => Post.create(entry));
}