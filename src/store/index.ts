import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import { rootSaga } from '../saga';
import { rootReducer } from '../reducer';

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

const middleware: Array<any> = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    devToolsExtension,
  ) as GenericStoreEnhancer
);

sagaMiddleware.run(rootSaga);
