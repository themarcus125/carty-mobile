import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
