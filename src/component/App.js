import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from "react-native";
import WelcomeScene from "../screen/WelcomeScene";
import Navigation from "./navigate/navigation";
import CovidInfo from "../screen/CovidInfo";
import RegisterScene from "../screen/RegisterScene";
import Geo from "./location/Location";
import LoginScene from "../screen/LoginScene";

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowWelcome: true
        }
    }
   async componentDidMount() {

        setTimeout(() => {
            this.setState({
                isShowWelcome: false
            })
        }, 2000)

//TODO:间隔一定时间进行一次
       // const res = await Geo.getCityByLocation();
      //  console.log("这次的城市地址是：", res);
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isShowWelcome ? <WelcomeScene/> : <Geo/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

// this.state.isShowWelcome ? <WelcomeScene/> : <TabNavigate/>
//    <Navigation>
//  <navigate/>
//  </Navigation>
