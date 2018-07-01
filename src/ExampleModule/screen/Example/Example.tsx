import * as React from 'react';
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { styles } from './Example.s';
import { createStackNavigator, NavigationScreenProps, SafeAreaView } from 'react-navigation';

export namespace Route {
  export const HOME = 'HOME';
  export const ONE = 'ONE';
  export const TWO = 'TWO';
  export const TRI = 'TRI';
}

class One extends React.Component<NavigationScreenProps> {
  public static navigationOptions = (props) => {
    console.log(props);
    return {
      title: props.navigation.getParam('param', 'Default name'),
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <Button onPress={() => props.navigation.goBack} title="Info" color="tomato" />,
    };
  }

  public render() {
    const param: string = this.props.navigation.getParam('param', 'default param value');
    const paramNotExisting: string = this.props.navigation.getParam(
      'param_not_existing',
      'default param value',
    );

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate(Route.TRI)}
          color="blue"
        />
      </SafeAreaView>
    );

    // return (
    //   <View style={{ flex: 4, backgroundColor: 'pink', alignItems: 'center', width: '100%' }}>
    //     <Text>{param}</Text>
    //     <Text>{paramNotExisting}</Text>
    //     <Button title="Update param" onPress={this.updateTitle}/>
    //   </View>
    // );
  }

  private updateTitle = () => this.props.navigation.setParams({ param: 'Updated' });
}

const Four: React.SFC<any> = () => (
  <View style={{ flex: 4, backgroundColor: 'pink', alignItems: 'center', width: '100%' }} />
);

const Tri: React.SFC<any> = () => {
  const renderItem = (item: any) => <Text>{item.item.key}</Text>;
  return (
    <View style={{ flex: 4, backgroundColor: 'pink', alignItems: 'center', width: '100%' }}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

const Two: React.SFC<any> = (props) => (
  <View style={{ flex: 4, backgroundColor: 'pink', width: '100%' }}>
    <TouchableNativeFeedback
      onPressIn={() => console.log('onpress IN')}
      delayLongPress={2000}
      onLongPress={() => console.log('longPress')}
      onPress={() => console.log('onpress')}
      onAcccessibilityTap={() => console.log('onAcccessibilityTap')}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <Text>yolo</Text>
    </TouchableNativeFeedback>
    <TextInput />
    <ScrollView>
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" color="green" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
      <Button title="Button" onPress={() => Alert.alert('title', 'message')} />
    </ScrollView>
  </View>
);

class Home extends React.Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: Route.HOME,
  };

  public render() {
    return (
      <View style={styles.main}>
        <Text>YOLLO</Text>
        <Button title="Go to one" onPress={this.goTo(Route.ONE, { param: 'Toolbar name' })} />
      </View>
    );
  }

  private goTo = (route: string, params: any = {}) => () =>
    this.props.navigation.navigate(route, params)
}

export const Example = createStackNavigator(
  {
    [Route.HOME]: {
      screen: Home,
    },
    [Route.ONE]: {
      screen: One,
    },
    [Route.TWO]: {
      screen: Two,
    },
    [Route.TRI]: {
      screen: Tri,
    },
  },
  {
    initialRouteName: Route.HOME,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
