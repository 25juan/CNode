import moment from "moment/moment";

export default class {
    constructor(store){this.store = store}
    parseUser(_user){
        let o = {} ;
        o.authorName = _user.loginname ;
        o.authorUrl = _user.avatar_url ;
        o.githubName = `https://github.com/${_user.githubUsername}`;
        o.createAt = moment(_user.create_at||new Date()).format("YYYY-MM-DD") ;
        o.score = _user.score ;
        o.recentTopics = this.parseRecent(_user.recent_topics);
        return o ;
    }
    parseRecent(list=[]){
        return list.map(v=>{
            let obj = {} ;
            let url = v.author?v.author.avatar_url :"";
            obj.authorName = v.author?v.author.loginname:"" ;
            obj.authorUrl = (/^https:|^http:/.test(url) ? url : "https:" + url)  ;
            obj.title = v.title ;
            obj.id = v.id ;
            obj.replyAt = moment(v["last_reply_at"]).fromNow() ;
            return obj ;
        })
    }
    parseTopic(list=[]){
        let data = list.map((v)=>{
            let obj = {} ;
            let url = v.author?v.author.avatar_url :"";
            obj.authorName = v.author?v.author.loginname:"" ;
            obj.authorUrl = (/^https:|^http:/.test(url) ? url : "https:" + url)  ;
            obj.content = v.content || "";
            obj.createAt = moment(v["create_at"]).format("YYYY-MM-DD") ;
            obj.replyCount = v["reply_count"] ;
            obj.top = v.top ;
            obj.good = v.good ;
            obj.lastReplyAt = v["last_reply_at"] ;
            obj.title = v.title || "";
            obj.visitCount = v["visit_count"]|| 0 ;
            obj.tab = v.tab ;
            obj.authorId = v["author_id"] ;
            obj.id = v.id ;
            obj.before = moment(v["create_at"]).fromNow() ;
            return obj ;
        });
        return data;
    }
}