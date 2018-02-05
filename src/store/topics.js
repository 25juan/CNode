import {
    observable,
    action,
    computed
} from "mobx" ;
const requestParam = {
    limit:10,
    mdrender:true,
    page:1
} ;
import moment from "moment" ;
export default class Topics {
    constructor(store){
        this.store = store ;
    }
    @observable
    _share = [];
    @observable
    _ask=[] ;
    @observable
    _job=[] ;
    @computed
    get share(){
        return this.parseDate(this._share) ;
    }
    get ask(){
        return this.parseDate(this._ask) ;
    }
    get job(){
        return this.parseDate(this._job) ;
    }
    parseDate(list=[]){
        let data = list.map((v)=>{
            let obj = {} ;
            let url = v.author?v.author.avatar_url :"";
            obj.authorName = v.author?v.author.loginname:"" ;
            obj.authorUrl = (/^https:|^http:/.test(url) ? url : "https:" + url)  ;
            obj.content = v.content ;
            obj.createAt = moment(v["create_at"]).format("YYYY-MM-DD") ;
            obj.replyCount = v["reply_count"] ;
            obj.top = v.top ;
            obj.good = v.good ;
            obj.lastReplyAt = v["last_reply_at"] ;
            obj.title = v.title ;
            obj.visitCount = v["visit_count"] ;
            obj.tab = v.tab ;
            obj.authorId = v["author_id"] ;
            obj.id = v.id ;
            obj.before = moment(v["create_at"]).fromNow() ;
            return obj ;
        });
        return data;
    }
    params = { // 請求參數封裝
        share:{...requestParam,tab:"share"},
        ask:{...requestParam,tab:"ask"},
        job:{...requestParam,tab:"job"}
    };
    @action.bound
    async refresh(tab){
        this.params[tab] = {...this.params[tab],...requestParam} ;
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
        this[`_${params.tab}`] = isRefresh? [...results.data]: [...this[params.tab] , ...results.data ] ;
    }


}