import * as React from 'react';
import { compose } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { RootState } from '../../reducers';
import { CounterAction } from '../../actions/CounterAction';
import { styles } from './Counter.s';

namespace Counter {
  export type DispatchProps = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setValue: (value: number) => void;
  };
  export type StateProps = {
    counter: number | any;
  };
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

class CounterPure extends React.Component<Counter.Props> {
  handleIncrement = (): void => this.props.increment();
  handleDecrement = (): void => this.props.decrement();
  handleReset = (): void => this.props.reset();

  render(): React.ReactElement<any> {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>counter: {this.props.counter}</Text>
        <Button title="increment" onPress={this.handleIncrement} />
        <Button title="decrement" onPress={this.handleDecrement} />
        <Button title="reset" onPress={this.handleReset} />
      </View>
    );
  }
}

export const Counter: React.ComponentClass<Counter.OwnProps> = compose(
  connect(
    (state: RootState): Counter.StateProps => ({
      counter: state.counter.value
    }),
    (dispatch: Dispatch<RootState>): Counter.DispatchProps => ({
      increment: () => dispatch(CounterAction.increment()),
      decrement: () => dispatch(CounterAction.decrement()),
      reset: () => dispatch(CounterAction.reset()),
      setValue: value => dispatch(CounterAction.setValue(value))
    })
  )
)(CounterPure);
