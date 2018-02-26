import React,{ Component } from "react" ;
import {Linking, Vibration, View} from "react-native" ;
import { HeaderWithBackIcon } from "../component/Header"
import { Container,Content,Form,Item,Label,Input,Button,Icon,Row,Text } from "native-base" ;
import {inject,observer  } from "mobx-react" ;
import { observable } from "mobx" ;
import Toast from "react-native-easy-toast" ;
import _ from "lodash";
import Loading from "../component/Loading" ;
import QRScan from "../component/QRScan" ;
@inject("common")
@inject("user")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    @observable
    accesstoken = "" ;
    @observable
    loading = false ;
    @observable
    qrLogin = false ;
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
        let result = await validateAccessToken(this.accesstoken);
        !result && this.toast.show("accesstoken 验证失败,请重试");
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
    renderLoginForm(){
        return (
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
        )
    }
    renderLoginQR(){
        let { theme } = this.props.common ;
        return  <QRScan theme={ theme } onBarCodeRead={(e)=>this.onBarCodeRead(e)}/>
    }
    onBarCodeRead(e){
        if(this.loading){
            return ;
        }
        this.accesstoken = e.data ;
        Vibration.vibrate([0, 50]);
        (async()=>{
            await this.submit() ;
        })()
    }
    render(){
        let { theme } = this.props.common ;
        let name = this.qrLogin?"create" :"qr-scanner";
        return  (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <Loading loading={this.loading} theme={theme}/>
                <HeaderWithBackIcon onPress={()=>this.back()} title={"登录"} theme={theme}>
                    <Button onPress={()=> this.qrLogin = !this.qrLogin} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={name}/>
                    </Button>
                    <Button onPress={async ()=>await this.submit()} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"send"}/>
                    </Button>
                </HeaderWithBackIcon>
                {
                    this.qrLogin?this.renderLoginQR():this.renderLoginForm()
                }
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