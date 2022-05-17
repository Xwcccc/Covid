/**我的修改
 * 移除定位监听函数
 *
 * @param listener
 */
const eventEmitter = require("react-native/Libraries/vendor/emitter/EventEmitter");

function removeLocationListener(listener) {
    console.log("000000000");
    return eventEmitter.removeAllListeners("AMapGeolocation");
}

exports.removeLocationListener = removeLocationListener;
