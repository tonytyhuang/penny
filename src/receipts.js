import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View
} from 'react-native';

export default class Receipts extends Component<{}> {
    render() {
        return (
            <ScrollView>
                <Text style={styles.eggtext}>How to make egg</Text>
                <Text style={styles.eggtext}>1. Get 3/4 inch dozen egg</Text>
                <Text style={styles.eggtext}>2. Krakin egg</Text>
                <Text style={styles.eggtext}>3. Spice it up</Text>
                <Text style={styles.eggtext}>4. Fry em eggers</Text>
                <Text style={styles.eggtext}>5. Plate that egg like ya mean it</Text>
                <Text style={styles.eggtext}>6. Congreggulations, enjoy egg</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  eggtext: {
    fontSize: 12,
  }
});

AppRegistry.registerComponent(
  'penny',
  () => Receipts);