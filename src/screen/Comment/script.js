const style = `<style>
        body{
            padding: 0;
            margin: 0 ;
        }
        .markdown-text .row{
            display: flex;
            flex-direction: row;
        }
        .markdown-text .row_container{
            padding: 10px 7px;
            border-bottom: solid 1px #ddd;
        }
        .markdown-text .row:last-child{
            margin-bottom: 0px;
        }
        .markdown-text .flex{
            flex: 1 1 auto ;
        }
        .markdown-text .comment-content{
            padding: 0 10px;
            overflow-x: auto;
        }
        .markdown-text .text-right{
            text-align: right;
            margin-top: 7px;
        }
        .markdown-text .user-header-image{
            width: 40px;
            height: 40px;
            max-width: 40px;
            min-height: 40px;
        }
        .markdown-text .comment-content-textarea{
            font-size: 10px;
            width: 100%;   
        }
        .markdown-text .comment-index{
            text-align: center;
        }
        .markdown-text .topics_sub{
            font-size: 12px;
            margin:  10px 0;
            font-weight: bold;
        }
        .topics_sub{
            color: #999699;
        }
        .reply{
            padding: 0  10px;
        }
        .markdown-text .text-link{
            color: #337ab7;
        }
    </style>`;
const renderComment = (comment, index) => {
    return `<div class="markdown-text">
        <input type="hidden" id="authorName" value="${comment.authorName}">
        <div class="row row_container">
            <div id="header">
                <img class="user-header-image" src="${comment.authorUrl}" alt="cnode">
            </div>
            <div class="flex comment-content">
                <div class="row">
                    <div class="flex ">
                        <p id="name" class="topics_sub authorname">${comment.authorName}</p>
                    </div>
                    <div>
                        <p class="topics_sub"><span class="good">👍</span> ${comment.upsCount}</p>
                    </div>
                    <div class="reply" id="reply" onclick="reply('${comment.id}','${comment.authorName}')">
                        <p class="topics_sub"><span class="text-link">回复</span></p>
                    </div>
                </div>
                <div class="comment-content-textarea">
                   ${comment.content}
                </div>
                
                <div class="row">
                    <div class="topics_sub comment-index">${index + 1}楼</div>
                    <div class="flex">
                        <div class="text-right topics_sub">
                            发表时间：${comment.createAt}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};
const render = (comments) => {
    return comments.map(renderComment).join("");
};
const script = `
<script>  
    function showUser(user){
        var user = document.getElementById("authorName").value ;
        postMsg("showUser",user);
    }
    function init() {
      document.getElementById("header").onclick = showUser ;
      document.getElementById("name").onclick = showUser ;
    }
    function reply(id,authorName) {
      postMsg("reply",{authorName:authorName,id:id});
    }
    init();
</script>
`
export default (comments, markdownStyle = "") => `${markdownStyle} ${style}  ${render(comments)} ${script}`;