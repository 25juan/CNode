import React,{Component} from "react" ;
import {
    Modal,
    View,
    Text,
    Alert
} from "react-native" ;
import { Container,Content,List,ListItem } from "native-base" ;
import { HeaderWithBackIcon } from "../component/LayoutHeaderWithoutIcon" ;
import {
    observer,inject
} from "mobx-react/native" ;
import Radio from '../component/Radio';
@inject("common")
@inject("topics")
@observer
export default class SkinPicker extends Component {
    static navigationOptions={header:null} ;
    setAppTheme(theme){
        this.props.common._theme !== theme && Alert.alert("提示","更改主题会导致整个应用重新加载,是否继续?",[
            {
                text:"否",
                onPress:()=>{}
            },
            {
                text:"是",
                onPress:()=>{
                    this.props.common.theme = theme;
                }
            }
        ]);
    }
    setMarkdownTheme(theme){
        this.props.common.markdownStyle = theme ;
    }
    render(){
        let { theme,_theme,_markdownStyle } = this.props.common ;
        return (
            <Container style={style.white}>
                <HeaderWithBackIcon onPress={()=>{this.props.navigation.goBack()}} theme={theme} title={"皮肤设置"}/>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text style={style.headerText}>应用主题设置</Text>
                        </ListItem>
                        <ListItem >
                            <Radio color={theme.rcColor} label='正常模式'
                                   checked={(_theme ==="normal")}
                                   onChange={() => this.setAppTheme("normal")}/>
                        </ListItem>
                        <ListItem>
                            <Radio color={theme.rcColor} label='护眼模式'
                                   checked={(_theme ==="dark")}
                                   onChange={() =>  this.setAppTheme("dark")}/>
                        </ListItem>
                        <ListItem>
                            <Radio color={theme.rcColor} label='春节红'
                                   checked={(_theme ==="red")}
                                   onChange={() =>  this.setAppTheme("red")}/>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={style.headerText}>文章主题设置</Text>
                        </ListItem>
                        <ListItem >
                            <Radio color={theme.rcColor} label='正常模式'
                                   checked={_markdownStyle === "markdown_light"}
                                   onChange={() => this.setMarkdownTheme("markdown_light")}/>
                        </ListItem>
                        <ListItem>
                            <Radio color={theme.rcColor} label='护眼模式'
                                   checked={_markdownStyle === "markdown_dark"}
                                   onChange={() => this.setMarkdownTheme("markdown_dark")}/>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
const style = {
    center:{ flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center" },
    container:{width:200},
    header:{ marginBottom:15 },
    headerText:{ fontSize:18 },
    white:{backgroundColor:"#fff"}
};