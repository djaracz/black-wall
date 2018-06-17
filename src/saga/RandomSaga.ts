import { RandomService } from '../service/RandomService';
import { RandomAction } from '../action/RandomAction';
import { Saga } from '../utils/Saga';

export namespace RandomSaga {
  // todo: mapper
  export const randomAsync = Saga.asyncFork(
    RandomAction.FETCH_POST,
    RandomService.list
  );
}
