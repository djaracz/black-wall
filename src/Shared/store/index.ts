import { applyMiddleware, compose, createStore, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from '../reducer';
import { rootSaga } from '../saga';

/**
 * Redux devtools
 */
declare const window: Window & {
  devToolsExtension: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

const devToolsExtension: GenericStoreEnhancer = window.devToolsExtension
  ? window.devToolsExtension()
  : (f) => f;

/**
 * Saga's middleware
 */
const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();

const middleware: any[] = [sagaMiddleware];

export const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware),
  devToolsExtension,
) as GenericStoreEnhancer);

sagaMiddleware.run(rootSaga);
