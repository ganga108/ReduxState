

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import configureStore from './src/Redux/configStore';
import { Provider } from 'react-redux'
import Screen from './src/Screen';


export default class App extends Component {
  render() {

    const store = configureStore()
    
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    );
  }
}


