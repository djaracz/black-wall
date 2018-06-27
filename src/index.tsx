import * as React from "react";
import { Provider } from "react-redux";
import { Counter } from "./component/Counter/Counter";
import { store } from "./store";

export const Root = (): React.ReactNode => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
