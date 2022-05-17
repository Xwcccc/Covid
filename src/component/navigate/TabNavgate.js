import React from 'react';
import CovidInfo from "../../screen/CovidInfo";
import RiskScene from "../../screen/RiskScene";
import Temp from "../../screen/PersonalScene";

import { createBottomTabNavigator } from 'react-navigation-tabs';

const BottomNavigator = createBottomTabNavigator({
    covid: {
        screen: CovidInfo,//对应的页面组件，导航默认显示第一个
        navigationOptions: {
            title: '新冠',
            tabBarLabel: '新冠',
             }
    },
    risk: {
        screen:RiskScene,
        navigationOptions: {
            title: '风险',
            tabBarLabel: '风险',
            }
    },
    Personal: {
        screen: Temp,
        navigationOptions: {
            title: '个人',
            tabBarLabel: '个人',
             }
    }
}, {
    tabBarOptions: {
        showIcon: true,            // 是否显示选项卡的图标
        activeTintColor: '#081753', // 选中时状态颜色
        inactiveTintColor: '#919191', // 未选中状态颜色
        // activeBackgroundColor:'#2e2e2e',//选中的背景色
        style: {
            borderTopColor: 'red',
            height: 50
        },
    }
})

export default BottomNavigator;

//export default TabNavigator(
  //  {
    //    Covid:{
      //      screen:CovidInfo,
        //},
      //  Risk:{
        //    screen:RiskScene,
       // },
       // Personal:{
         //   screen:Temp,
      //  },
  //  }
//)
