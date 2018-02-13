import React,{ Component } from "react" ;
import { View,Platform,ScrollView } from "react-native" ;
import { Container,Button,Icon,Content,Form, Item, Input, Label,Picker } from "native-base" ;
import { observer,inject } from "mobx-react/native" ;
import { observable } from "mobx" ;
import {HeaderWithBackIcon} from "../component/LayoutHeaderWithoutIcon" ;
import  Toast from "react-native-easy-toast" ;
import _ from "lodash" ;
import Loading from "../component/Loading" ;
@inject("common")
@inject("user")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    toast = null ;
    @observable
    loading = false ;
    @observable
    form = {
        title:"",
        tab : "share",
        content:""
    };
    back(){
        this.props.navigation.goBack();
    }
    async submit(){
        let form = this.form ;
        let topic = {} ;
        let { saveTopic } = this.props.user ;
        if(form.title === "" || _.trim(form.title)===""){
            this.toast.show("标题不能为空");
            return ;
        }
        if(form.content === "" || _.trim(form.content)===""){
            this.toast.show("内容不能为空");
            return ;
        }
        this.loading = true ; //禁用提交按钮，防止重复提交
        for(let i in form){
            topic[i] = _.trim(form[i]) ;
        }
        let data = await saveTopic(topic);
        let message = "" ;
        if(data.success){
            this.form.title = "";
            this.form.content = "";
            message = "主题创建成功";
        }else{
            message = "主题创建失败";
        }
        this.toast.show(message);
        this.loading = false ;//禁用提交按钮，防止重复提交
    }
    render(){
        let { theme } = this.props.common ;
        return (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <Loading loading={this.loading} theme={theme}/>
                <HeaderWithBackIcon onPress={()=>this.back()} theme={theme} title={"主题发布"}>
                    <Button onPress={async ()=>await this.submit()} transparent>
                        <Icon style={{color:theme.headerTextColor}} name={"send"}/>
                    </Button>
                </HeaderWithBackIcon>
                <ScrollView>
                    <Content padder>
                        <Form>
                            <Item stackedLabel>
                                <Label>标题</Label>
                                <Input onChangeText={(text) => this.form.title = text}
                                       value={this.form.title}/>
                            </Item>
                            <Item>
                                <Label>类型</Label>
                                <Picker
                                    mode="dropdown"
                                    renderHeader={(back)=>(
                                        <HeaderWithBackIcon onPress={back} theme={theme} title={"主题类型"}/>
                                    )}
                                    placeholder="主题类型"
                                    selectedValue={this.form.tab}
                                    onValueChange={(tab)=>this.form.tab=tab}
                                    style={{ width: Platform.OS === "ios" ? undefined : "100%" }}
                                >
                                    <Item label="分享" value="share" />
                                    <Item label="招聘" value="job" />
                                    <Item label="提问" value="ask" />
                                    <Item label="测试" value="dev" />
                                </Picker>
                            </Item>
                            <Item stackedLabel>
                                <Label>内容</Label>
                                <Input
                                    onChangeText={(text) => this.form.content = text}
                                    value={this.form.content}
                                    style={{minHeight:300}}
                                    multiline={true} />
                            </Item>
                        </Form>
                    </Content>
                </ScrollView>
                <Toast ref={(toast)=>this.toast=toast}/>
            </Container>
        )
    }
}
const style =  {

};