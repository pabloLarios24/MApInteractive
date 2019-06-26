/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro'
import InitialScene from './src/HelloWorldSceneAR'
import {NotIdStack} from './src/Navigation/Stack/StackMaster'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<ViroARSceneNavigator 
          apiKey={"71F86416-C7DA-48DA-8090-7A6EE13000CA"}
        initialScene={{scene: InitialScene}}/>*/}
        <NotIdStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
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
