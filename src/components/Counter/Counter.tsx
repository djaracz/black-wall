import * as React from 'react';
import { compose } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { RootState } from '../../reducers';
import { CounterAction } from '../../actions/CounterAction';
import { styles } from './Counter.s';
import { CounterSelector } from '../../selectors/CounterSelector';

namespace Counter {
  export type DispatchProps = {
    increment: () => void;
    incrementAsync: () => void;
    decrement: () => void;
    reset: () => void;
    setValue: (value: number) => void;
  };
  export type StateProps = {
    value: CounterSelector.SelectValue;
  };
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

class CounterPure extends React.Component<Counter.Props> {
  handleIncrement = (): void => this.props.increment();
  handleIncrementAsync = (): void => this.props.incrementAsync();
  handleDecrement = (): void => this.props.decrement();
  handleReset = (): void => this.props.reset();

  render(): React.ReactElement<any> {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>counter: {this.props.value}</Text>
        <Button title="increment" onPress={this.handleIncrement} />
        <Button title="incrementAsync" onPress={this.handleIncrementAsync} />
        <Button title="decrement" onPress={this.handleDecrement} />
        <Button title="reset" onPress={this.handleReset} />
      </View>
    );
  }
}

export const Counter: React.ComponentClass<Counter.OwnProps> = compose(
  connect(
    (state: RootState): Counter.StateProps => ({
      value: CounterSelector.selectValue(state)
    }),
    (dispatch: Dispatch<RootState>): Counter.DispatchProps => ({
      increment: () => dispatch(CounterAction.increment()),
      incrementAsync: () => dispatch(CounterAction.incrementAsync()),
      decrement: () => dispatch(CounterAction.decrement()),
      reset: () => dispatch(CounterAction.reset()),
      setValue: value => dispatch(CounterAction.setValue(value)),
    })
  )
)(CounterPure);
