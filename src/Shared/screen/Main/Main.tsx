import * as React from 'react';
import { View } from 'react-native';
import { styles } from './Main.s';

namespace Main {
  export type DispatchProps = {};
  export type StateProps = {};
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

export const Main: React.SFC<Main.Props> = () => <View style={styles.main} />;
