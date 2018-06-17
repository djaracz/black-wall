import { all, takeEvery } from 'redux-saga/effects';
import { IncrementSaga } from './IncrementSaga';

export function* rootSaga() {
  yield all([
    takeEvery('INCREMENT_ASYNC', IncrementSaga.incrementAsync)
  ]);
}