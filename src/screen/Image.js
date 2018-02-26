import React,{ Component } from "react" ;
import { View,Image,Dimensions,Platform,CameraRoll } from "react-native" ;
import { HeaderWithBackIcon } from "../component/Header" ;
import { Container,Content,Form,Item,Label,Input,Button,Icon,Row,Text } from "native-base" ;
import {inject,observer  } from "mobx-react" ;
import Toast  from "react-native-easy-toast" ;
import RNFetchBlob from 'react-native-fetch-blob'
@inject("common")
@observer
export default class extends Component{
    static navigationOptions={header:null};
    toast = null ;
    back(){
        this.props.navigation.goBack();
    }
    download(){
        let uri = this.props.navigation.state.params.url ;
        RNFetchBlob
            .config({fileCache : true,appendExt : 'png'})
            .fetch('GET',uri)
            .then((res) => {
                let path =Platform.OS === 'android'? 'file://' + res.path() : '' + res.path() ;
                CameraRoll.saveToCameraRoll(path).then((res)=>{
                    this.toast.show(`图片保存成功,路径 ${res}`) ;
                }).catch((error)=>{
                    this.toast.show(`图片保存失败`) ;
                    console.log(error)
                });
            }).catch((error)=>{
                this.toast.show(`图片保存失败`) ;
            });
    }
    render(){
        let uri = this.props.navigation.state.params.url ;
        let { theme } = this.props.common ;
        return (
            <View style={style.container}>
                <HeaderWithBackIcon onPress={()=>this.back()} title={""} theme={theme} style={{backgroundColor:bgColor,elevation:0}}>
                    <Button transparent onPress={()=>this.download()}>
                        <Icon style={{color:theme.headerTextColor}} name={"download"}/>
                    </Button>
                </HeaderWithBackIcon>
                <Image style={[style.image,{width:Dimensions.get("window").width}]} resizeMode ={"contain"} source={{uri}}/>
                <Toast ref={(toast)=>this.toast = toast}/>
            </View>
        )
    }
}
const bgColor = "#333" ;
const style = {
    container:{
        flex:1,
        backgroundColor:bgColor
    },
    image:{
        flex:1
    }
};