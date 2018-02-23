import React,{ Component } from "react" ;
import {Linking, View} from "react-native" ;
import { HeaderWithBackIcon } from "../component/Header"
import { Container,Content,Form,Item,Label,Input,Button,Icon,Row,Text } from "native-base" ;
import {inject,observer  } from "mobx-react" ;
import { observable } from "mobx" ;
import Toast from "react-native-easy-toast" ;
import _ from "lodash";
import Loading from "../component/Loading" ;
@inject("common")
@inject("user")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    @observable
    accesstoken = "" ;
    @observable
    loading = false ;
    toast = null ;
    back(){
        this.props.navigation.goBack();
    }
    async submit(){
        let { validateAccessToken } = this.props.user ;
        if(this.accesstoken === "" || _.trim(this.accesstoken) === ""){
            this.toast.show("请输入accesstoken");
            return ;
        }
        this.loading = true ;
        await validateAccessToken(this.accesstoken);
        this.loading = false ;
    }
    componentDidMount(){
        this.isLogin();
    }
    componentWillReact(){
        this.isLogin();
    }
    isLogin(){
        let { login } = this.props.user ;
        if(login){
            this.back()
        }
    }
    openLink(link){
        Linking.canOpenURL(link).then(supported=>{
            if (!supported) {
                alert("支持打开该链接!")
            } else {
                Linking.openURL(link).catch(() => {
                    console.error("链接打开失败,请稍后重试.")
                });
            }
        })
    }
    render(){
        let { theme } = this.props.common ;
        return  (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <Loading loading={this.loading} theme={theme}/>
                <HeaderWithBackIcon onPress={()=>this.back()} title={"登录"} theme={theme}>
                    <Button onPress={()=>{}} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"qr-scanner"}/>
                    </Button>
                    <Button onPress={async ()=>await this.submit()} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"send"}/>
                    </Button>
                </HeaderWithBackIcon>
                <Content padder={true}>
                    <Form>
                        <Item stackedLabel>
                            <Label>accesstoken</Label>
                            <Input
                                onChangeText={(text) => this.accesstoken = text}
                                value={this.accesstoken}
                                placeholderTextColor={"#eee"} placeholder={"请输入accesstoken"}/>
                        </Item>
                    </Form>
                    <View style={{marginTop:15}}>
                        <Text style={style.text}>
                            关于accesstoken,请登录
                            <Text onPress={()=>this.openLink("https://cnodejs.org")} style={[style.text,style.link]}>https://cnodejs.org</Text>
                            官网之后在
                            <Text style={[style.text,style.setting]}>设置</Text>
                            页面中寻找accesstoken
                        </Text>
                    </View>
                </Content>
                <Toast ref={(toast)=>this.toast = toast}/>
            </Container>
        )
    }
}
const style = {
    text:{
        fontSize:12,
        color:"#999699"
    },
    link:{
        color:"#08c"
    },
    setting:{
        color:"#333"
    }
};