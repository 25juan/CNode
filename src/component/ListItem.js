import React,{
    Component
} from "react" ;
import {
    View,
    Text,
    PixelRatio,
    Platform,TouchableHighlight,TouchableOpacity
} from "react-native" ;
import { Thumbnail,Icon } from "native-base" ;
import Touchable from "../component/Touchable" ;
const style = {
    border:{borderBottomWidth:1/PixelRatio.get(),borderBottomColor:"#ddd"},
    row:{flexDirection:"row",paddingRight:10},
    image:{paddingTop:10,paddingLeft:10},
    column:{flex:1,flexDirection:"column"},
    title:{ fontSize:14,color:"#333",paddingTop:15,paddingBottom:15},
    subTitle:{fontSize:11,color:"#999699",paddingBottom:10,paddingLeft:5},
    flex:{flex:1},
    icon:{fontSize:11,marginTop: 1,color:"#999699"},
    info:{paddingLeft:15},
    user:{marginTop:5,width:60},
    userText:{color:"#999699",textAlign:"center",fontSize:14},
    titleC:{height:73},
    labelC:{position:"absolute",bottom:15,right:0,flexDirection:"row"},
    label:{borderWidth:1,fontWeight:"bold",marginRight:5,paddingHorizontal:10,paddingVertical:2,transform:[{rotateZ:"45deg"}]},
    goodStyle:{color:"red",borderColor:"red"},
    topStyle:{color:"#80bd01",borderColor:"#80bd01"},
    border:{borderRadius:4}
} ;
export class ListItem extends Component{
    render(){
        let { topic ,onRightPress=()=>{},onLeftPress=()=>{} } = this.props ;
        let {replyAt,title,authorUrl,authorName} = topic ;
        return (
            <View style={style.row}>
                <View style={style.image}>
                    <Touchable onPress={()=>onLeftPress()}>
                        <View>
                            <Thumbnail style={style.border} square  source={{uri: authorUrl}} />
                            <View style={style.user}>
                                <Text numberOfLines={1} style={style.userText}>{authorName}</Text>
                            </View>
                        </View>
                    </Touchable>
                </View>
                <View style={style.flex}>
                    <TouchableOpacity onPress={()=>onRightPress()}>
                        <View style={[style.column,style.border,style.info]}>
                            <View style={style.titleC}>
                                <Text numberOfLines={2} style={[style.title]}>
                                    {title}
                                </Text>
                            </View>
                            <View style={style.row}>
                                <View style={[style.row]}>
                                    <Icon name={"ios-undo-outline"} style={[style.icon]}/>
                                    <Text numberOfLines={1} style={[style.subTitle]}>
                                        { replyAt }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}
export default class extends Component{
    render(){
        let { topic ,onLeftPress=()=>{},onRightPress=()=>{} } = this.props ;
        let { good,top,title,before,visitCount,replyCount,authorUrl,authorName } = topic ;
        return (
            <View style={style.row}>
                <View style={style.image}>
                    <Touchable onPress={()=>onLeftPress()}>
                        <View>
                            <Thumbnail style={style.border} square  source={{uri: authorUrl}} />
                            <View style={style.user}>
                                <Text numberOfLines={1} style={style.userText}>{authorName}</Text>
                            </View>
                        </View>
                    </Touchable>
                </View>
                <View style={style.flex}>
                    <TouchableOpacity onPress={()=>onRightPress()}>
                        <View style={[style.column,style.border,style.info]}>
                            <View style={style.titleC}>
                                <Text numberOfLines={2} style={[style.title]}>
                                    {title}
                                </Text>
                            </View>
                            <View style={style.row}>
                                <View style={[style.flex,style.row]}>
                                    <Icon name={"ios-calendar-outline"} style={[style.icon]}/>
                                    <Text numberOfLines={1} style={[style.subTitle]}>
                                        { before }
                                    </Text>
                                </View>
                                <View style={[style.flex,style.row]}>
                                    <Icon name={"ios-eye-outline"} style={[style.icon]}/>
                                    <Text numberOfLines={1} style={[style.subTitle]}>{visitCount}</Text>
                                </View>
                                <View style={[style.flex,style.row]}>
                                    <Icon name={"ios-chatboxes-outline"} style={[style.icon]}/>
                                    <Text numberOfLines={1} style={[style.subTitle]}>{replyCount}</Text>
                                </View>
                            </View>
                            <View style={[style.labelC]}>
                                {good && <Text numberOfLines={1} style={[style.label,style.topStyle]}>{"顶"}</Text>}
                                { top && <Text numberOfLines={1} style={[style.label,style.goodStyle]}>{"精"}</Text> }
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}