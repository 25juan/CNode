import React,{
    Component
} from "react" ;
import {
    View,
    ActivityIndicator,
    Text, Platform
} from "react-native" ;
const Loading = ({ theme })=>{
    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <ActivityIndicator style={{marginTop:10}} animating={true} color={theme.loadingBackgroundColor}/>
            <Text style={{marginTop:9,marginLeft:5,color:"#999699"}}>数据加载中...</Text>
        </View>
    )
} ;
export default ({theme,cover=false})=>{
    if(cover){
        return <View style={style.loading}><Loading theme={ theme}/></View>
    }
    return <Loading theme={theme}/>
}
const style = {loading:{flex:1,alignItems:"center",justifyContent:"center"}}