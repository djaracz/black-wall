import { CounterAction } from '../action/CounterAction';
import { call, put } from 'redux-saga/effects';
import { RandomService } from '../service/RandomService';

export namespace IncrementSaga {
  export function* incrementAsync() {
    try {
      const res = yield call(RandomService.list);
      const res2 = yield call(RandomService.get('1'));
      console.log(res)
      console.log(res2)
      yield put({ type: CounterAction.INCREMENT });
    } catch (error) {
      console.warn(error);
      yield put({ type: CounterAction.DECREMENT });
    }
  }
}