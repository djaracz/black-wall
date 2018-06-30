import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './Shared/store';
import { Counter } from './ExampleModule/component/Counter';

export const Root = (): React.ReactNode => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
