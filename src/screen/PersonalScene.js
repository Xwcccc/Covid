
import Icon from 'react-native-vector-icons/FontAwesome'
import React,{Component} from "react";

import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native"

export default class Temp extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <Text style={styles.txtTitle}>我</Text>
                    <Icon name='cog' style={styles.iconSetting} size={20}/>
                </View>
                <View style={styles.viewUser}>
                    <View style={styles.viewUserTop}>
                        <Image style={styles.imgUserTitle} source={require('../../assets/usertop.jpg')}/>
                    </View>
                    <Text style={styles.txtName}>Nefelebata</Text>
                    <View style={styles.viewEdit}>
                        <Icon name='pencil-square-o' style={styles.iconEdit} size={15}/>
                        <Text style={styles.txtEdit}>编辑个人资料</Text>
                    </View>
                </View>
                <View style={styles.viewCommon}>
                        <Text style={styles.txtCommon}>我的账号</Text>
                        <Icon style={styles.iconCommon} name='angle-right' size={20}/>
                </View>
                <View style={styles.viewCommon}>
                    <Text style={styles.txtCommon}>修改密码</Text>
                    <Icon style={styles.iconCommon} name='angle-right' size={20}/>
                </View>
                <View style={styles.viewCommon}>
                    <Text style={styles.txtCommon}>身份认证</Text>
                    <Icon style={styles.iconCommon} name='angle-right' size={20}/>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    viewTop: {
        height: 60,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',
        flexDirection: 'row'
    },
    txtTitle: {
        flex: 1,
        marginLeft: 10
    },
    iconSetting: {
        marginRight: 10
    },
    viewUser: {
        height: 250,
        backgroundColor: '#F0F0F0'
    },
    viewUserTop: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgUserTitle: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    txtName: {
        alignSelf: 'center'
    },
    txtGF: {
        alignSelf: 'center',
        marginTop: 40
    },
    viewEdit: {
        width: 150,
        marginTop: 20,
        height: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    txtEdit: {
        marginLeft: 5,
        alignSelf: 'center',
        color: '#7997C7'
    },
    iconEdit: {
        color: '#7997C7',
        marginTop: 5
    },
    txtCommon: {
        marginLeft: 15,
        flex: 1
    },
    iconCommon: {
        marginRight: 10
    },
    imgLove: {
        height: 30,
        width: 50,
        margin: 10,
        marginTop: 0
    },
    viewCommon: {
        height: 50,
        borderBottomWidth: 10,
        borderBottomColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})
