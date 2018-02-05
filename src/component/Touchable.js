import {TouchableNativeFeedback, TouchableOpacity, TouchableHighlight,Platform} from "react-native" ;
import React, {Component} from "react" ;
export default ({children,onPress=()=>{}})=>{
    if (Platform.OS === "ios" || Platform["Version"] <= 21) {
        return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    } else {
        return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>
    }
}
