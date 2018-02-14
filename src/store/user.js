import {
    observable,
    computed,
    action
} from "mobx";
import images from "../asserts"
let storage = global._storage ;
const defaultUser = { id:"",loginname:"登录",avatar_url:images.user,accesstoken:"" } ;
export default class {
    constructor(store){
        this.store = store ;
        storage.load({key: 'user'}).then((res)=>this._user = res).catch(()=>{});
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
    _user = {...defaultUser} ;
    @action.bound
    async validateAccessToken(accesstoken){
        let { token } = this.store.url;
        let data = await this.store.http.post({url:token ,data:{accesstoken}});
        if(data.success){
            delete data.success ;
            data.accesstoken = accesstoken ;
            this._user = data ;
            storage.save({key: 'user',data: data}); //登录信息持久化
        }
    }
    @action.bound
    deleteUser(){
        storage.remove({key: 'user'}).then((res)=>{
            this._user = {...defaultUser} ;
        });//删除登录信息
    }
    @action.bound
    async saveTopic(topic){
        let token = this.user.token ;
        topic.accesstoken = token ;
        topic.content = topic.content+ this.store.common.tail ;
        let { topic_list } = this.store.url;
        return this.store.http.post({url:topic_list,data:topic}) ;
    }

}