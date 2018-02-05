import React,{
    Component
} from "react" ;
import {
    View,
    Text,
    PixelRatio,
    Platform
} from "react-native" ;
import { Thumbnail,Icon } from "native-base" ;
import moment from "moment" ;
import Touchable from "../component/Touchable" ;
const style = {
    border:{borderBottomWidth:1/PixelRatio.get(),borderBottomColor:"#ddd"},
    row:{flexDirection:"row"},
    image:{paddingTop:10,paddingLeft:10},
    column:{flex:1,flexDirection:"column"},
    title:{ fontSize:14,color:"#333",paddingTop:15,paddingBottom:15},
    subTitle:{fontSize:11,color:"#999699",paddingBottom:10,paddingLeft:5},
    flex:{flex:1},
    icon:{fontSize:10,marginTop: Platform.OS ==="ios"?1:3,color:"#999699"},
    info:{paddingLeft:15},
    user:{marginTop:5},
    userText:{color:"#999699",textAlign:"center",fontSize:14},
    titleC:{height:73}
} ;
export default ({ topic ,onLeftPress=()=>{},onRightPress=()=>{} })=>{
    let {
        good,
        top,
        title,
        before,
        visitCount,
        replyCount,
        authorUrl,
        authorName
    } = topic ;
    let goodStyle = good?{color:"red"}:{color:"#fff",opacity:0} ;
    let topStyle = top?{color:"#80bd01"}:{color:"#fff",opacity:0} ;
    return (
        <View style={style.row}>
            <View style={style.image}>
                <Touchable onPress={()=>onLeftPress()}>
                    <View>
                        <Thumbnail square  source={{uri: authorUrl}} />
                        <View style={style.user}>
                            <Text numberOfLines={1} style={style.userText}>{authorName}</Text>
                        </View>
                    </View>
                </Touchable>
            </View>
            <View style={style.flex}>
                <Touchable  onPress={()=>onRightPress()}>
                    <View style={[style.column,style.border,style.info]}>
                        <View style={style.titleC}>
                            <Text numberOfLines={2} style={style.title}>
                                {title}
                            </Text>
                        </View>
                        <View style={style.row}>
                            <View style={[style.flex,style.row]}>
                                <Icon name={"ios-calendar-outline"} style={style.icon}/>
                                <Text numberOfLines={1} style={style.subTitle}>
                                    { before }
                                </Text>
                            </View>
                            <View style={[style.flex,style.row]}>
                                <Icon name={"ios-bookmarks-outline"} style={style.icon}/>
                                <Text numberOfLines={1} style={style.subTitle}>{visitCount}</Text>
                            </View>
                            <View style={[style.flex,style.row]}>
                                <Icon name={"ios-chatboxes-outline"} style={style.icon}/>
                                <Text numberOfLines={1} style={style.subTitle}>{replyCount}</Text>
                            </View>
                            <View style={[style.row]}>
                                <Text numberOfLines={1} style={[style.subTitle,topStyle]}>{"顶"}</Text>
                                <Text numberOfLines={1} style={[style.subTitle,goodStyle]}>{"精"}</Text>
                            </View>
                        </View>
                    </View>
                </Touchable>
            </View>
        </View>
    )
}