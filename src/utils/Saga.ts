import { call, put, take } from 'redux-saga/effects';
import { Async } from './Async';

export namespace Saga {
  export const asyncFork = <Entry, Mapped = any>(
    type: string,
    service: () => Promise<Entry>,
    mapper?: (data: Entry) => Mapped
  ) => function* () {
    while (true) {
      const action = yield take(type);
      try {
        let responseData = yield call(service);
        if (mapper) {
          responseData = mapper(responseData)
        }
        yield put(Async.action(action.type, responseData, Async.Status.RESOLVED));
      } catch (error) {
        yield put(Async.action(action.type, null, Async.Status.REJECTED));
      }
    }
  }
}