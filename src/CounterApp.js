/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: 200 }}>
          <TouchableOpacity onPress={this.props.onIncreaseCounter}>
            <Text style={{ fontSize: 20, padding: 10 }}>Increasre</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 20, padding: 10 }}>{this.props.counter}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onDecreaseCounter}>
            <Text style={{ fontSize: 20, padding: 10 }}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStoreToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    onDecreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(CounterApp);

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
