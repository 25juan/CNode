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
class Common {
    constructor(store){
        this.store = store ;
    }
    @observable
    themeKey = "normal" ;
    @computed
    get theme(){ // 主題
        return theme[this.themeKey] ;
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
