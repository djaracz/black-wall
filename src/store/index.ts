import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from '../reducers';
import { CounterAction } from '../actions/CounterAction';
import { all, put, takeEvery, call } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';
import axios, { AxiosInstance } from 'axios';


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

// const testApi = (): Promise<any> => fetch('https://jsonplaceholder.typicode.com/postss/1')
//   .then(response => response)
//   .catch(error => error);

// todo: env
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const testApi = (): Promise<any> => apiClient.get('https://jsonplaceholder.typicode.com/postss/1')
  .then((response: AxiosResponse) => response)
  .catch((error: AxiosError) => {
    throw error;
  });

export function* incrementAsync() {
  try {
    const res = yield call(testApi);
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
