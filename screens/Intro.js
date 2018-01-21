import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

export default class Intro extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.introbackground}>
                <View style={styles.introbackground}>
                    <Image
                    style={styles.logosize} source={require('./../src/img/logo.png')} resizeMode="contain"
                    />
                </View>
                <View style={styles.introrow}>
                    <View style={styles.loginbackground}>
                        <Button
                            style={styles.loginform}
                            onPress={() => {
                                ;
                            }}
                            title="Login"
                            color="#333333"
                        />
                    </View>
                    <View style={styles.signupbackground}>
                        <Button
                            style={styles.loginform}
                            onPress={() => {
                                ;
                            }}
                            title="Sign Up"
                            color="#333333"
                        />
                    </View>
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
  introrow: {
    flexDirection: 'row',
    height: 150,
  },
  loginbackground: {
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: '#C8E4D1',
    flex: 1,
  },
  signupbackground: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#8BD8B1',
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
      fontSize: 50,
  }
});
