import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavgate from "./TabNavgate";
import WelcomeScene from "../../screen/WelcomeScene";
import LoginScene from "../../screen/LoginScene";
import RegisterScene from "../../screen/RegisterScene";
import CovidInfo from "../../screen/CovidInfo";
import RiskScene from '../../screen/RiskScene';
import PersonalScene from '../../screen/PersonalScene';
import {createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    //底部导航
    buttomNavigation: {
        screen: TabNavgate,
        navigationOptions: {
            headerShown: false,
        }
    },
    Welcome:{
        screen:WelcomeScene,
        navigationOptions:{
            title:"",
            tabBarLabel:""
        }
    },
    Login:{
        screen:LoginScene,
        navigationOptions:{
            title:"登陆",
            tabBarLabel:"登陆"
        }
    },
    Register:{
        screen:RegisterScene,
        navigationOptions:{
            title:"注册",
            tabBarLabel:"注册"
        }
    },
    Personal:{
        screen:PersonalScene,
        navigationOptions:{
           title:"个人信息",
           tabBarLabel:"个人信息"
       }
   },
   Covid:{
        screen:CovidInfo,
        navigationOptions:{
            title:"新冠信息",
            tabBarLabel:"新冠信息"
        }
    },
    Risk:{
        screen:RiskScene,
        navigationOptions:{
            title:"地区新冠风险",
            tabBarLabel:"地区新冠风险"
        }
    }
}, {
    initialRouteName:"Welcome",
});

export default createAppContainer(AppNavigator);
