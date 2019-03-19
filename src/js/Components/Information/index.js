import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { AppBaseColor, AppFontSize } from '../../Config';

export default class Infromation extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = {
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: 18 }}>域乎区块链</Text>,//对页面的配置
    tabBarLabel: '资讯',
    headerRight: <View />,
    headerLeft: <View />,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../image/information_tab.png')}
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
        <Text>信息</Text>
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