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
const Stack = StackNavigator({
    Home: {screen: Tabs},
    Topic:{screen: Topic},
    SkinPicker:{screen:SkinPicker},
    User:{screen:User},
    Comment:{screen:Comment}
});
@inject("common")
@inject("topics")
@observer
export default class StackScreen extends Component {
    toast = null ;
    componentDidMount() {
        setTimeout(()=>{
            SplashScreen.hide();
        },3000);
    }
    render() {

        return (
            <Root>
                <Stack/>
            </Root>
        )
    }
}