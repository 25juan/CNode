import React,{ Component } from "react" ;
import { HeaderWithBackIcon as Header } from "../../component/Header";
import { Col,Right,Button,Icon,Text,Fab,Container  } from "native-base";
import Toast from "react-native-easy-toast" ;
import {
    observer,
    inject
} from "mobx-react/native";
import injectScript from "./script" ;
import SuperWebView from "../../component/WebView" ;
@inject("common")
@inject("user")
@inject("topic")
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
    reply(param={}){
        let { navigate } = this.props.navigation ;
        let { login } = this.props.user;
        login?navigate("Reply",param):this.toast.show("请登录");
    }
    async refresh(){
        let { refreshTopic } = this.props.topic ;
        await refreshTopic();
        this.toast.show("数据刷新成功");
    }
    render(){
        let { theme ,markdownStyle} = this.props.common ;
        let { replyCount=0,comments=[] } = this.props.topic.topic ;
        let html = injectScript(comments,markdownStyle);
        return (
            <Container>
                <Header onPress={()=>this.back()} title={ `评论（${replyCount}）` } theme={ theme }>
                    <Button onPress={async ()=> await this.refresh()} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"refresh"}/>
                    </Button>
                    <Button onPress={()=>this.reply()} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"create"}/>
                    </Button>
                </Header>
                <SuperWebView
                    reply={(param)=>this.reply(param)}
                    showUser={(params)=>this.showUser(params)}
                    theme={theme}
                    html={html}/>
                <Toast ref={(toast) => this.toast = toast}/>
            </Container>
        )
    }
}