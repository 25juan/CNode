import {
    observable,
    computed,
    action
} from "mobx" ;
import images from "../asserts"
const base = {
    loginname:"", // 用户登录名称
    avatar_url:images.user, //用户头像地址
    githubUsername:"",
    create_at:"",
    score:0,
    recent_topics:[],
    recent_replies:[]
} ;
export default class {
    constructor(store){
        this.store = store ;
    }
    @observable
    _user = { //用户的基本数据类型
        ...base
    };
    @observable
    _topic = {} ; // 主題詳情

    @computed
    get topic(){
        return this.store.utils.parseTopic([this._topic])[0];
    }
    @observable
    collectTopics = []; // 用户收藏的主题
    @computed
    get user(){ //用户画面数据组装
        let o = this.store.utils.parseUser(this._user) ;
        o.collectTopics = this.store.utils.parseTopic(this.collectTopics) ;
        return o ;
    }
    @action.bound
    async getUser(loginname){
        let { http ,url } = this.store ;
        let result = await http.get({url:`${url.user}${loginname}`});
        this._user = result.data;
    }
    @action.bound
    async getCollectTopics(loginname){
        let { http ,url } = this.store ;
        let result = await http.get({url:`${url.collect_list}${loginname}`});
        this.collectTopics = result.data;
    }
    @action.bound
    async showUser(loginname = ""){
        await this.getUser(loginname);
        await this.getCollectTopics(loginname);
    }
    @action.bound
    getTopicById(id){
        let url = this.store.url.topic_detail ;
        let http = this.store.http ;
        let data = { accesstoken:this.store.user.user.token } ;
        return http.get({
            url:`${url}${id}`,
            data
        }).then((res)=>{
            this._topic = res.data ;
        });
    }
    @action.bound
    async refreshReply(){
        let topicId = this.topic.id ;
        await this.getTopicById(topicId) ;
    }
    @action.bound
    async reply(parmas){
        let topicId = this.topic.id ;
        let url = this.store.url.topic_reply.replace(":topic_id",topicId) ;
        let accesstoken = this.store.user.user.token ;
        let content = parmas.content + this.store.common.tail ;
        let data = { ...parmas,content , accesstoken } ;
        let http = this.store.http ;
        return await http.post({
            url:url,
            data
        });
    }
    @action.bound
    reset(){
        this._user = { ...base } ;
    }


}

