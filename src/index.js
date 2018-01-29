import React, {
    Component
} from "react";
import {
    StackNavigator
} from "react-navigation";
import Tabs from "./tab" ;
import Topic from "./screen/Topic" ;
import {
    observer,
    inject
} from "mobx-react/native" ;
import {
    Root
} from "native-base";
@inject("common")
@observer
export default class StackScreen extends Component {
    getStackScreen() {
        const {theme} = this.props.common;
        return StackNavigator({
            Home: {screen: Tabs(theme)},
            Topic:{screen: Topic}
        })
    }

    render() {
        const Stack = this.getStackScreen();
        return (
            <Root>
                <Stack/>
            </Root>
        )
    }
}