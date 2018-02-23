import React,{ Component } from "react" ;
import { HeaderWithBackIcon as Header } from "../component/Header";
import { Alert } from "react-native" ;
import { Col,Right,Button,Icon,Fab,Container,Input  } from "native-base";
import {
    observer,
    inject
} from "mobx-react/native";
import { observable } from "mobx" ;
@inject("common")
@inject("topic")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    @observable
    text = "" ;
    back(){
        this.props.navigation.goBack();
    }
    _onChangeText(text){
        this.text = text ;
    }
    async submit(){
        let { id,authorName="" } = this.props.navigation.state.params;
        let { reply,refreshReply } = this.props.topic ;
        let prefix = authorName?`[@${authorName}](/user/${authorName})`:"" ;
        let parmas = { reply_id:id,content: `${prefix}${this.text}`} ;
        let data = await reply(parmas);
        if(data && data.success){
            // 执行刷新评论逻辑
            Alert.alert("提示","评论成功",[{
                text: '确定', onPress: () => this.back()
            }]);
            await refreshReply();

        }
    }
    render(){
        let { theme } = this.props.common ;
        return (
            <Container>
                <Header onPress={()=>this.back()} title={ `回复评论` } theme={ theme }>
                    <Button onPress={async ()=>await this.submit()} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"send"}/>
                    </Button>
                </Header>
                <Input
                    multiline={true}
                    value={this.text}
                    autoFocus={true}
                    autoCapitalize={"none"}
                    style={{backgroundColor:"#fff"}}
                    onChangeText={(txt)=>this._onChangeText(txt)}/>
            </Container>
        )
    }
}