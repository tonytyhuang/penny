import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native';

export default class NavBar extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                   style={styles.iconsize} source={require('./img/piggybank.png')} resizeMode="contain"
                />
                <Image
                   style={styles.iconsize} source={require('./img/home.png')} resizeMode="contain"
                />
                <Image
                   style={styles.iconsize} source={require('./img/barchart.png')} resizeMode="contain"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  iconsize: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});

AppRegistry.registerComponent(
  'penny',
  () => NavBar);