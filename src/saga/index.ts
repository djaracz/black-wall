import { all, fork } from 'redux-saga/effects';
import { RandomSaga } from './RandomSaga';

export function* rootSaga() {
  yield all([
    fork(RandomSaga.randomAsync)
  ]);
}