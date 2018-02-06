import {Platform,View} from "react-native";
import React from "react";
export default ( { theme } )=>{
    return (
        <View>
            { Platform.OS=="ios" && <View style={{height:20,backgroundColor:theme.headerBackgroundColor}}/> /**IOS statusbar 兼容处理*/}
        </View>
    )
}