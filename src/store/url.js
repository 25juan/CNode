const online = "https://cnodejs.org/api/v1";
const mock = "http://rap.taobao.org/mockjsdata/30481";
let dev = false;
const urls = {
    topic_list: "/topics", // 主题列表、新规 
    topic_update: "/topics/update", // 编辑主题 
    topic_detail: "/topic/", //主题详情 
    topic_collect: "/topic_collect/collect",//收藏主题 
    topic_reply: "/topic/:topic_id/replies", // 主题评论 
    collect_del: "/topic_collect/de_collect", // 取消收藏 
    collect_list: "/topic_collect/",
    reply_up: `/reply/:id/ups`, // 为评论点赞 
    message_count: "/message/count", // 未读消息数目 
    mark_read: "/message/mark_one/:msg_id",// 标记为已读 
    message_list: "/messages", //消息列表 
    mark_all: "/message/mark_all",//全部标记为已读 
    user: "/user/",//个人信息详情 
    token: "/accesstoken",//验证token 
    share: "https://cnodejs.org/topic/" //分享主題的前綴
};
function parse() {
    let prefix = online;
    if (dev) {
        prefix = mock;
    }
    let o = {};
    for (let url in urls) {
        o[url] = (/^https:|^http:/.test(urls[url]) ? urls[url] : prefix + urls[url]);
    }
    return o;
}
export default parse();

