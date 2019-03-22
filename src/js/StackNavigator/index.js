/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import Assets from '../Components/Assets';
import Service from '../Components/Service';
import Mine from '../Components/Mine';
import NativeMethod from '../Components/Mine/NativeMethod';
import Unlock from '../Components/Launch/Unlock';
import GenerateWallet from '../Components/Launch/GenerateWallet';
import Register from '../Components/Launch/Register';

const Tab = createBottomTabNavigator({
  //每一个页面的配置
  Assets: {
    screen: Assets
  },
  Service: {
    screen: Service
  },
  Mine: {
    screen: Mine
  }
}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
      //Android属性
      upperCaseLabel: false,//是否使标签大写，默认为true
      //共有属性
      showIcon: true,//是否显示图标，默认关闭
      showLabel: true,//是否显示label，默认开启
      activeTintColor: '#1c267d',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
      style: { //TabNavigator 的背景颜色
        backgroundColor: 'white',
        height: 55,
      },
      indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
        height: 0,
      },
      labelStyle: {//文字的样式
        fontSize: 13,
        marginTop: -5,
        marginBottom: 5
      },
      iconStyle: {//图标的样式
        marginBottom: 5
      }
    },
  });

Tab.navigationOptions = ({ navigation }) => {
  const component = Tab.router.getComponentForState(navigation.state)
  if (typeof component.navigationOptions === 'function') {
    return component.navigationOptions({ navigation })
  }
  return component.navigationOptions
}
/*
 * 初始化StackNavigator
 */
const Navi = createStackNavigator({
  Tab: {
    screen: Tab,
  },
  NativeMethod: {
    screen: NativeMethod
  },
  Unlock: {
    screen: Unlock
  },
  GenerateWallet: {
    screen: GenerateWallet
  },
  Register: {
    screen: Register
  }
},
  {
    transitionConfig: () => ({ // 修改页面跳转动画方向
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
      transitionSpec: {
        duration: 250
      },
    }),
  }
);

export default class MyTab extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Navi />
  }

}
