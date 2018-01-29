import React,{
    Component
} from "react" ;
import {
    Text
} from "react-native";
import LayoutHeaderWithoutIcon from "../component/LayoutHeaderWithoutIcon"
import ListItem from "../component/ListItem";
import {
    observer,
    inject
} from "mobx-react/native"
@inject("common")
@inject("topics")
@observer
export default class Mine extends Component{
    render(){
        return (
            <LayoutHeaderWithoutIcon theme = {this.props.common.theme} title={"CNode 社区-我的"}>
                <Text>
                    我的
                </Text>
            </LayoutHeaderWithoutIcon>
        )
    }
}