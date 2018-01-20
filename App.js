import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Receipts from './receipts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.bluebackground1}>
        <View style={styles.bluebackground1} />
        <View style={styles.bluebackground2} />
        <View style={styles.bluebackground3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  bluebackground1: {
    backgroundColor: '#333333',
    flex: 1,
  },
  bluebackground2: {
    backgroundColor: 'skyblue',
    flex: 2,
  },
  bluebackground3: {
    backgroundColor: '#333333',
    flex: 3,
  }
});
