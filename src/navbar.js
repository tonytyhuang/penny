import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterTabsIconExample extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#FEEDA4'}}>
                <Content />
                <Footer style={{backgroundColor: '#FEEDA4'}}>
                    <FooterTab>
                        <Button>
                            <Image
                                style={styles.iconsize} source={require('./img/piggybank.png')} resizeMode="contain"
                            />
                        </Button>
                        <Button>
                            <Image
                                style={styles.iconsize} source={require('./img/home.png')} resizeMode="contain"
                            />
                        </Button>
                        <Button active>
                            <Image
                                style={styles.iconsize} source={require('./img/barchart.png')} resizeMode="contain"
                            />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  iconsize: {
    flex: 1,
    height: 25,
    width: 25
  }
});

AppRegistry.registerComponent(
  'penny',
  () => NavBar);