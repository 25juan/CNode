import {TouchableNativeFeedback, TouchableOpacity, TouchableHighlight,Platform} from "react-native" ;
import React, {Component} from "react" ;
export default ({style,children,onPress=()=>{}})=>{
    if (Platform.OS === "ios" || Platform["Version"] <= 21) {
        return <TouchableOpacity style={style} onPress={onPress}>{children}</TouchableOpacity>
    } else {
        return <TouchableNativeFeedback style={style} onPress={onPress}>{children}</TouchableNativeFeedback>
    }
}
