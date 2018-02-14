import React, {
    Component
} from "react" ;
import {
    View,
    Platform,
    ScrollView, Linking
} from "react-native";
import {
    Card, Body, Container, Content,
    Row, Col, Thumbnail, Right, Icon, CardItem, Text, Button, Switch,
    List, ListItem, Left,Fab
} from "native-base";
import Touchable from "../component/Touchable" ;
import {
    observer,
    inject
} from "mobx-react/native";
import StatusBar from "../component/StatusBar" ;
import Toast from "react-native-easy-toast" ;
@inject("common")
@inject("user")
@observer
export default class Mine extends Component {
    toast = null;
    openSkin() {
        let {navigate} = this.props.screenProps;
        navigate("SkinPicker");
    }
    switchChange(key, value) {
        let common = this.props.common;
        common[key] = value;
    }
    clearCache() {
        this.toast.show("缓存清除成功");
    }
    openCNode() {
        Linking.openURL("https://cnodejs.org/about");
    }
    openSoftware() {
        Linking.openURL("https://github.com/25juan/CNode");
    }
    login() {
        let { login } = this.props.user ;
        if(!login){
            this.props.screenProps.navigate("Login")
        }
    }
    logout(){
        this.props.user.deleteUser() ;
    }
    showMyTopic(){
        let { login,user:{ authorName } } = this.props.user;
        login?this.props.screenProps.navigate("User",{authorName}):this.toast.show("请登录");
    }
    create(){
        let { login } = this.props.user;
        login?this.props.screenProps.navigate("WriteTopic"):this.toast.show("请登录");
    }
    showNews(){
        let { login } = this.props.user;
        login?this.props.screenProps.navigate("Message"):this.toast.show("请登录");
    }
    _renderLogoutBtn(){
        let { login } = this.props.user;
        return login?(<View style={{marginTop:30}}>
            <Button onPress={()=>this.logout()} block danger>
                <Text style={{fontSize:18}}>退出登录</Text>
            </Button>
        </View>): <View/>
    }
    render() {
        let theme = this.props.common.theme;
        let {_tail, _message} = this.props.common;
        let {authorName, authorUrl} = this.props.user.user;

        return (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <StatusBar theme={theme}/>
                <ScrollView>
                    <Content padder>
                        <Card>
                            <Touchable onPress={() => this.login()}>
                                <CardItem>
                                    <Body style={styles.row}>
                                    <View style={styles.center}>
                                        <Text style={styles.loginText}>{authorName}</Text>
                                    </View>
                                    <View style={styles.center}>
                                        <Thumbnail source={authorUrl}/>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Touchable>
                        </Card>
                        <List>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#F0742B"}} name="bookmarks"/>
                                </Left>
                                <Touchable onPress={() => this.showMyTopic()}>
                                    <Body>
                                        <Text style={styles.menuText}>我的文章</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#FF5346"}} name="create"/>
                                </Left>
                                <Touchable onPress={() => this.create()}>
                                    <Body>
                                    <Text style={styles.menuText}>发布文章</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#48BCD5"}} name="chatbubbles"/>
                                </Left>
                                <Touchable onPress={() => this.showNews()}>
                                    <Body>
                                        <Text style={styles.menuText}>我的消息</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#5ECC7F"}} name="link"/>
                                </Left>
                                <Body>
                                <Text style={styles.menuText}>小尾巴</Text>
                                </Body>
                                <Right>
                                    <Switch thumbTintColor={theme.switchCircleColor} onTintColor={theme.activeTintColor}
                                            value={_tail} onValueChange={(value) => this.switchChange("tail", value)}/>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#4995DF"}} name="text"/>
                                </Left>
                                <Body>
                                <Text style={styles.menuText}>消息通知</Text>
                                </Body>
                                <Right>
                                    <Switch onTintColor={theme.activeTintColor} thumbTintColor={theme.switchCircleColor}
                                            value={_message}
                                            onValueChange={(value) => this.switchChange("message", value)}/>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#48BCD5"}} name="cloud"/>
                                </Left>
                                <Touchable onPress={() => this.clearCache()}>
                                    <Body>
                                        <Text style={styles.menuText}>清除缓存</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#FF5346"}} name="logo-nodejs"/>
                                </Left>
                                <Touchable onPress={() => this.openCNode()}>
                                    <Body>
                                    <Text style={styles.menuText}>关于CNode</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#4995DF"}} name="information-circle"/>
                                </Left>
                                <Touchable onPress={() => this.openSoftware()}>
                                    <Body>
                                    <Text style={styles.menuText}>关于本软件</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon style={{color:"#F0742B"}} name="cloudy-night"/>
                                </Left>
                                <Touchable onPress={() => this.openSkin()}>
                                    <Body>
                                        <Text style={styles.menuText}>更换皮肤</Text>
                                    </Body>
                                </Touchable>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </ListItem>
                        </List>
                        {
                            this._renderLogoutBtn()
                        }
                    </Content>
                </ScrollView>
                <Toast ref={(toast) => this.toast = toast}/>
            </Container>
        )
    }
}
const styles = {
    white: {backgroundColor: "#fff"},
    row: {flexDirection: "row"},
    borderBottom: {borderBottomWidth: 1, borderBottomColor: "#ededed"},
    center: {flex: 1, alignItems: "center", justifyContent: "center", height: 80},
    loginText: {fontSize: 24},
    menuText:{color:"#333"}
};