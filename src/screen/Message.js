import React,{ Component } from "react" ;
import {Linking, View} from "react-native" ;
import { HeaderWithBackIcon } from "../component/Header"
import { Container,Content,Form,Item,Label,Input,Button,Icon,Row,Text } from "native-base" ;
import {inject,observer  } from "mobx-react" ;
import { observable } from "mobx" ;
import Toast from "react-native-easy-toast" ;
@inject("common")
@inject("user")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    back(){
        this.props.navigation.goBack();
    }
    render(){
        let { theme } = this.props.common ;
        return  (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <HeaderWithBackIcon onPress={()=>this.back()} title={"我的消息"} theme={theme}/>
                <Content padder={true}>
                    
                </Content>
                <Toast ref={(toast)=>this.toast = toast}/>
            </Container>
        )
    }
}