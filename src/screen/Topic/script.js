const header = (topic) => {
    return `
        <div class="markdown-text header">
                <div class="content">
                    <p class="title">${topic.title}</p>
                    <div class="topics_info">
                        <div class="flex topics_sub">
                            阅读量:${topic.visitCount}
                        </div>
                        <span class="text-right topics_sub">
                            发表时间: ${topic.createAt}
                        </span>
                    </div>
                </div>
        </div>
    `
};
const footer = (topic)=>{
    return `
        <div class="btn-container">
            <button data-href="${topic.link}" class="btn btn-block btn-primary">查看原文</button>
        </div> 
    `;
} ;
export default (topic,markdownStyle="") => `${markdownStyle}  ${header(topic)} ${topic.content} ${footer(topic)}`;