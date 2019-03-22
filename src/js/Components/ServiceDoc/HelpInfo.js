import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
import { AppBaseColor, AppFontSize } from '../../Config';

const screen = Dimensions.get('window');

export default class HelpInfo extends Component {
  
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: 18 }}>如何导入钱包</Text>,
    headerRight: <View />,
    headerTitleStyle: {
      alignSelf: 'center'
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
    return <Text>导入钱包</Text>
  }
}

