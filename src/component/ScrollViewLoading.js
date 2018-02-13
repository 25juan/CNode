import React,{
    Component
} from "react" ;
import {
    View,
    ActivityIndicator,
    Text, Platform
} from "react-native" ;
const Loading = ({ theme,textColor="#999699" })=>{
    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <ActivityIndicator style={{marginTop:10}} animating={true} color={theme.loadingBackgroundColor}/>
            <Text style={{marginTop:9,marginLeft:5,color:textColor}}>数据加载中...</Text>
        </View>
    )
} ;
export default ({theme,cover=false,textColor})=>{
    if(cover){
        return <View  style={style.loading}><Loading textColor={textColor} theme={ theme}/></View>
    }
    return <Loading textColor={textColor} theme={theme}/>
}
const style = {loading:{flex:1,alignItems:"center",justifyContent:"center"}}