import {
    observable,
    action
} from "mobx" ;
const param = {
    limit:10,
    mdrender:true,
    page:1
} ;
export default class Topics {
    constructor(store){
        this.store = store ;
    }
    @observable
    share = [];
    @observable
    ask=[] ;
    @observable
    job=[] ;
    params = { // 請求參數封裝
        share:{...param,tab:"share"},
        ask:{...param,tab:"ask"},
        job:{...param,tab:"job"}
    };
    @action.bound
    async refresh(tab){
        this.params[tab] = {...this.params[tab],...param} ;
        let param = this.params[tab] ;
        let url = this.store.url.topic_list ;
        this.store.common.refreshing = true ; // 显示 刷新 框
        await this.getTopics(url,param,true) ;
        this.store.common.refreshing = false ; // 关闭 刷新 框
    }
    @action.bound
    async loadMore(tab){
        this.params[tab].page = this.params[tab].page+1 ;
        let param = this.params[tab] ;
        let url = this.store.url.topic_list ;
        this.store.common.loadMoreloading = true ; // 显示 刷新 框
        await this.getTopics(url,param) ;
        this.store.common.loadMoreloading = false ; // 关闭 刷新 框
    }
    @action.bound
    async getTopics(url,params={},isRefresh){
        let results = await this.store.http.get({
            url:url,
            data:params
        });
        this[params.tab] = isRefresh? [...results.data]: [...this[params.tab] , ...results.data ] ;
    }


}