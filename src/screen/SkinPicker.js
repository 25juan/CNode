import React,{Component} from "react" ;
import {
    Modal,
    View,
    Text,
    Alert
} from "react-native" ;
import { Container,Content,List,ListItem } from "native-base" ;
import { HeaderWithBackIcon } from "../component/Header" ;
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
        this.props.common.theme = theme;
    }
    setMarkdownTheme(theme){
        this.props.common.markdownStyle = theme ;
    }
    eachAppTheme(){
        let { theme,_theme,allTheme } = this.props.common ;
        let list = [] ;
        let appTheme = allTheme.appTheme ;
        for(let i in appTheme){
            list.push(<ListItem key={i}>
                            <Radio color={theme.rcColor} label={appTheme[i].text}
                            checked={(_theme === i)}
                            onChange={() => this.setAppTheme(i)}/>
                        </ListItem>);
        }
        return list ;
    }
    render(){
        let { theme,_theme,_markdownStyle } = this.props.common ;
        return (
            <Container style={{backgroundColor:theme.listViewBackgroundColor}}>
                <HeaderWithBackIcon onPress={()=>{this.props.navigation.goBack()}} theme={theme} title={"皮肤设置"}/>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text style={style.headerText}>应用主题设置</Text>
                        </ListItem>
                        {this.eachAppTheme()}
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