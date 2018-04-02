import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { RootState } from '../../reducers';
import { CounterAction } from '../../actions/CounterAction';
import { styles } from './Counter.s';
import { CounterSelector } from '../../selectors/CounterSelector';

namespace Counter {
  export type DispatchProps = {
    increment: () => void;
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

const CounterPure = (props: Counter.Props) => (
  <View style={styles.view}>
    <Text style={styles.text}>counter: {props.value}</Text>
    <Button title="increment" onPress={props.increment} />
    <Button title="decrement" onPress={props.decrement} />
    <Button title="reset" onPress={props.reset} />
  </View>
);

export const Counter: React.ComponentClass<Counter.OwnProps> = connect(
  (state: RootState): Counter.StateProps => ({
    value: CounterSelector.selectValue(state)
  }),
  (dispatch: Dispatch<RootState>): Counter.DispatchProps => ({
    increment: () => dispatch(CounterAction.increment()),
    decrement: () => dispatch(CounterAction.decrement()),
    reset: () => dispatch(CounterAction.reset()),
    setValue: value => dispatch(CounterAction.setValue(value))
  })
)(CounterPure);
