import { call, put, take } from 'redux-saga/effects';
import { Async } from './Async';

export namespace Saga {
  export const asyncFork = <State, Entry, Mapped = any>(
    type: string,
    service: () => Promise<Entry>,
    initialState: State,
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
        yield put(Async.action(action.type, initialState, Async.Status.REJECTED));
      }
    }
  }
}