import React,{ Component } from "react";
import { View,Text } from "react-native" ;
import { Icon } from "native-base" ;
import Touchable from "./Touchable" ;
export default ( { label,checked,onChange,color="#333",disabled=false } )=>{
    let android = checked?"md-radio-button-on":"ios-radio-button-off-outline" ;
    let ios = checked?"ios-radio-button-on-outline":"md-radio-button-off" ;
    let disabledStyle = disabled?{ color:"#999699" }:{} ;
    return (
        <View style={style.row}>
            <View style={{flex:1}}>
                <Text style={[style.text,disabledStyle]}>{ label }</Text>
            </View>
            <Icon onPress={()=> !disabled && onChange()} style={{fontSize:24,color}} android={android} ios={ios}/>
        </View>
    )
};
const style = {
    row:{flexDirection:"row",alignItems:"center"},
    text:{ marginLeft:8,color:"#333"}
};