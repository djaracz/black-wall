import { Post } from "../model/Post";
import { PostService } from "../service/PostService";

export namespace PostMapper {
  export const list = (array: PostService.Entry[]) =>
    array.map((entry: PostService.Entry) => Post.create(entry));
}
