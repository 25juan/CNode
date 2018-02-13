import {
    observable,
    computed,
    action
} from "mobx";
import images from "../asserts"
export default class {
    constructor(store){
        this.store = store ;
    }
    @computed
    get login(){// 检测用户是否登录
        return !!this._user.id;
    }
    @computed
    get user(){
        let { id,loginname, avatar_url,accesstoken } = this._user ;
        if(typeof avatar_url === "string"){
            avatar_url = {uri:(/^https:|^http:/.test(avatar_url) ? avatar_url : "https:" + avatar_url)};
        }
        return { id,authorName:loginname, authorUrl:avatar_url,token: accesstoken} ;
    }
    @observable
    _user = { id:"",loginname:"登录",avatar_url:images.user,accesstoken:"" } ;
    @action.bound
    async validateAccessToken(accesstoken){
        let { token } = this.store.url;
        let data = await this.store.http.post({url:token ,data:{accesstoken}});
        if(data.success){
            delete data.success ;
            data.accesstoken = accesstoken ;
            this._user = data ;
        }
    }
    @action.bound
    async saveTopic(topic){
        let token = this.user.token ;
        topic.accesstoken = token ;
        let { topic_list } = this.store.url;
        return this.store.http.post({url:topic_list,data:topic}) ;
    }

}