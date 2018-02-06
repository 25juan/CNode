import {
    observable,
    computed,
    action
} from "mobx" ;
import images from "../asserts"
export default class {
    constructor(store){
        this.store = store ;
    }
    @observable
    _user = { //用户的基本数据类型
        loginname:"", // 用户登录名称
        avatar_url:images.user, //用户头像地址
        githubUsername:"",
        create_at:"",
        score:0,
        recent_topics:[],
        recent_replies:[]
    };
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
        console.log(result);
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


}

