import * as React from "react";
import { Text, View } from "react-native";
import { Link, NativeRouter, Route } from "react-router-native";
import { styles } from "./Main.s";

namespace Main {
  export type DispatchProps = {};
  export type StateProps = {};
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

const TempGenericView: React.SFC<{ children?: React.ReactElement<any>; text: string }> = (props) => (
  <View>
    <Text>{props.text}</Text>
  </View>
);

export const Main: React.SFC<Main.Props> = () => (
  <NativeRouter>
    <View style={styles.view}>
      <Link to="/" underlayColor="pink">
        <Text>view 1</Text>
      </Link>
      <Link to="/view2" underlayColor="pink">
        <Text>view 2</Text>
      </Link>
      <Link to="/view3" underlayColor="pink">
        <Text>view 3</Text>
      </Link>
      <Route path="/" render={() => <TempGenericView text="default" />} exact={true} />
      <Route path="/view2" render={() => <TempGenericView text="view2" />} exact={true} />
      <Route path="/view3" render={() => <TempGenericView text="view3" />} exact={true} />
    </View>
  </NativeRouter>
);
