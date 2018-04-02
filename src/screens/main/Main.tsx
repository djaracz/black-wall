import * as React from 'react';
import { compose } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { View } from 'react-native';
import { RootState } from '../../reducers';
import { styles } from './Main.s';

namespace Main {
  export type DispatchProps = {};
  export type StateProps = {};
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

class MainPure extends React.Component<Main.Props> {
  render(): React.ReactElement<any> {
    return (
      <View style={styles.view}>
      </View>
    );
  }
}

export const Main: React.ComponentClass<Main.OwnProps> = compose(
  connect(
    (state: RootState): Main.StateProps => ({}),
    (dispatch: Dispatch<RootState>): Main.DispatchProps => ({})
  )
)(MainPure);
