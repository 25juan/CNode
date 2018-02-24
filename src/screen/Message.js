import React,{ Component } from "react" ;
import {Linking, View,FlatList} from "react-native" ;
import { HeaderWithBackIcon } from "../component/Header"
import { Container,Content,Form,Item,Label,Input,Button,Icon,Row,Text,Tabs,Tab } from "native-base" ;
import {inject,observer  } from "mobx-react" ;
import { ListItem } from "../component/ListItem" ;
import { observable } from "mobx" ;
import Toast from "react-native-easy-toast" ;
@inject("common")
@inject("user")
@inject("topic")
@observer
export default class extends Component{
    static navigationOptions={header:null} ;
    back(){
        this.props.navigation.goBack();
    }
    componentDidMount(){
        let { getMessage } = this.props.user ;
        (async ()=>{
            await getMessage();
        })();
    }
    showArticle(id){
        let { navigation,topic } = this.props ;
        topic.getTopicById(id);
        navigation.navigate("Topic") ;
    }
    showUser(authorName){
        let { navigate } = this.props.navigation ;
        navigate("User",{authorName});
    }
    render(){
        let { theme } = this.props.common ;
        let { user }   = this.props ;
        let tabStyle = {backgroundColor: theme.headerBackgroundColor};
        console.log(user.notReadMessage)
        return  (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <HeaderWithBackIcon onPress={()=>this.back()} title={"我的消息"} theme={theme}/>
                    <Tabs tabBarUnderlineStyle={{backgroundColor: theme.tabBarUnderlineColor}} tabBarPosition={"top"}>
                        <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle}
                             tabStyle={tabStyle} heading={"未读消息"}>
                            <FlatList
                                style={{backgroundColor:theme.listViewBackgroundColor}}
                                data={user.notReadMessage}
                                keyExtractor={(item)=>item.messageId}
                                onEndReachedThreshold={1}
                                refreshing={false}
                                initialNumToRender={6}
                                renderItem={({item}) =><ListItem theme={theme} onLeftPress={()=>this.showUser(item.authorName)} onRightPress={()=>this.showArticle(item.id)} topic={item}/>}
                            />
                        </Tab>
                        <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle}
                             tabStyle={tabStyle} heading={"已读消息"}>
                            <FlatList
                                style={{backgroundColor:theme.listViewBackgroundColor}}
                                data={user.readMessage}
                                onEndReachedThreshold={1}
                                keyExtractor={(item)=>item.messageId}
                                refreshing={false}
                                initialNumToRender={6}
                                renderItem={({item}) =><ListItem theme={theme} onLeftPress={()=>this.showUser(item.authorName)} onRightPress={()=>this.showArticle(item.id)} topic={item}/>}
                            />
                        </Tab>
                    </Tabs>
                <Toast ref={(toast)=>this.toast = toast}/>
            </Container>
        )
    }
}
const style = {
    container: {paddingVertical: 15},
    row: {flexDirection: "row",},
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 15
    },
    leftIcon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft:15
    },
    link: {color: "#9DF346"},
    name: {paddingLeft: 10, color: "#fff"},
    rowItem: {flex: 1},
    textC: {paddingHorizontal: 15},
    text: {color: "#fff"},
    tabTxt: {color: "#fff"},
    activeTextStyle: {color: "#fff"}
};