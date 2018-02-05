/***
 * 定義全局的共用屬性
 */
import theme from "./theme" ;
import {
    observable,
    computed,
    action
} from "mobx" ;
import normal from "./theme/normal";
import markdown_light from "./theme/markdow_light";
class Common {
    constructor(store){
        this.store = store ;
    }
    @observable
    _theme = "normal" ;
    @computed
    get theme(){ // 获取整个APP的颜色配置
        return theme[this._theme] ;
    }
    @observable
    _markdownStyle = "markdown_light" ;
    @computed
    get markdownStyle(){ // 获取文章详情的的颜色配置
        console.log(theme[this._markdownStyle]);
        return theme[this._markdownStyle] ;
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
