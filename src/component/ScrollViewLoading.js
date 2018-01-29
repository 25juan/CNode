import React,{
    Component
} from "react" ;
import {
    View,
    ActivityIndicator,
    Text, Platform
} from "react-native" ;
export default ({theme})=>{
    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <ActivityIndicator style={{marginTop:10}} animating={true} color={theme.loadingBackgroundColor}/>
            <Text style={{marginTop:9,marginLeft:5,color:"#999699"}}>数据加载中...</Text>
        </View>
    )
}