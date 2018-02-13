import React,{
    Component
} from "react" ;
import LayoutHeaderWithoutIcon from "../component/LayoutHeaderWithoutIcon";
import TopicList from "./TopicList" ;
import {
    observer,
    inject
} from "mobx-react/native"
@inject("common")
@inject("topics")
@observer
export default class Ask extends Component{
    render(){
        let navigation = this.props.screenProps ;
        return (
            <LayoutHeaderWithoutIcon theme = {this.props.common.theme} title={"CNode 社区-提问"}>
                <TopicList navigation={navigation} tab={"ask"}/>
            </LayoutHeaderWithoutIcon>
        )
    }
}