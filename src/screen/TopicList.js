import React,{
    Component
} from "react" ;
import {
    ScrollView,
    RefreshControl,
    ActivityIndicator,
    Platform,
    View,
    Text,
    FlatList
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
    isOpen = false ;
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
    _renderFooter(){
        let { theme ,loadMoreloading } = this.props.common ;
        if(loadMoreloading){
            return <ScrollViewLoading theme={theme}/> ;
        }else{
            return <View/>
        }
    }
    render(){
        let { tab } = this.props ;
        let list = this.props.topics[tab] ;
        let { theme,refreshing } = this.props.common ;
        return (
            <FlatList
                style={{backgroundColor:theme.listViewBackgroundColor}}
                data={list}
                keyExtractor={(item)=>item.id}
                onEndReached={async()=>this.loadMore()}
                onEndReachedThreshold={30}
                refreshing={refreshing}
                onRefresh={async()=>this.refresh()}
                initialNumToRender={10}
                ListFooterComponent={()=>this._renderFooter()}
                renderItem={({item}) =><ListItem theme={theme} onLeftPress={()=>this.showUser(item.authorName)} onRightPress={()=>this.showArticle(item)} topic={item}/>}
            />
        )
    }
}