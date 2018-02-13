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
import {
    observer,
    inject
} from "mobx-react/native" ;
import SplashScreen from 'react-native-splash-screen';
import {Root} from "native-base";
import Toast from "react-native-easy-toast" ;
@inject("common")
@inject("topics")
@observer
export default class StackScreen extends Component {
    toast = null ;
    componentDidMount() {
        setTimeout(()=>{
            SplashScreen.hide();
            this.showError();
        },3000);
    }
    getStackScreen() {
        const {theme} = this.props.common;
        return StackNavigator({
            Home: {screen: Tabs(theme)},
            Topic:{screen: Topic},
            SkinPicker:{screen:SkinPicker},
            User:{screen:User},
            Comment:{screen:Comment}
        });
    }
    componentWillReact(){
        this.showError();
    }
    showError(){
        let { networkError } = this.props.common ;
        networkError && this.toast.show("网络错误,请稍后重试");
    }
    render() {
        const Stack = this.getStackScreen();
        return (
            <Root>
                <Stack/>
                <Toast ref={(toast)=>this.toast = toast}/>
            </Root>
        )
    }
}