import { call, put, take } from 'redux-saga/effects';
import { Async } from './Async';
import { AsyncSelector } from '../selectors/AsyncSelector';

export namespace Saga {
  export const asyncFork = <State, Entry, Mapped = any>(
    type: string,
    service: () => Promise<Entry>,
    mapper?: (data: Entry) => Mapped,
  ) => function* () {
    while (true) {
      const action = yield take(AsyncSelector.selectRequested(type));
      try {
        const responseData: Entry = yield call(service);
        yield put(
          Async.action(
            action.meta.type,
            mapper ? mapper(responseData) : responseData,
            Async.Status.RESOLVED
          )
        );
      } catch (error) {
        yield put(
          Async.action(
            action.meta.type,
            error,
            Async.Status.REJECTED
          )
        );
      }
    }
  }
}