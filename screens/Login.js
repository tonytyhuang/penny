import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button
} from 'react-native';

export default class Login extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.introbackground}>
                <View style={styles.introbackground}>
                    <Image
                    style={styles.logosize} source={require('./src/img/logo.png')} resizeMode="contain"
                    />
                </View>
                <View style={styles.introbackground}>
                    <TextInput
                        style={styles.loginform}
                        placeholder="Username"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <TextInput
                        style={styles.loginform}
                        placeholder="Password"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Button
                        onPress={() => {
                            ;
                        }}
                        title="Enter"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  introbackground: {
    backgroundColor: '#FEEDA4',
    flex: 1,
  },
  logosize: {
    flex: 1,
    height: undefined,
    width: undefined,
    marginBottom: 25,
  },
  loginform: {
      alignSelf: 'center',
      height: 50,
      fontSize: 20,
      color: '#333333',
  }
});
