import {
    observable,
    action,
    computed
} from "mobx" ;
const requestParam = {
    limit:10,
    mdrender:true,
    page:1
} ;
import moment from "moment" ;
export default class Topics {
    constructor(store){
        this.store = store ;
    }
    @observable
    _share = [
        {
            "author": {
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120",
                "loginname": "555"
            },
            "author_id": "4f447c2f0a8abae26e01b27d",
            "content": "<div class=\"markdown-text\"><p><img src=\"//dn-cnode.qbox.me/FhSNYCv6Ab9wzT6aUSfKLa0GtP4w\" alt=\"image.png\"></p>\n<blockquote>\n<p>原文地址：知乎专栏 <a href=\"https://zhuanlan.zhihu.com/p/31640541\">https://zhuanlan.zhihu.com/p/31640541</a></p>\n</blockquote>\n<p>给大家介绍下，Egg 2.0 正式版，今天 12.3 冒泡啦，距 3.21 的 <a href=\"https://zhuanlan.zhihu.com/p/25860846\">Egg 1.0 版本</a> 时隔 8 个月。</p>\n<p><img src=\"//dn-cnode.qbox.me/FrC_ZbrhyLkhVIquPOsMqPhvqsHX\" alt=\"image.png\"></p>\n<blockquote>\n<p><a href=\"https://eggjs.org/\">Egg</a> 是阿里 Node.js 的核心基础框架，面向『企业级的 Web 基础框架』这个领域，提供了「微内核 + 插件机制 + 框架定制能力」，完美达成生态共建和差异化定制的平衡点。<br>\n既适合个人小项目快速开发，也适合团队架构师基于自身的技术架构在 Egg 基础上扩展出适合特定团队业务场景的框架。<br>\n它沉淀自阿里在各行各业不同领域的大规模工程实践经验，稳定支撑了多年天猫双11大促，顶级流量压力。</p>\n</blockquote>\n<h2>2.0 特性</h2>\n<ul>\n<li>基于 Koa 2.x\n<ul>\n<li>异步解决方案直接基于 Async Function 。</li>\n<li>去除 co 兼容后<a href=\"https://github.com/eggjs/egg/wiki/co-vs-async\">堆栈信息更清晰</a>。</li>\n</ul>\n</li>\n<li>框架层优化带来 <a href=\"https://eggjs.github.io/benchmark/plot/\">30% 左右的性能提升</a>，不含 Node 8 带来的提升。</li>\n<li>为了方便开发者快速升级，保持了对 Egg 1.x 以及 generator function 的兼容。</li>\n</ul>\n<p><img src=\"//dn-cnode.qbox.me/Fuf5DkXMxM7wfClcN6B6LzX5d18Q\" alt=\"image.png\"></p>\n<h2>如何升级</h2>\n<p><strong><a href=\"https://eggjs.org/\">Egg</a> 的理念之一是渐进式增强，故我们为开发者提供渐进升级的体验。</strong></p>\n<ol>\n<li>Node.js 使用最新的 LTS 版本（&gt;=8.9.0）。</li>\n<li>修改 package.json 中 egg 的依赖为 ^2.0.0。</li>\n<li>检查相关插件是否发布新版本（可选）。</li>\n<li>重新安装依赖，跑单元测试。</li>\n</ol>\n<p><strong>搞定！几乎不需要修改任何一行代码，就已经完成了升级。</strong></p>\n<p>这得益于 Egg 对 1.x 的兼容，但为了更好的统一代码风格，以及更佳的性能和错误堆栈，我们建议开发者参考 <a href=\"https://eggjs.org/zh-cn/migration.html\">升级指南</a> 进一步升级。</p>\n<h2>未来规划</h2>\n<p>如您所知，Egg 采用的是 <strong>『微内核 + 插件 + 上层框架』</strong> 模式。</p>\n<p>其中微内核经过 3 年 4 个版本，以及在阿里的大规模应用，已经打磨的非常稳定。</p>\n<p>接下来我们的<strong>重心主要在开发者体验方面的优化</strong>，包括：</p>\n<ul>\n<li>更好的开发者体验，包括 TypeScript，开发者工具，IDE 工具等方面。</li>\n<li>社区扶持\n<ul>\n<li>协助业界的前端团队，打造适合特定团队业务场景的上层框架，欢迎勾搭。</li>\n<li>分享我们在团队、协作、规范化等方面的经验。</li>\n<li>分享在 Docker，GraphQL，SSR 等方面的探索和最佳实践分享。</li>\n</ul>\n</li>\n<li>国际化，官网和<a href=\"https://github.com/eggjs/egg/issues/363\">文档翻译</a>等。</li>\n</ul>\n<p>同时，我们也欢迎社区更多的<a href=\"https://github.com/orgs/eggjs/projects\">参与</a>，一起打造更完善的生态。</p>\n<p><img src=\"//dn-cnode.qbox.me/Fg_WHGNC13j2azgEWb-ONk5whle5\" alt=\"image.png\"></p>\n<h2>我们这一年</h2>\n<p>截止至今天(2017-12-03)：</p>\n<ul>\n<li><strong>GitHub 5.6k star</strong>，555 forks，npm 月下载量 11,140 (不含阿里内网数据)。</li>\n<li>从 1.0 到 2.0，我们一共发布了 <a href=\"https://github.com/eggjs/egg/releases\">18 个版本</a>，处理了 820 个 issue，收到了 500+ (主库 272) 个 Pull Request 。</li>\n<li>开发者体验方面的优化包括：<a href=\"https://eggjs.org/zh-cn/core/development.html#%E4%BD%BF%E7%94%A8-egg-bin-%E8%B0%83%E8%AF%95\">断点调试代理</a>，<a href=\"https://eggjs.org/zh-cn/core/development.html#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95\">单元测试+覆盖率</a>，<a href=\"https://eggjs.org/zh-cn/core/deployment.html#%E9%83%A8%E7%BD%B2\">部署工具</a>，TypeScript 支持，<a href=\"https://github.com/eggjs/vscode-eggjs\">VSCode 插件</a>，文档优化等等。</li>\n</ul>\n<p><strong>社区方面：</strong></p>\n<ul>\n<li>来自 BAT，丁香园，全民直播等多家兄弟公司的反馈和插件回馈。</li>\n<li>来自 <a href=\"https://github.com/eggjs/egg/network/dependents\">GitHub Dependents</a> 的统计：992 Repositories, 231 Packages</li>\n<li><a href=\"https://npms.io/search?q=egg-\">NPM 搜索结果</a>超过 400 个。</li>\n<li>上层框架：\n<ul>\n<li><a href=\"https://github.com/alibaba/beidou\">北斗</a> - Isomorphic framework for server-rendered React apps</li>\n<li><a href=\"https://github.com/avetjs/avet\">avet</a> - A very comfortable framework for writing isomorphic applications</li>\n</ul>\n</li>\n<li>如果你有好的分享，PR 传送门：<a href=\"https://github.com/eggjs/awesome-egg\">awesome-egg</a></li>\n</ul>\n<p><strong>趣味数据：</strong></p>\n<ul>\n<li>官网访问量中，Mac 占 47% → 这比例挺高的，看来 Node 程序猿都很幸福。</li>\n<li>周末的访问量约为平时的 1/3 → 看来 Node 程序猿周末加班少。（滑稽</li>\n<li>官网访问来源：站内，直链，外链各 30% 多，来自搜索引擎的较少。</li>\n</ul>\n<p><strong>分享交流：</strong></p>\n<ul>\n<li>在 <a href=\"http://2017.jsdc.tw/\">台灣 JSDC2017 開發者年會</a> 和 <a href=\"http://2017.imweb.io/index.html#schedule\">腾讯IMWebConf</a> 分享了『<a href=\"https://github.com/atian25/blog/raw/master/assets/files/Egg%20%26%20Node.js%20%E4%BB%8E%E5%B0%8F%E5%B7%A5%E5%9D%8A%E8%B5%B0%E5%90%91%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BC%80%E5%8F%91.pdf\">Egg &amp; Node.js 从小工坊走向企业级开发</a>』</li>\n</ul>\n<p><img src=\"//dn-cnode.qbox.me/FgFUrGpNw07LKQPYzGgZp64j7CZH\" alt=\"image.png\"></p>\n<ul>\n<li>Node TSC @张秋怡 在 <a href=\"https://nina17.sched.com/event/Atii/nodejs-at-alibaba-a-joyee-cheung-alibaba-cloud\">Node Interactive North America 2017</a> 和 <a href=\"http://nodefest.jp/2017/schedule.html#joyee\">東京Node学園祭2017</a> 分享了『<a href=\"https://github.com/joyeecheung/talks/blob/master/node_fest_2017/nodejs_at_alibaba_tokyo.pdf\">Node.js at Alibaba</a>』。</li>\n</ul>\n<p><img src=\"//dn-cnode.qbox.me/Fl5IyrfAMzQ49Uz3eQ67i2FLL09H\" alt=\"image.png\"></p>\n<ul>\n<li><a href=\"/user/ngot\">@ngot</a> 在 <a href=\"https://www.bagevent.com/event/751307\">Node Party</a> 分享了『<a href=\"https://github.com/Hangzhou-Node-Party/Node-Party/blob/master/2017-08-19/Egg.js%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E9%9B%86%E5%9B%A2%E7%9A%84%E7%9A%84%E5%AE%9E%E8%B7%B5%E8%BF%90%E7%94%A8.pdf\">Egg.js 在阿里巴巴集团的实践运用</a>』</li>\n<li>@姜天意 在 <a href=\"http://2017.imweb.io/index.html#schedule\">腾讯IMWebConf</a> 分享了 『<a href=\"https://github.com/jtyjty99999/share/blob/master/security%20risk%20in%20node%20web.pdf\">脆弱的 Node.js</a>』</li>\n</ul>\n<h2>写在最后</h2>\n<p>开源，痛并快乐着。</p>\n<p><img src=\"//dn-cnode.qbox.me/Fiamh5LNYR3e2E0HtdhrO3sVfHrs\" alt=\"image.png\"></p>\n</div>",
            "create_at": "2017-12-03T13:58:58.901Z",
            "good": true,
            "id": 1104862,
            "last_reply_at": "2017-12-21T07:12:44.443Z",
            "reply_count": 57,
            "tab": "share",
            "title": "企业级 Node.js",
            "top": true,
            "visit_count": 5821
        }
    ];
    @observable
    _ask=[] ;
    @observable
    _job=[] ;
    @computed
    get share(){
        return this.store.utils.parseTopic(this._share) ;
    }
    get ask(){
        return this.store.utils.parseTopic(this._ask) ;
    }
    get job(){
        return this.store.utils.parseTopic(this._job) ;
    }
    params = { // 請求參數封裝
        share:{...requestParam,tab:"share"},
        ask:{...requestParam,tab:"ask"},
        job:{...requestParam,tab:"job"}
    };
    @action.bound
    async refresh(tab){
        this.params[tab] = {...this.params[tab],...requestParam} ;
        let param = this.params[tab] ;
        let url = this.store.url.topic_list ;
        this.store.common.refreshing = true ; // 显示 刷新 框
        await this.getTopics(url,param,true) ;
        this.store.common.refreshing = false ; // 关闭 刷新 框
    }
    @action.bound
    async loadMore(tab){
        this.params[tab].page = this.params[tab].page+1 ;
        let param = this.params[tab] ;
        let url = this.store.url.topic_list ;
        this.store.common.loadMoreloading = true ; // 显示 刷新 框
        await this.getTopics(url,param) ;
        this.store.common.loadMoreloading = false ; // 关闭 刷新 框
    }
    @action.bound
    async getTopics(url,params={},isRefresh){
        let results = await this.store.http.get({
            url:url,
            data:params
        });
        this[`_${params.tab}`] = isRefresh? [...results.data]: [...this[`_${params.tab}`] , ...results.data ] ;
    }


}