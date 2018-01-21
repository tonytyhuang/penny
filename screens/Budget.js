import React, { Component } from 'react';
import {
    StyleSheet,
    AppRegistry,
    ScrollView,
    Image,
    View
} from 'react-native';

class Budget extends Component {
    render() {
        return(
            <Text>1, 2, 3</Text>
        );
    };
}

AppRegistry.registerComponent(
    'penny',
    () => Budget);
