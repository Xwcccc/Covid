function requestFetchGetList(SetLocation?, SetAddress?, targetCoordinate?: coordinate, SetCurrentError?: Function,SetGpsLocation?:Function,isToGps?:boolean) {

    //设为单次定位
    // setOnceLocation(true);
    // //设置首次定位是否等待卫星定位结果
    // // 只有在单次定位高精度定位模式下有效，设置为 true 时，会等待卫星定位结果返回， 最多等待 30 秒，
    // // 若 30 秒后仍无卫星定位结果返回，返回网络定位结果。 等待卫星定位结果返回的时间可以通过
    // // setGpsFirstTimeout 进行设置。
    // setGpsFirst(true);
    // //设置优先返回卫星定位信息时等待卫星定位结果的超时时间（毫秒）
    // // 只有在 setGpsFirst(true) 时才有效。
    // setGpsFirstTimeout(3000);
    // // 设置是否使用设备传感器
    // setSensorEnable(true);
    // 仅设备模式在室内直接报错，无法使用。故使用高精度模式，在这种定位模式下，将同时使用高德网络定位和卫星定位，优先返回精度高的定位
    // setLocationMode(<LocationMode>"Battery_Saving");

    return new Promise((resolve, reject) => {

        Geolocation.getCurrentPosition(
            async res => {
                if (SetLocation && typeof SetLocation === 'function' && res.location) {
                    SetLocation({
                        longitude: getBit(res.location.longitude, 6),
                        latitude: getBit(res.location.latitude, 6),
                    });
                }
                console.log('SetAddress========', typeof SetAddress);
                if (SetAddress && typeof SetAddress === 'function') {
                    SetAddress(res.location.address);
                }
                //后台写的获取服务器时间接口
                let serverTime = '';
                serverTime = await getServerTime().catch((err) => {
                    console.log('获取服务器时间接口捕获错误：', err);
                });
                //后台写的将高德经纬度转为gps经纬度的方法
                let gpsLocation = {};
                if (isToGps !== false) {
                    gpsLocation = await transformGdToGps({
                        wgLon: res.location.longitude,
                        wgLat: res.location.latitude,
                    }).catch((err) => {
                        console.log('经纬度转换接口捕获错误：', err);
                    });
                    console.log("gpsLocation======", gpsLocation);
                    if (SetGpsLocation && typeof SetGpsLocation === 'function' && gpsLocation) {
                        SetGpsLocation({
                            gpsLongitude: getBit(gpsLocation.wgLon, 6),
                            gpsLatitude: getBit(gpsLocation.wgLat, 6),
                        })
                    }
                }
                let time = dateFormat("YYYY-mm-dd HH:MM:SS", new Date());

                let result: ILocationPosition;
                result = {
                    longitude: getBit(res.location.longitude, 6),//高德精度
                    latitude: getBit(res.location.latitude, 6),//高德纬度
                    address: res.location.address,
                    currentTime: serverTime ? serverTime : time,
                    gpsLongitude: gpsLocation && gpsLocation.wgLon ? getBit(gpsLocation.wgLon, 6) : undefined,
                    gpsLatitude: gpsLocation && gpsLocation.wgLat ? getBit(gpsLocation.wgLat, 6) : undefined,
                };

                console.log('SetCurrentError类型为========', typeof SetCurrentError);
                //计算两个坐标点之间的距离
                if (targetCoordinate && SetCurrentError && typeof SetCurrentError === "function") {
                    let newError = 0;
                    newError = getDistance(targetCoordinate, {
                        longitude: res.location.longitude,
                        latitude: res.location.latitude
                    }, 1);
                    console.log("实际误差=================", newError);
                    SetCurrentError(newError);
                    result = {
                        ...result,
                        realErrorDistance: newError,
                    }
                }

                console.log(result);

                resolve(result);
            },
            (error) => {
                let errorInfo = error.message.substring(0, error.message.indexOf(" "));
                console.log(error);
                Toast.fail(`定位报错：${errorInfo}`, 0.5);

            },
            // 此处修改enableHighAccuracy为false 6689
            { enableHighAccuracy: false, timeout: 3000, maximumAge: 3000 })
    })

}

