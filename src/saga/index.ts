import { all, fork } from "redux-saga/effects";
import { PostSaga } from "./PostSaga";

export function* rootSaga() {
  yield all([fork(PostSaga.listAsync)]);
}
