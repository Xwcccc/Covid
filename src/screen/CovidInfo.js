
import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text, View
} from 'react-native';

//TODO:绑定covid_state的状态变化
let covid_state = "save";
let message = "null";
export default class CovidInfo extends Component {
    const
    saveMessage =
        "您好，近十四天您的活动范围为【xxx省xxx市】，未曾接触已记录的新冠阳性确诊者；\n\n同时，您并没有确诊阳性的核酸结果。由此可推断近14天您途径的轨迹路径安全\n"
    const
    contactsMessage =
        "您于xxx时间xxx地点于新冠确诊者近距离接触 ，已列入密接者行列。\n\n收到此通知，请停留在原地切勿乱跑，并即刻拨打xxx疾控中心电话xxxxxxxxxxx上报情况，违者将承担一定的法律责任。"
    const
    confirmedMessage =
        "据医疗机构上报，您xxx时间xxx地点进行核酸检测的结果呈现阳性。\n\n收到此通知，请停留在原地切勿乱跑，并即刻拨打xxx疾控中心电话xxxxxxxxxxx上报情况，违者将承担一定的法律责任。"

    render() {

        if(covid_state==="covid"){
            message = this.confirmedMessage;
        }else{
            message = (covid_state==="contacts")?this.contactsMessage:this.saveMessage;
        }

        return (
            <ImageBackground
                style={styles.container}
                resizeMode="cover"
                source={require('../../assets/register.jpg')}
            >
                <View style={styles.bgText}>
                    <Text style={styles.btText}>
                        {message}
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    bgText: {
        flex:1,
        width:320,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btText: {
        fontFamily:"KaiTi",
        color: '#000000',
        fontSize: 28,
    }
});
