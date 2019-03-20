/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import MyTab from './src/js/StackNavigator';

// console.disableYellowBox = true // 关闭全部黄色警告

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
