import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from '../reducer';
import { CounterAction } from '../action/CounterAction';
import { all, put, takeEvery, call } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';
import axios, { AxiosInstance } from 'axios';
import { ApiService } from '../service/ApiService';
import { apiClient } from '../service/apiClient';
import { RandomService } from '../service/RandomService';


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

export function* incrementAsync() {
  try {
    const res = yield call(RandomService.get);
    yield put({ type: CounterAction.INCREMENT });
  } catch (error) {
    console.warn(error);
    yield put({ type: CounterAction.DECREMENT });
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
