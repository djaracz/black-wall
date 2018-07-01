import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './Shared/store';
import { Example } from './ExampleModule/screen/Example';
// import { Main } from './Shared/screen/Main';

export const Root = (): React.ReactNode => (
  <Provider store={store}>
    <Example />
  </Provider>
);
