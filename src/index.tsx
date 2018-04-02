import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Main } from './screens/main/Main';

export const Root = (): React.ReactNode => (
  <Provider store={store}>
    <Main />
  </Provider>
);
