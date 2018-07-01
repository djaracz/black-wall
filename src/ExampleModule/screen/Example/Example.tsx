import * as React from 'react';
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { styles } from './Example.s';
import { createStackNavigator, NavigationScreenProps } from 'react-navigation';

const One: React.SFC<NavigationScreenProps> = (props: NavigationScreenProps) => {
  const param: string = props.navigation.getParam('param', 'default param value');
  const paramNotExisting: string = props.navigation.getParam(
    'param_not_existing',
    'default param value',
  );
  return (
    <View style={{ flex: 4, backgroundColor: 'pink', alignItems: 'center', width: '100%' }}>
      <Text>{param}</Text>
      <Text>{paramNotExisting}</Text>
    </View>
  );
};

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

const Home: React.SFC<NavigationScreenProps> = (props: NavigationScreenProps) => (
  <View style={styles.main}>
    <Text>YOLLO</Text>
    <Button
      title="Go to one"
      onPress={() =>
        props.navigation.navigate(Route.ONE, {
          param: 'test',
        })
      }
    />
  </View>
);

export namespace Route {
  export const HOME = 'HOME';
  export const ONE = 'ONE';
  export const TWO = 'TWO';
  export const TRI = 'TRI';
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
  },
);
