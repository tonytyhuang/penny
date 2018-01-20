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
                    source={require('/react-native/img/favicon.png')}
                />
                <Image
                    source={require('/react-native/img/favicon.png')}
                />
                <Image
                    source={require('/react-native/img/favicon.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  iconsize: {
    height: 15,
  }
});

AppRegistry.registerComponent(
  'penny',
  () => NavBar);