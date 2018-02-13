/***
 * 定義全局的共用屬性
 */
import theme from "./theme" ;
import {
    observable,
    computed,
    action
} from "mobx" ;
import markdown_light from "./theme/markdow_light";
let storage = global._storage ;
class Common {
    constructor(store){
        this.store = store ;
        storage.load({key: 'tail'}).then((res)=>this._tail = res).catch(()=>{});
        storage.load({key: 'message'}).then((res)=>this._message = res).catch(()=>{});
        storage.load({key: 'theme'}).then((res)=>this._theme = res).catch(()=>{});
        storage.load({key: 'markdownStyle'}).then((res)=>this._markdownStyle = res).catch(()=>{});
    }
    @observable
    networkError = false ;
    @observable
    _tail = true ;
    set tail(value){
        storage.save({key: 'tail',data: value});
        this._tail = value ;
    }
    @observable
    _message = true ;
    set message(value){
        storage.save({key: 'message',data: value});
        this._message = value ;
    }
    @observable
    _theme = "normal" ;
    @computed
    get theme(){ // 获取整个APP的颜色配置
        return theme[this._theme] ;
    }
    set theme(value){
        storage.save({key: 'theme',data: value});
        this._theme =  value;
    }
    @observable
    _markdownStyle = "markdown_light" ;
    @computed
    get markdownStyle(){ // 获取文章详情的的颜色配置
        return theme[this._markdownStyle] ;
    }
    set  markdownStyle(value){ // 获取文章详情的的颜色配置
        storage.save({key: 'markdownStyle',data: value});
        this._markdownStyle =  value;
    }
    @observable
    loading = false ; // 控制loading框

    @observable
    refreshing = false ; // 控制scrollView 里面refreshControl 的显示

    @observable
    loadMoreloading = false ; // 控制加载更多的显示

    @observable
    toastText = "" ;
    @action.bound
    showToast(text){
        this.toastText = text ;
        this.toastText = "" ; //重置toast 屬性
    }
}
export default Common;
