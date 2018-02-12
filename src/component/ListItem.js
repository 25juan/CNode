import React,{
    Component
} from "react" ;
import {
    View,
    Text,
    PixelRatio,
    Platform,TouchableHighlight
} from "react-native" ;
import { Thumbnail,Icon } from "native-base" ;
import moment from "moment" ;
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
    topStyle:{color:"#80bd01",borderColor:"#80bd01"}
} ;
export class ListItem extends Component{
    state = {
        title:{color:"#333"},
        subtitle:{color:"#999699"},
        goodStyle:{},
        topStyle:{}
    } ;
    _onShowUnderlay(){
        this.setState({
            title:{color:"#fff"},
            subtitle:{color:"#fff"},
            goodStyle:{color:"#fff"},
            topStyle:{color:"#fff"},
        });
    }
    _onHideUnderlay(){
        this.setState({
            title:{color:"#333"},
            subtitle:{color:"#999699"},
            topStyle:{},
            goodStyle:{},
        });
    }
    render(){
        let { theme ,topic ,onRightPress=()=>{} } = this.props ;
        let {replyAt,title,authorUrl,authorName} = topic ;
        return (
            <View style={style.row}>
                <View style={style.image}>
                    <View>
                        <Thumbnail square  source={{uri: authorUrl}} />
                        <View style={style.user}>
                            <Text numberOfLines={1} style={style.userText}>{authorName}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.flex}>
                    <TouchableHighlight onHideUnderlay={()=>this._onHideUnderlay()} onShowUnderlay={()=>this._onShowUnderlay()} underlayColor={theme.touchableBackgroundColor}  onPress={()=>onRightPress()}>
                        <View style={[style.column,style.border,style.info]}>
                            <View style={style.titleC}>
                                <Text numberOfLines={2} style={[style.title,this.state.title]}>
                                    {title}
                                </Text>
                            </View>
                            <View style={style.row}>
                                <View style={[style.row]}>
                                    <Icon name={"ios-undo-outline"} style={[style.icon,this.state.subTitle]}/>
                                    <Text numberOfLines={1} style={[style.subTitle,this.state.subTitle]}>
                                        { replyAt }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

}
export default class extends Component{
    state = {
        title:{color:"#333"},
        subtitle:{color:"#999699"},
        goodStyle:{},
        topStyle:{}
    } ;
    _onShowUnderlay(){
        this.setState({
            title:{color:"#fff"},
            subtitle:{color:"#fff"},
            goodStyle:{color:"#fff"},
            topStyle:{color:"#fff"},
        });
    }
    _onHideUnderlay(){
        this.setState({
            title:{color:"#333"},
            subtitle:{color:"#999699"},
            topStyle:{},
            goodStyle:{},
        });
    }
    render(){
        let { theme ,topic ,onLeftPress=()=>{},onRightPress=()=>{} } = this.props ;
        let { good,top,title,before,visitCount,replyCount,authorUrl,authorName } = topic ;
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
                    <TouchableHighlight onHideUnderlay={()=>this._onHideUnderlay()} onShowUnderlay={()=>this._onShowUnderlay()} underlayColor={theme.touchableBackgroundColor}  onPress={()=>onRightPress()}>
                        <View style={[style.column,style.border,style.info]}>
                            <View style={style.titleC}>
                                <Text numberOfLines={2} style={[style.title,this.state.title]}>
                                    {title}
                                </Text>
                            </View>
                            <View style={style.row}>
                                <View style={[style.flex,style.row]}>
                                    <Icon name={"ios-calendar-outline"} style={[style.icon,this.state.subtitle]}/>
                                    <Text numberOfLines={1} style={[style.subTitle,this.state.subtitle]}>
                                        { before }
                                    </Text>
                                </View>
                                <View style={[style.flex,style.row]}>
                                    <Icon name={"ios-eye-outline"} style={[style.icon,this.state.subtitle]}/>
                                    <Text numberOfLines={1} style={[style.subTitle,this.state.subtitle]}>{visitCount}</Text>
                                </View>
                                <View style={[style.flex,style.row]}>
                                    <Icon name={"ios-chatboxes-outline"} style={[style.icon,this.state.subtitle]}/>
                                    <Text numberOfLines={1} style={[style.subTitle,this.state.subtitle]}>{replyCount}</Text>
                                </View>
                            </View>
                            <View style={[style.labelC]}>
                                {good && <Text numberOfLines={1} style={[style.label,style.topStyle,this.state.topStyle]}>{"顶"}</Text>}
                                { top && <Text numberOfLines={1} style={[style.label,style.goodStyle,this.state.goodStyle]}>{"精"}</Text> }
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}