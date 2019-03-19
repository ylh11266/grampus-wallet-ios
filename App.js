/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import MyTab from './src/js/StackNavigator';


console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var { height, width } = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  _renderDom() {
    return <MyTab />
  }

  render() {
    return this._renderDom()
  }
}
