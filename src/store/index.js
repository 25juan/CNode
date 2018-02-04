/***
 * 組合屬性
 */
import Common from "./common" ;
import Http from  "./http" ;
import Topics from "./topics" ;
import User from "./user" ;
import url from "./url" ;
class Store {
    constructor(){
        this.url = url;
        this.http = new Http(this);
        this.common = new Common(this);
        this.topics = new Topics(this);
        this.user = new User(this);
    }
}
const store = new Store();
export default store ;