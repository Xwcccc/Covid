
import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button,
    Image,
    ImageBackground
} from 'react-native';
//只改动了组件名字
export default class LoginScene extends Component {

    username = '';  //保存用户名
    password = '';  //保存密码

    render() {
        return (
            <ImageBackground
                style={styles.container}
                resizeMode="cover"
                source={require('../../assets/register.jpg')}
            >
                <TouchableOpacity  //用可点击的组件作为背景
                    activeOpacity={1.0}  //设置背景被点击时的透明度改变值
                    onPress={this.blurTextInput}  //添加点击事件
                >
                    <View
                        style={styles.inputBox}>
                        <TextInput
                            ref="username"  //设置描述
                            onChangeText={this.onUsernameChanged}  //添加值改变事件
                            style={styles.input}
                            autoCapitalize='none'  //设置首字母不自动大写
                            underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                            placeholderTextColor={'#ccc'}  //设置占位符颜色
                            placeholder={'用户名'}  //设置占位符
                        />
                    </View>
                    <View
                        style={styles.inputBox}>
                        <TextInput
                            ref="password"  //设置描述
                            onChangeText={this.onPasswordChanged}  //添加值改变事件
                            style={styles.input}
                            autoCapitalize='none'  //设置首字母不自动大写
                            underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                            secureTextEntry={true}  //设置为密码输入框
                            placeholderTextColor={'#ccc'}  //设置占位符颜色
                            placeholder={'密码'}  //设置占位符
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.login} //添加点击事件
                        style={styles.button}>
                        <Text
                            style={styles.btText}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.register}  //添加点击事件
                        style={styles.button}>
                        <Text
                            style={styles.btText}>注册</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
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
    welcome:{
        height: 60,
        width: '100%',
        marginBottom:50,
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 17,
        color: '#000000',//输入框输入的文本为白色
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 8,

    },
    button: {
        height: 50,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#f0fff0',
        marginTop: 20,
    },
    btText: {
        color: '#000000',
        fontSize: 20,
    }
});
