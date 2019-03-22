import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button, WhiteSpace, InputItem } from '@ant-design/react-native';
import { AppBaseColor, AppFontSize } from '../../Config';
var countdown = 60;
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultBtnText: "获取验证码",
      isDisabled: false
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: AppFontSize.m_font }}>注册</Text>,
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

  componentDidMount() {
    if (countdown > 0 && countdown < 60) {
      this.setState({
        isDisabled: true,
        defaultBtnText: "重新发送(" + countdown + "s)"
      })
      countdown--;
      this.settime();
    } else {
      this.setState({
        isDisabled: false,
        defaultBtnText: "获取验证码"
      })
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  settime() {
    if (countdown == 0) {
      countdown = 60;
      this.setState({
        isDisabled: false,
        defaultBtnText: "获取验证码"
      })
    } else {
      this.setState({
        isDisabled: true,
        defaultBtnText: "重新发送(" + countdown + "s)"
      })
      countdown--;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.settime()
      }, 1000)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <InputItem
          clear
          type="phone"
          value={this.state.phone}
          onChange={value => {
            this.setState({
              phone: value,
            });
          }}
          placeholder="phone"
        >
          手机号：
          </InputItem>
        <WhiteSpace size="sm" />
        <InputItem
          clear
          type="number"
          value={this.state.number}
          onChange={value => {
            this.setState({
              number: value,
            });
          }}
          placeholder="number"
        >
          验证码：
          </InputItem>
        <WhiteSpace size="sm" />
        <Button
          type={"primary"}
          size={"small"}
          disabled={this.state.isDisabled}
          onPress={() => {
            this.settime();
          }}
        >{this.state.defaultBtnText}</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 10
  }
});