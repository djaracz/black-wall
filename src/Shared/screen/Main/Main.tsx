import * as React from 'react';
import { Text, View } from 'react-native';
import { Link, NativeRouter, Route } from 'react-router-native';
import { styles } from './Main.s';

namespace Main {
  export type DispatchProps = {};
  export type StateProps = {};
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

const TempNavigation: React.SFC<{}> = () => (
  <View style={{}}>
    <Link to="/" underlayColor="pink" />
  </View>
);

export const Main: React.SFC<Main.Props> = () => (
  <NativeRouter>
    <View style={styles.main}>
      <TempNavigation />
      {/*<Route path="/" component={} exact={true} />*/}
    </View>
  </NativeRouter>
);
