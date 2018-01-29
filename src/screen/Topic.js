import React,{
    Component
} from "react" ;
import SuperWebView from "../component/html_view" ;
import moment from "moment" ;
import {
    Col,
    Right,
    Text,
    Button,
    Icon
} from "native-base";
import { HeaderWithBackIcon as Header } from "../component/LayoutHeaderWithoutIcon";
import {
    observer,
    inject
} from "mobx-react/native";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
@inject("common")
@observer
export default class Topic extends Component{
    static navigationOptions={header:null} ;
    setMenuRef = ref => {
        this.menu = ref;
    };
    hideMenu = () => {
        this.menu.hide();
    };

    showMenu = () => {
        this.menu.show();
    };
    back(){
        this.props.navigation.goBack();
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
                            <Menu
                                ref={this.setMenuRef}
                                button={(
                                    <Button onPress={()=>this.showMenu()} transparent>
                                        <Icon style={{color:theme.headerTextColor}} android={"md-more"} ios={"ios-more-outline"}/>
                                    </Button>
                                )}
                            >
                                <MenuItem onPress={()=>this.hideMenu()}>Test 1</MenuItem>
                                <MenuItem onPress={()=>this.hideMenu()}>Test 2</MenuItem>
                                <MenuItem onPress={()=>this.hideMenu()} disabled>
                                    Test 3
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onPress={()=>this.hideMenu()}>Test 4</MenuItem>
                            </Menu>
                        </Right>
                    </Header>
                    <SuperWebView topic={topic}/>
                </Col>)
    }
}