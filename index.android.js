/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Barcode from './barcode/Barcode'

export default class ZBarCamera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Barcode
          onBarcodeRead={(data) => console.log(data)}
        />
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
  }
});

AppRegistry.registerComponent('ZBarCamera', () => ZBarCamera);
