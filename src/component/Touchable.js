import {TouchableNativeFeedback, TouchableOpacity, TouchableHighlight,Platform} from "react-native" ;
import React, {Component} from "react" ;
const styles=   {
    flex:{flex:1}
};
export default ({style,children,onPress=()=>{}})=>{
    if (Platform.OS === "ios" || Platform["Version"] <= 21) {
        return <TouchableHighlight underlayColor={"#ededed"} activeOpacity={0.5} style={[styles.flex,style]} onPress={onPress}>{children}</TouchableHighlight>
    } else {
        return <TouchableNativeFeedback style={style} onPress={onPress}>{children}</TouchableNativeFeedback>
    }
}
