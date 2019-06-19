/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import GPSState from 'react-native-gps-state'
export default class App extends Component {

  componentWillMount() {
    GPSState.addListener((status) => {
      switch (status) {
        case GPSState.NOT_DETERMINED:
          alert('Please, allow the location, for us to do amazing things for you!')
          break;

        case GPSState.RESTRICTED:
          GPSState.openLocationSettings()
          break;

        case GPSState.DENIED:
          alert('It`s a shame that you do not allowed us to use location :(')
          break;

        case GPSState.AUTHORIZED_ALWAYS:
          //TODO do something amazing with you app
          break;

        case GPSState.AUTHORIZED_WHENINUSE:
          //TODO do something amazing with you app
          break;
      }
    })
    GPSState.requestAuthorization(GPSState.AUTHORIZED_WHENINUSE)
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 5,
  },
});
