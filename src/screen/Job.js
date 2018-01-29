import React,{
    Component
} from "react" ;
import {
    Text
} from "react-native";
import LayoutHeaderWithoutIcon from "../component/LayoutHeaderWithoutIcon";
import TopicList from "./TopicList" ;
import {
    observer,
    inject
} from "mobx-react/native"
@inject("common")
@inject("topics")
@observer
export default class Job extends Component{
    render(){
        let { navigation } = this.props ;
        return (
            <LayoutHeaderWithoutIcon theme = {this.props.common.theme} title={"CNode 社区-招聘"}>
                <TopicList navigation={navigation} tab={"job"}/>
            </LayoutHeaderWithoutIcon>
        )
    }
}