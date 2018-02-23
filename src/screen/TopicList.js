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
import LayoutHeaderWithoutIcon from "../component/Header" ;
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
    async loadMore(){
        let { tab } = this.props ;
        await this.props.topics.loadMore(tab) ;
    }
    showArticle(article){
        let { navigation,topic } = this.props ;
        navigation.navigate("Topic") ;
        topic.getTopicById(article.id);
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
                onEndReachedThreshold={1}
                refreshing={refreshing}
                onRefresh={async()=>this.refresh()}
                initialNumToRender={8}
                ListFooterComponent={()=>this._renderFooter()}
                renderItem={({item}) =><ListItem theme={theme} onLeftPress={()=>this.showUser(item.authorName)} onRightPress={()=>this.showArticle(item)} topic={item}/>}
            />
        )
    }
}