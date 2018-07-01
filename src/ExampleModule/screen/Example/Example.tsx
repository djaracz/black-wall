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

namespace Main {
  export type DispatchProps = {};
  export type StateProps = {};
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

const One: React.SFC<any> = () => (
  <View style={{ flex: 4, backgroundColor: 'pink', alignItems: 'center', width: '100%' }}>
    <Text>One</Text>
  </View>
);

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

export const Example: React.SFC<Main.Props> = () => <View style={styles.main} />;
