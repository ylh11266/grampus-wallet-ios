import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
  NativeModules,
  Picker
} from 'react-native';
import { AppBaseColor, AppFontSize } from '../../Config';
import Loading from '../Common/Loading';  

// 获取当前设备高度，宽度
const screen = Dimensions.get('window');

// 计算StatusBar高度
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class Clause extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: AppFontSize.m_font}}>服务条款</Text>,
    headerRight: <View />,
    headerTitleStyle: {
      alignSelf:'center'
    },
    headerLeft: (
      <TouchableOpacity
        style={{width: 50, height: 55, justifyContent: 'center'}}
        activeOpacity={0.5}
        onPress={() => { navigation.goBack() }}
      >
        <Image
          source={require('../../../image/back.png')}
          style={[{ height: 20, width: 20, marginLeft: 10 }]}
        />
      </TouchableOpacity>
    ),
    headerTintColor: '#fff', // 返回按钮颜色
    headerStyle: {
      backgroundColor: AppBaseColor.s_blue,
      height: 50,
      elevation: 0,  // android
      shadowOffset: {width: 0, height: 0},  // ios (w 和 h 对应box-shadow x y 偏移)
      shadowOpacity: 0, // 透明度
    }
  });

  render() {
    return (
      <View>
        <Loading />
        <Text>服务条款</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
});