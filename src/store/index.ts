import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware, delay } from 'redux-saga';
import { rootReducer } from '../reducers';
import { all, put, takeEvery, call, fork } from 'redux-saga/effects'
import { CounterAction } from '../actions/CounterAction';

/**
 * Redux devtools
 */
declare const window: Window & {
  devToolsExtension: any,
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
};

const devToolsExtension: GenericStoreEnhancer = window.devToolsExtension ?
  window.devToolsExtension() : f => f;

/**
 * Saga's middleware
 */
const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();

const test = (): Promise<any> => {
  return fetch('https://jsonplaceholder.typicode.com/postss/1')
};

export function* incrementAsync() {
  try {
    const res = yield call(test);
    yield put({ type: CounterAction.INCREMENT });
  } catch (error) {
    yield put({ type: CounterAction.INCREMENT });
  }
}

export function* rootSaga() {
  yield all([
    takeEvery('INCREMENT_ASYNC', incrementAsync)
  ]);
}

const middleware: Array<any> = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    devToolsExtension
  ) as GenericStoreEnhancer
);

sagaMiddleware.run(rootSaga);
