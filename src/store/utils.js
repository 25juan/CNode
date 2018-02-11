import moment from "moment/moment";

export default class {
    constructor(store){this.store = store}
    parseUser(_user){
        let github = this.store.url.github ;
        let o = {} ;
        o.authorName = _user.loginname ;
        o.authorUrl = _user.avatar_url ;
        o.githubName = `${github}${_user.githubUsername}`;
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
        let share = this.store.url.share ;
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
            obj.link = share+v.id ;
            obj.before = moment(v["last_reply_at"]).fromNow() ;
            obj.comments = this.parseComments(v.replies||[]) ;
            return obj ;
        });
        return data;
    }
    parseComments(list=[]){
        let data = list.map((v)=>{
            let obj = { } ;
            obj.id = v.id ;
            obj.authorName = v.author.loginname ;
            obj.authorUrl = v.author.avatar_url ;
            obj.content = v.content ;
            obj.upsCount = v.ups.length || 0 ;
            obj.createAt = moment(v.create_at).fromNow() ;
            obj.isUped = v.is_uped ;
            return obj ;
        });
        return data ;
    }
}