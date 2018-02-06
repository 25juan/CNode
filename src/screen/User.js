import React, {Component} from "react" ;
import {Text, Container, Body, Title, Thumbnail,Tabs,Tab,TabHeading} from "native-base" ;
import {inject, observer} from "mobx-react/native" ;
import Loading from "../component/ScrollViewLoading" ;
import {Linking, View,ScrollView} from "react-native" ;
import StatusBar from "../component/StatusBar" ;

@inject("common")
@inject("topic")
@observer
export default class extends Component {
    static navigationOptions = {header: null};

    async componentDidMount() {
        let {showUser} = this.props.topic;
        let {authorName} = this.props.navigation.state.params;
        await showUser(authorName);
    }
    openLink(data){
        Linking.canOpenURL(data).then(supported=>{
            if (!supported) {
                alert("支持打开该链接!")
            } else {
                Linking.openURL(data).catch(() => {
                    alert("链接打开失败,请稍后重试.")
                });
            }
        })
    }
    render() {
        let {theme,loading} = this.props.common;
        let {user} = this.props.topic;
        let uri = user.authorUrl;
        if (typeof uri === "string") {
            uri = {uri};
        }
        let tabStyle = {backgroundColor:theme.headerBackgroundColor} ;
        return (
            <Container>
                <StatusBar theme={theme}/>
                <ScrollView>
                    <View style={[style.container,{backgroundColor:theme.headerBackgroundColor}]}>
                        <View style={style.header}>
                            <Thumbnail source={uri}/>
                            <Text style={style.name}>{user.authorName}</Text>
                        </View>
                        <View style={style.header}>
                            <Text onPress={()=>{this.openLink(user.githubName)}} style={[style.name,style.link]}>
                                {user.githubName}
                            </Text>
                        </View>
                        <View style={style.row}>
                            <View style={[style.rowItem,style.textC]}><Text style={style.text}>积分：{user.score}</Text></View>
                            <View style={style.textC}><Text style={style.text}>创建于：{user.createAt}</Text></View>
                        </View>
                    </View>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:theme.tabBarUnderlineColor}}  tabBarPosition={"top"}>
                        <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle} tabStyle={tabStyle} heading={"最近回复"}>
                            <Text>555</Text>
                        </Tab>
                        <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle} tabStyle={tabStyle} heading={"最近发帖"}>
                            <Text >666</Text>
                        </Tab>
                        <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle} tabStyle={tabStyle} heading={"最近收藏"}>
                            <Text >777</Text>
                        </Tab>
                    </Tabs>
                </ScrollView>
            </Container>
        )
    }
}
const style = {
    container:{paddingVertical:15},
    row:{flexDirection: "row",},
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom:15
    },
    link:{color:"#9DF346"},
    name:{ paddingLeft:10,color:"#fff" },
    rowItem:{flex:1},
    textC:{paddingHorizontal:15},
    text:{color:"#fff"},
    tabTxt:{color:"#fff"},
    activeTextStyle:{color:"#fff"}
};