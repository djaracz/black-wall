import { call, put, take } from 'redux-saga/effects';
import { Async } from './Async';
import { TypeSelector } from '../selectors/TypeSelector';

export namespace Saga {
  function* putResolved(type: string, payload: any) {
    yield put(
      Async.action(
        type,
        payload,
        Async.Status.RESOLVED
      )
    )
  }

  function* putRejected(type: string, payload: any) {
    yield put(
      Async.action(
        type,
        payload,
        Async.Status.REJECTED
      )
    )
  }

  export const asyncFork = <State, Entry, Mapped = any>(
    type: string,
    service: () => Promise<Entry>,
    mapper?: (data: Entry) => Mapped,
  ) => function* () {
    while (true) {
      const action = yield take(TypeSelector.selectRequested(type));
      try {
        const responseData: Entry = yield call(service);
        yield putResolved(
          action.meta.type,
          mapper ? mapper(responseData) : responseData
        );
      } catch (error) {
        yield putRejected(
          action.meta.type,
          error
        );
      }
    }
  }
}