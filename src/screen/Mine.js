import React,{
    Component
} from "react" ;
import {

    View,
    Platform,
} from "react-native";
import {
    Card,Body,Container,Content,
    Row,Col,Thumbnail,Right,Icon,CardItem,Text,Button
} from "native-base";
import {
    observer,
    inject
} from "mobx-react/native";
@inject("common")
@inject("topics")
@observer
export default class Mine extends Component{
    render(){
        let theme = this.props.common.theme ;
        return (
            <Container style={{backgroundColor:"#fff"}}>
                <View>
                    { Platform.OS=="ios" && <View style={{height:20,backgroundColor:theme.headerBackgroundColor}}/> /**IOS statusbar 兼容处理*/}
                </View>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body style={{flexDirection:"row"}}>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center",height:80}}>
                                <Text style={{fontSize:24}}>登录</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center",height:80  }}>
                                <Thumbnail
                                    source={{uri:"https://free.modao.cc/uploads3/images/1548/15483929/raw_1513564115.jpeg"}}
                                />
                            </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={styles.borderBottom}><Text>我的文章</Text></CardItem>
                        <CardItem style={styles.borderBottom}><Text>我的收藏</Text></CardItem>
                        <CardItem><Text>消息通知</Text></CardItem>
                    </Card>
                    <Card>
                        <CardItem style={styles.borderBottom}><Text>清除缓存</Text></CardItem>
                        <CardItem style={styles.borderBottom}><Text>关于CNode</Text></CardItem>
                        <CardItem style={styles.borderBottom}><Text>关于本软件</Text></CardItem>
                        <CardItem style={styles.borderBottom}><Text>消息通知</Text></CardItem>
                        <CardItem><Text>更换皮肤</Text></CardItem>
                    </Card>
                    <View>
                        <Button block danger>
                            <Text>退出登录</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles= {
    borderBottom:{borderBottomWidth:1,borderBottomColor:"#ededed"}
}