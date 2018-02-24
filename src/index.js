import React, {
    Component
} from "react";
import {
    StackNavigator
} from "react-navigation";
import Tabs from "./tab" ;
import Topic from "./screen/Topic" ;
import SkinPicker from "./screen/SkinPicker";
import User from "./screen/User" ;
import Comment from "./screen/Comment";
import WriteTopic from "./screen/WriteTopic" ;
import Login from "./screen/Login" ;
import Reply from "./screen/Reply" ;
import Message from "./screen/Message";
import {
    observer,
    inject
} from "mobx-react/native" ;
import SplashScreen from 'react-native-splash-screen';
import Toast from "react-native-easy-toast" ;
import {Root} from "native-base";
const Stack = StackNavigator({
    Home: {screen: Tabs},
    Topic:{screen: Topic},
    SkinPicker:{screen:SkinPicker},
    User:{screen:User},
    Comment:{screen:Comment},
    WriteTopic:{screen:WriteTopic},
    Login:{screen:Login},
    Reply:{screen:Reply},
    Message:{screen:Message},
});
@inject("common")
@observer
export default class StackScreen extends Component {
    toast = null ;
    componentDidMount() {
        setTimeout(()=>{
            SplashScreen.hide();
            this.showError();
        },3000);
    }
    componentWillReact(){
        this.showError();
    }
    showError(){
        let { networkError } = this.props.common ;
        networkError && this.toast.show("网络错误,请稍后重试");
        this.props.common.networkError = false ;
    }
    render() {
        return (
            <Root>
                <Stack/>
                <Toast ref={(toast)=>this.toast = toast}/>
            </Root>
        )
    }
}