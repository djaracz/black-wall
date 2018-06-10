import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Counter } from './component/Counter/Counter';

export const Root = (): React.ReactNode => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
