import React, {Component} from "react" ;
import {Text, Container, Body, Title, Thumbnail, Tabs, Tab, TabHeading,Icon} from "native-base" ;
import {inject, observer} from "mobx-react/native" ;
import ListItemT, {ListItem} from "../component/ListItem" ;
import {Linking, View, ScrollView} from "react-native" ;
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

    openLink(data) {
        Linking.canOpenURL(data).then(supported => {
            if (!supported) {
                alert("支持打开该链接!")
            } else {
                Linking.openURL(data).catch(() => {
                    alert("链接打开失败,请稍后重试.")
                });
            }
        })
    }
    goBack(){
        let { reset } = this.props.topic ;
        this.props.navigation.goBack();
        reset() ;
    }
    showArticle(id){
        let { navigation,topic } = this.props ;
        topic.getTopicById(id);
        navigation.navigate("Topic") ;
    }
    render() {
        let {theme} = this.props.common;
        let {user} = this.props.topic;
        let uri = user.authorUrl;
        if (typeof uri === "string") {
            uri = {uri};
        }
        let tabStyle = {backgroundColor: theme.headerBackgroundColor};
        return (
            <Container>
                <StatusBar theme={theme}/>
                <View style={[style.container, {backgroundColor: theme.headerBackgroundColor}]}>
                    <View style={style.row}>
                        <View  style={style.leftIcon}>
                            <Icon onPress={()=>this.goBack()} style={{color:theme.headerTextColor}} android={"md-arrow-back"} ios={"ios-arrow-back-outline"}/>
                        </View>
                        <View style={[{flex:1},style.header]}>
                            <Thumbnail source={uri}/>
                            <Text style={style.name}>{user.authorName}</Text>
                        </View>
                    </View>
                    <View style={style.header}>
                        <Text onPress={() => {
                            this.openLink(user.githubName)
                        }} style={[style.name, style.link]}>
                            {user.githubName}
                        </Text>
                    </View>
                    <View style={style.row}>
                        <View style={[style.rowItem, style.textC]}><Text
                            style={style.text}>积分：{user.score}</Text></View>
                        <View style={style.textC}><Text style={style.text}>创建于：{user.createAt}</Text></View>
                    </View>
                </View>
                <Tabs tabBarUnderlineStyle={{backgroundColor: theme.tabBarUnderlineColor}} tabBarPosition={"top"}>
                    <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle}
                         tabStyle={tabStyle} heading={"最近回复"}>
                        <ScrollView>
                            {
                                user.recentTopics.map((v, k) => <ListItem onRightPress={()=>this.showArticle(v.id)} key={k} topic={v}/>)
                            }
                        </ScrollView>
                    </Tab>
                    <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle}
                         tabStyle={tabStyle} heading={"最近发帖"}>
                        <ScrollView>
                            {
                                user.recentTopics.map((v, k) => <ListItem onRightPress={()=>this.showArticle(v.id)} key={k} topic={v}/>)
                            }
                        </ScrollView>
                    </Tab>
                    <Tab activeTextStyle={style.activeTextStyle} textStyle={style.tabTxt} activeTabStyle={tabStyle}
                         tabStyle={tabStyle} heading={"最近收藏"}>
                        <ScrollView>
                            {
                                user.collectTopics.map((v, k) => <ListItemT onRightPress={()=>this.showArticle(v.id)} key={k} topic={v}/>)
                            }
                        </ScrollView>
                    </Tab>
                </Tabs>
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