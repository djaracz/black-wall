import { Proof } from '../../Utils/Proof';
import { PostService } from '../service';

export namespace Post {
  export type Type = Readonly<{
    Id: number;
    UserId: number;
    Body: string;
    Title: string;
  }>;

  export const create = (entry: PostService.Entry): Type => ({
    Id: entry.id,
    UserId: entry.userId,
    Body: entry.body,
    Title: entry.title,
  });

  const proof = Proof.create('Post model');

  export const getId = (type: Type): number => proof.notUndefined(type.Id);
  export const getUserId = (type: Type): number => proof.notUndefined(type.UserId);
  export const getBody = (type: Type): number => proof.notUndefined(type.Body);
  export const getTitle = (type: Type): number => proof.notUndefined(type.Title);
}
