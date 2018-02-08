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
    Row, Col, Thumbnail, Right, Icon, CardItem, Text, Button,Switch
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
        let {navigate} = this.props.navigation;
        navigate("SkinPicker");
    }

    login() {
    }
    switchChange(key,value){
        let common = this.props.common ;
        common[key] = value ;
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
    render() {
        let theme = this.props.common.theme;
        let { _tail,_message } = this.props.common ;
        let {loginname, avatar_url} = this.props.user.user;
        return (
            <Container style={styles.white}>
                <StatusBar theme={theme}/>
                <Content padder>
                    <Card>
                        <Touchable onPress={() => this.login()}>
                            <CardItem>
                                <Body style={styles.row}>
                                <View style={styles.center}>
                                    <Text style={styles.loginText}>{loginname}</Text>
                                </View>
                                <View style={styles.center}>
                                    <Thumbnail source={avatar_url}/>
                                </View>
                                </Body>
                            </CardItem>
                        </Touchable>
                    </Card>
                    <Card>
                        <CardItem style={styles.borderBottom}><Text>我的文章</Text></CardItem>
                        <CardItem style={styles.borderBottom}>
                            <Body><Text>小尾巴</Text></Body>
                            <Right>
                                <Switch  thumbTintColor={ theme.switchCircleColor } onTintColor = { theme.activeTintColor } value={_tail} onValueChange={(value)=>this.switchChange("tail",value)}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>消息通知</Text>
                            </Body>
                            <Right>
                                <Switch  onTintColor = { theme.activeTintColor } thumbTintColor={ theme.switchCircleColor } value={_message} onValueChange={(value)=>this.switchChange("message",value)}/>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <Touchable onPress={() => this.clearCache()}>
                            <CardItem style={styles.borderBottom}>
                                <Body><Text>清除缓存</Text></Body>
                                <Right>
                                    <Icon name="ios-arrow-forward-outline"/>
                                </Right>
                            </CardItem>
                        </Touchable>
                        <Touchable onPress={() => this.openCNode()}>
                            <CardItem style={styles.borderBottom}>
                                <Body><Text>关于CNode</Text></Body>
                                <Right>
                                    <Icon name="ios-arrow-forward-outline"/>
                                </Right>
                            </CardItem>
                        </Touchable>
                        <Touchable onPress={() => this.openSoftware()}>
                            <CardItem style={styles.borderBottom}>
                                <Body><Text>关于本软件</Text></Body>
                                <Right>
                                    <Icon name="ios-arrow-forward-outline"/>
                                </Right>
                            </CardItem>
                        </Touchable>
                        <Touchable onPress={() => this.openSkin()}>
                            <CardItem style={styles.borderBottom}>
                                <Body><Text>更换皮肤</Text></Body>
                                <Right>
                                    <Icon name={"ios-arrow-forward-outline"}/>
                                </Right>
                            </CardItem>
                        </Touchable>
                    </Card>
                    <View>
                        <Button block danger>
                            <Text>退出登录</Text>
                        </Button>
                    </View>
                </Content>
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
    loginText: {fontSize: 24}
};