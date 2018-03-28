import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import { rootReducer } from '../reducers';

declare const window: Window & {
  devToolsExtension: any,
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
};

const devToolsExtension: GenericStoreEnhancer = window.devToolsExtension ?
  window.devToolsExtension() : f => f;

const middleware: Array<any> = [thunk];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    devToolsExtension
  ) as GenericStoreEnhancer
);