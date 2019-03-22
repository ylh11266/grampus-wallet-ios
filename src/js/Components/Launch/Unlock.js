import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { AppBaseColor, AppFontSize } from '../../Config';
import PasswordGesture from 'react-native-gesture-password';
var Password1 = '';
export default class Unlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Please input your password.',
      status: 'normal'
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: AppFontSize.m_font }}>手势解锁</Text>,
    headerRight: <View />,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    headerTintColor: '#fff', // 返回按钮颜色
    headerStyle: {
      backgroundColor: AppBaseColor.s_blue,
      height: 50,
      elevation: 0,  // android
      shadowOffset: { width: 0, height: 0 },  // ios (w 和 h 对应box-shadow x y 偏移)
      shadowOpacity: 0, // 透明度
    }
  });

  onEnd(password) {
    if (Password1 === '') {
      // The first password
      Password1 = password;
      this.setState({
        status: 'normal',
        message: 'Please input your password secondly.'
      });
    } else {
      // The second password
      if (password === Password1) {
        this.setState({
          status: 'right',
          message: 'Your password is set to ' + password
        });

        Password1 = '';
        // your codes to close this view
        alert('ok')
      } else {
        this.setState({
          status: 'wrong',
          message: 'Not the same, try again.'
        });
      }
    }
  }
  onStart() {
    if (Password1 === '') {
      this.setState({
        message: 'Please input your password.'
      });
    } else {
      this.setState({
        message: 'Please input your password secondly.'
      });
    }
  }

  render() {
    return (
      <PasswordGesture
        ref='pg'
        status={this.state.status}
        message={this.state.message}
        onStart={() => this.onStart()}
        onEnd={(password) => this.onEnd(password)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10
  }
});