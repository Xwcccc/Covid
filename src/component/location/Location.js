import React, {Component} from 'react';
import {Button, PermissionsAndroid, Platform, Text, View} from 'react-native';
import {init,Geolocation} from 'react-native-amap-geolocation';
import axios from 'axios';
import 'isomorphic-fetch';
class Geo extends Component{

    async initGeo(){
        if(Platform.OS === "android"){
            const grantd = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
            //这里也可以再加点判断啥的给用户提示，grantd 值为 granted 时，是获取成功——console.log("权限获取的咋样了？？？",grantd);
            //初始化高德地图
            await init({
                //来自高德地图中的 安卓 应用的Key
                //ios:"50c3346366041e9807587906892e1f9f",
                android:"496b3c38d3bbc78ea303e29c7c7cf38f"
            });
        }
        return Promise.resolve();
    }

    async getCurrentPosition(){
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(({coords}) => {
                resolve(coords);
            }, reject)
        })
    }

    async getCityByLocation(){
        await this.initGeo()
        //经纬度：可以传出
        //TODO:输出不同精度的经纬度
        //TODO:上传数据库+数据结构
        const {longitude, latitude}  = await this.getCurrentPosition()
        //转换为城市地址
        const res = await axios.get("https://restapi.amap.com/v3/geocode/regeo", {
            //这里的key是高德地图的 web 的Key
            params:{location: `${longitude}, ${latitude}`, key: "37769e357f71b34d19e3d85b605736a3"}
        })
        return Promise.resolve(res.data);
    }

    constructor() {
        super();
        this.state = {}
    }

    async componentDidMount() {
        let locations = await (await fetch(`http://localhost:8080/api/locations`)).json();//主要是从后台拿json数据
        this.setState({locations});
    }

    render() {
        let {locations = []} = this.state;
        return (
            <View>
                {locations.map(({id, name, lat2, lng2, lat3, lng3, flat}) => {
                        return (
                            <View key={id}>
                                <Text>{id}</Text>
                                <Text>{name}</Text>
                                <Text>{lat2}</Text>
                                <Text>{lng2}</Text>
                                <Text>{lat3}</Text>
                                <Text>{lng3}</Text>
                                <Text>{flat}</Text>
                                <Button onClick={() => {
                                    this.setState({locations});
                                }}>配置</Button>
                            </View>
                        )
                    })
                }
            < /View>
        );
    }
}

// 这里是new一个对象导出使用，要注意。
export default Geo;
