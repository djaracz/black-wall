import * as React from "react";
import { Button, Text, View } from "react-native";
import { connect, Dispatch } from "react-redux";
import { compose } from "redux";
import { CounterAction } from "../../action/CounterAction";
import { PostAction } from "../../action/PostAction";
import { RootState } from "../../reducer";
import { CounterSelector } from "../../selectors/CounterSelector";
import { styles } from "./Counter.s";

namespace Counter {
  export interface DispatchProps {
    increment: () => void;
    fetchAsync: () => void;
    decrement: () => void;
    reset: () => void;
    setValue: (value: number) => void;
  }
  export interface StateProps {
    value: CounterSelector.SelectValue;
  }
  export interface OwnProps {}
  export type Props = StateProps & DispatchProps & OwnProps;
}

class CounterPure extends React.Component<Counter.Props> {
  public handleIncrement = (): void => this.props.increment();
  public handleFetchAsync = (): void => this.props.fetchAsync();
  public handleDecrement = (): void => this.props.decrement();
  public handleReset = (): void => this.props.reset();

  public render(): React.ReactElement<any> {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>counter: {this.props.value}</Text>
        <Button title="increment" onPress={this.handleIncrement} />
        <Button title="decrement" onPress={this.handleDecrement} />
        <Button title="reset" onPress={this.handleReset} />
        <Button title="fetch async" onPress={this.handleFetchAsync} />
      </View>
    );
  }
}

export const Counter: React.ComponentClass<Counter.OwnProps> = compose(
  connect(
    (state: RootState): Counter.StateProps => ({
      value: CounterSelector.select(state),
    }),
    (dispatch: Dispatch<RootState>): Counter.DispatchProps => ({
      increment: () => dispatch(CounterAction.increment()),
      fetchAsync: () => dispatch(PostAction.list()),
      decrement: () => dispatch(CounterAction.decrement()),
      reset: () => dispatch(CounterAction.reset()),
      setValue: (value) => dispatch(CounterAction.setValue(value)),
    }),
  ),
)(CounterPure);
