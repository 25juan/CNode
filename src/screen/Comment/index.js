import React,{ Component } from "react" ;
import {  } from "react-native" ;
import { HeaderWithBackIcon as Header } from "../../component/LayoutHeaderWithoutIcon";
import { Col,Right,Button,Icon,Text,Fab,Container  } from "native-base";
import {
    observer,
    inject
} from "mobx-react/native";
import { observable } from "mobx" ;
import injectScript from "./script" ;
import SuperWebView from "../../component/WebView" ;
@inject("common")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    back(){
        this.props.navigation.goBack();
    }
    showUser(authorName){
        let { navigate } = this.props.navigation ;
        navigate("User",{authorName});
    }
    render(){
        let { theme ,markdownStyle} = this.props.common ;
        let { replyCount=0,comments=[] } = this.props.navigation.state.params.topic ;
        let html = injectScript(comments,markdownStyle);
        return (
            <Container>
                <Header onPress={()=>this.back()} title={ `评论（${replyCount}）` } theme={ theme }/>
                <SuperWebView showUser={(params)=>this.showUser(params)} theme={theme} html={html}/>
            </Container>
        )
    }
}