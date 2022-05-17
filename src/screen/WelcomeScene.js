
import React, {Component} from "react";
import {Dimensions, Image, ImageBackground, Text, View} from "react-native";

const {width,height} = Dimensions.get("window")

export default class WelcomeScene extends Component{
    render() {
        return (
            <View>
                <ImageBackground source={require('../../assets/welcome.jpg')} style={{width,height}} />
            </View>
        )
    }
}
