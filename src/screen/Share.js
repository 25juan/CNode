import React,{
    Component
} from "react" ;
import TopicList from "./TopicList" ;
import LayoutHeaderWithoutIcon from "../component/LayoutHeaderWithoutIcon" ;
import {
    observer,
    inject
} from "mobx-react/native";
@inject("common")
@observer
export default class Share extends Component{
    render(){
        let { theme } = this.props.common ;
        let navigation = this.props.screenProps ;
        return (
            <LayoutHeaderWithoutIcon theme = {theme} title={"CNode 社区-分享"}>
                <TopicList navigation = {navigation} tab={"share"}/>
            </LayoutHeaderWithoutIcon>
        )
    }
}