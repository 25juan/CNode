/**
 * 封装的HTTP 模块
 */
const filter = (res) => res.json();
/**  * 该方法是将json 转换成为url拼接的字符串  * @param json { a:1,b:2 } => a=1 & b=2  */ function json2Param(object) {
    var params = [];
    for (var i in object) {
        params.push(i + '=' + object[i]);
    }
    return params.join("&");
}

export default class Fetch {
    constructor(store) {
        this.store = store;
    }

    async ajax(url, params) {
        return await fetch(url, params).then(filter)
    }
    async get(config) {
        let {url, data = {}} = config;
        if (!url) return;
        var params = json2Param(data);
        url += url.indexOf("?") > -1 ? `&${params}` : `?${params}`;
        return await this.ajax(url);
    }
    post (config){
        let {url, data = {}} = config;
        if (!url) return;
        return this.ajax(url, {
            method: "POST",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
    }
}
