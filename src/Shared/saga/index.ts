import { all, fork } from 'redux-saga/effects';

import { PostSaga } from '../../ExampleModule/saga';

export function* rootSaga() {
  yield all([fork(PostSaga.listAsync)]);
}
