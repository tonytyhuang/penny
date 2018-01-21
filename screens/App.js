import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

const receipts = [
  {
     storeName: "Indigo",
     date: "November 14, 2017",
     price: 24.60
  },
  {
    storeName: "Whole Foods Market",
    date: "January 7, 2018",
    price: 50.00
  }
 ]
 
 // implemented without image with header
 <Card>
     receipts.map((u, i) => {
       return (
         <View key={i} style={styles.receipts}>
           <Text style={styles.storeName}>{u.storeName}</Text>
           <Text style={styles.date}>{u.date}</Text>
           <Text style={styles.price}>{u.price}</Text>
         </View>
       );
     })
 </Card>
 
 // implemented without image without header, using ListItem component
  <Card containerStyle={{padding: 0}} >
   {
     receipts.map((u, i) => {
       return (
         <ListItem
           key={i}
           storeName={u.storeName}
           date={u.date}
           price={u.price}
         />
       );
     })
   }
 </Card>
<Card>
  title='HELLO WORLD'
  image={require('../images/pic2.jpg')}>
  <Text style={{marginBottom: 10}}>
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    fontFamily='Lato'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
 </Card>

AppRegistry.registerComponent(
  'penny',
  () => App);
