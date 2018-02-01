import React,{
    Component
} from "react" ;
import SuperWebView from "../component/html_view" ;
import { Share,Linking } from "react-native";
import moment from "moment" ;
import {
    Col,
    Right,
    Text,
    Button,
    Icon
} from "native-base";
import url from "../store/url"
import { HeaderWithBackIcon as Header } from "../component/LayoutHeaderWithoutIcon";
import {
    observer,
    inject
} from "mobx-react/native";
import { observable } from "mobx" ;
import alert from "../component/Alert" ;
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
@inject("common")
@observer
export default class Topic extends Component{
    @observable
    topic = {};
    static navigationOptions={header:null} ;
    setMenuRef = ref => {
        this.menu = ref;
    };
    refresh(){
        this.menu.hide();
    }
    share(){
        let { article } = this.props.navigation.state.params;
        let link = url.share+article.id;
        Share.share({
            message:link,
            title:"分享该文章",
            url:link
        });
    }
    openBrowser(){
        let { article } = this.props.navigation.state.params;
        let link = url.share+article.id;
        alert("是否在浏览器中打开?",()=>{
            this.hideMenu();
            Linking.openURL(link);
        });
    }
    hideMenu = () => {
        this.menu.hide();
    };
    showMenu = () => {
        this.menu.show();
    };
    back(){
        this.props.navigation.goBack();
    }
    componentWillReact(){
        /*let { article } = this.props.navigation.state.params;
        let topic = {} ;
        topic.content = article.content || "";
        topic.title = article.title || "" ;
        topic.visit =article["visit_count"] || "" ;
        topic.create = moment(article["create_at"]).format("YYYY-MM-DD") || " " ;
        this.topic = topic ;
        console.log(this.topic);*/
        console.log("render...")
    }
    render(){
        let { article } = this.props.navigation.state.params;
        let { theme } = this.props.common ;
        let topic = {} ;
        topic.content = article.content || "";
        topic.title = article.title || "" ;
        topic.visit =article["visit_count"] || "" ;
        topic.create = moment(article["create_at"]).format("YYYY-MM-DD") || " " ;
        return (<Col>
                    <Header title={article.author.loginname} onPress={()=>this.back()} theme={theme}>
                        <Right>
                            <Button onPress={()=>this.share()} transparent>
                                <Icon style={{color:theme.headerTextColor}} android={"md-share-alt"} ios={"ios-share-alt-outline"}/>
                            </Button>
                            <Menu
                                ref={this.setMenuRef}
                                button={(
                                    <Button onPress={()=>this.showMenu()} transparent>
                                        <Icon style={{color:theme.headerTextColor}} android={"md-more"} ios={"ios-more-outline"}/>
                                    </Button>
                                )}
                            >
                                <MenuItem onPress={()=>this.refresh()}>刷新</MenuItem>
                                <MenuItem onPress={()=>this.openBrowser()}>浏览器中打开</MenuItem>
                                <MenuItem onPress={()=>this.hideMenu()}>收藏</MenuItem>
                            </Menu>
                        </Right>
                    </Header>
                    <SuperWebView theme={theme} topic={topic}/>
                </Col>)
    }
}