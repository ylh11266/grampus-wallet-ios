import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch
} from 'react-native';
import { Button, WhiteSpace } from '@ant-design/react-native';
import DefaultPopup from '../Common/DefaultPopup';
import RNStorage from '../../Storage';
import { AppBaseColor, AppFontSize } from '../../Config';
export default class Assets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      visible: false
    }
  }

  static navigationOptions = {
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: 18 }}>域乎区块链</Text>,//对页面的配置
    tabBarLabel: '资产',
    headerRight: <View />,
    headerLeft: <View />,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../image/vote_tab.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
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
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          type={"primary"}
          size={"small"}
          onPress={() => {
            this.props.navigation.navigate("Unlock")
          }}
        >手势解锁</Button>
        <WhiteSpace size="sm" />
        <Button
          type={"primary"}
          size={"small"}
          onPress={() => {
            this.props.navigation.navigate("GenerateWallet")
          }}
        >创建钱包</Button>
        <WhiteSpace size="sm" />
        <Button
          type={"primary"}
          size={"small"}
          onPress={() => {
            this.props.navigation.navigate("Register")
          }}
        >登录</Button>
        <WhiteSpace size="sm" />
        <Button
          type={"primary"}
          size={"small"}
          onPress={() => {
            this.setState({
              visible: true
            })
          }}
        >弹窗</Button>
        <WhiteSpace size="sm" />
        <Switch
          value={this.state.switch}
          onValueChange={(v) => {
            this.setState({
              switch: !this.state.switch
            })
            console.log(v)
          }}
        />
        {
          this.state.visible
            ?
            <DefaultPopup />
            :
            null
        }
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
    paddingHorizontal: 10,
    paddingTop: 10
  }
});