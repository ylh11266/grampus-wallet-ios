import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeModules
} from 'react-native';
import { Button, WhiteSpace } from '@ant-design/react-native';
import { AppBaseColor, AppFontSize } from '../../Config';

export default class GenerateWallet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      priv_key: '',
      pub_key: ''
    }
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: AppFontSize.m_font }}>创建钱包</Text>,
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

  render() {
    return (
      <View style={styles.container}>
        <Text>address: {this.state.address}</Text>
        <WhiteSpace size="sm" />
        <Text>priv_key: {this.state.priv_key}</Text>
        <WhiteSpace size="sm" />
        <Text>pub_key: {this.state.pub_key}</Text>
        <WhiteSpace size="sm" />
        <Button
          type={"primary"}
          size={"small"}
          onPress={() => {
            NativeModules.web3go.generateWallet(value => {
              let arr = value.split("&&")
              this.setState({
                address: arr[0],
                priv_key: arr[1],
                pub_key: arr[2]
              })
            })
          }}
        >generate wallet</Button>
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