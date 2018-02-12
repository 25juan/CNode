import React,{
    Component
} from "react" ;
import {
    ScrollView,
    RefreshControl,
    ActivityIndicator,
    Platform,
    View,
    Text
} from "react-native";
import ScrollViewLoading  from "../component/ScrollViewLoading" ;
import ListItem from "../component/ListItem";
import LayoutHeaderWithoutIcon from "../component/LayoutHeaderWithoutIcon" ;
import {
    observer,
    inject
} from "mobx-react/native";
@inject("common")
@inject("topics")
@inject("topic")
@observer
export default class Share extends Component{
    async componentDidMount(){
        await this.refresh() ;
    }
    async refresh(){
        let { tab } = this.props ;
        await this.props.topics.refresh(tab) ;
    }
    async onScroll(e){
        let { loadMoreloading } = this.props.common ;
        const cacheHeight = 120 ; //定义缓冲变量
        let contentHeight = e.nativeEvent.contentSize.height ;
        let offsetY = e.nativeEvent.contentOffset.y ;
        let height = e.nativeEvent.layoutMeasurement.height ;
        let isLoad = contentHeight && (contentHeight>=offsetY+height) && (contentHeight-cacheHeight<=offsetY+height) ;
        if(isLoad){
            await this.loadMore()
        }
    }
    async loadMore(){
        let { tab } = this.props ;
        await this.props.topics.loadMore(tab) ;
    }
    showArticle(article){
        let { navigation,topic } = this.props ;
        topic.getTopicById(article.id);
        navigation.navigate("Topic") ;
    }
    showUser(authorName){
        let { navigate } = this.props.navigation ;
        navigate("User",{authorName});
    }
    render(){
        let { tab } = this.props ;
        let list = this.props.topics[tab] ;
        let { theme ,refreshing,loadMoreloading } = this.props.common ;
        return (
            <ScrollView
                scrollEventThrottle={2000}
                onScroll={async (e)=> await this.onScroll(e)}
                style={{paddingVertical:5,backgroundColor:theme.listViewBackgroundColor}}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={async()=>await this.refresh()}
                    colors={[theme.loadingColor]}
                    progressBackgroundColor={theme.loadingBackgroundColor}
                    tintColor={theme.loadingBackgroundColor}
                    title={"数据刷新中..."}/>}
                showsVerticalScrollIndicator={false}
            >
                {list.slice().map((v)=><ListItem onLeftPress={()=>this.showUser(v.authorName)} onRightPress={()=>this.showArticle(v)} topic={v} key={v.id}/>)}
                {
                    Platform.OS == "ios"?((!list.length || loadMoreloading)&&  <ScrollViewLoading theme={theme}/>):
                        (loadMoreloading&&  <ScrollViewLoading theme={theme}/>)
                }
                <View style={{height:20}}/>
            </ScrollView>
        )
    }
}