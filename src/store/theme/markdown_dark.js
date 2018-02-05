export default `
    <style>
        .header{
                border-bottom:1px #ddd solid ;
                margin-bottom: 15px;
            }
          .markdown-text .content{
            padding:10px 0 ;
        }
        .markdown-text .title{
            text-align:left;
            font-size:24px ;
            color: rgba(255,255,255,.8);
        }
        .markdown-text .topics_info{
            display:flex ;
        }
        .markdown-text .flex{
            flex:1 1 auto ;
        }
        .markdown-text .topics_sub{
            color:  rgba(255,255,255,.4) ;
        }
    </style>
    <style>
        body{
            background-color: #333;
        }
        @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,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) format('woff');
}

.markdown-text {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}

.markdown-text .pl-c {
    color: #cccccc;
}

.markdown-text .pl-c1,
.markdown-text .pl-s .pl-v {
    color: #005cc5;
}

.markdown-text .pl-e,
.markdown-text .pl-en {
    color: #6f42c1;
}

.markdown-text .pl-smi,
.markdown-text .pl-s .pl-s1 {
    color: #ffffff;
}

.markdown-text .pl-ent {
    color: #22863a;
}

.markdown-text .pl-k {
    color: #d73a49;
}

.markdown-text .pl-s,
.markdown-text .pl-pds,
.markdown-text .pl-s .pl-pse .pl-s1,
.markdown-text .pl-sr,
.markdown-text .pl-sr .pl-cce,
.markdown-text .pl-sr .pl-sre,
.markdown-text .pl-sr .pl-sra {
    color: #032f62;
}

.markdown-text .pl-v,
.markdown-text .pl-smw {
    color: #e36209;
}

.markdown-text .pl-bu {
    color: #b31d28;
}

.markdown-text .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
}

.markdown-text .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
}

.markdown-text .pl-c2::before {
    content: "^M";
}

.markdown-text .pl-sr .pl-cce {
    font-weight: bold;
    color: #22863a;
}

.markdown-text .pl-ml {
    color: #735c0f;
}

.markdown-text .pl-mh,
.markdown-text .pl-mh .pl-en,
.markdown-text .pl-ms {
    font-weight: bold;
    color: #005cc5;
}

.markdown-text .pl-mi {
    font-style: italic;
    color: #ffffff;
}

.markdown-text .pl-mb {
    font-weight: bold;
    color: #ffffff;
}

.markdown-text .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
}

.markdown-text .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
}

.markdown-text .pl-mc {
    color: #e36209;
    background-color: #ffebda;
}

.markdown-text .pl-mi2 {
    color: #555555;
    background-color: #005cc5;
}

.markdown-text .pl-mdr {
    font-weight: bold;
    color: #6f42c1;
}

.markdown-text .pl-ba {
    color: #586069;
}

.markdown-text .pl-sg {
    color: #959da5;
}

.markdown-text .pl-corl {
    text-decoration: underline;
    color: #032f62;
}

.markdown-text .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
}

.markdown-text a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

.markdown-text a:active,
.markdown-text a:hover {
    outline-width: 0;
}

.markdown-text strong {
    font-weight: inherit;
}

.markdown-text strong {
    font-weight: bolder;
}

.markdown-text h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

.markdown-text img {
    border-style: none;
}

.markdown-text svg:not(:root) {
    overflow: hidden;
}

.markdown-text code,
.markdown-text kbd,
.markdown-text pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

.markdown-text hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

.markdown-text input {
    font: inherit;
    margin: 0;
}

.markdown-text input {
    overflow: visible;
}

.markdown-text [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

.markdown-text * {
    box-sizing: border-box;
}

.markdown-text input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.markdown-text a {
    color: #0366d6;
    text-decoration: none;
}

.markdown-text a:hover {
    text-decoration: underline;
}

.markdown-text strong {
    font-weight: 600;
}

.markdown-text hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
}

.markdown-text hr::before {
    display: table;
    content: "";
}

.markdown-text hr::after {
    display: table;
    clear: both;
    content: "";
}

.markdown-text table {
    border-spacing: 0;
    border-collapse: collapse;
}

.markdown-text td,
.markdown-text th {
    padding: 0;
}

.markdown-text h1,
.markdown-text h2,
.markdown-text h3,
.markdown-text h4,
.markdown-text h5,
.markdown-text h6 {
    margin-top: 0;
    margin-bottom: 0;
}

.markdown-text h1 {
    font-size: 32px;
    font-weight: 600;
}

.markdown-text h2 {
    font-size: 24px;
    font-weight: 600;
}

.markdown-text h3 {
    font-size: 20px;
    font-weight: 600;
}

.markdown-text h4 {
    font-size: 16px;
    font-weight: 600;
}

.markdown-text h5 {
    font-size: 14px;
    font-weight: 600;
}

.markdown-text h6 {
    font-size: 12px;
    font-weight: 600;
}

.markdown-text p {
    margin-top: 0;
    margin-bottom: 10px;
}

.markdown-text blockquote {
    margin: 0;
}

.markdown-text ul,
.markdown-text ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

.markdown-text ol ol,
.markdown-text ul ol {
    list-style-type: lower-roman;
}

.markdown-text ul ul ol,
.markdown-text ul ol ol,
.markdown-text ol ul ol,
.markdown-text ol ol ol {
    list-style-type: lower-alpha;
}

.markdown-text dd {
    margin-left: 0;
}

.markdown-text code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 12px;
}

.markdown-text pre {
    margin-top: 0;
    margin-bottom: 0;
    font: 12px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

.markdown-text .octicon {
    vertical-align: text-bottom;
}

.markdown-text .pl-0 {
    padding-left: 0 !important;
}

.markdown-text .pl-1 {
    padding-left: 4px !important;
}

.markdown-text .pl-2 {
    padding-left: 8px !important;
}

.markdown-text .pl-3 {
    padding-left: 16px !important;
}

.markdown-text .pl-4 {
    padding-left: 24px !important;
}

.markdown-text .pl-5 {
    padding-left: 32px !important;
}

.markdown-text .pl-6 {
    padding-left: 40px !important;
}

.markdown-text::before {
    display: table;
    content: "";
}

.markdown-text::after {
    display: table;
    clear: both;
    content: "";
}

.markdown-text>*:first-child {
    margin-top: 0 !important;
}

.markdown-text>*:last-child {
    margin-bottom: 0 !important;
}

.markdown-text a:not([href]) {
    color: inherit;
    text-decoration: none;
}

.markdown-text .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
}

.markdown-text .anchor:focus {
    outline: none;
}

.markdown-text p,
.markdown-text blockquote,
.markdown-text ul,
.markdown-text ol,
.markdown-text dl,
.markdown-text table,
.markdown-text pre {
    margin-top: 0;
    margin-bottom: 16px;
}

.markdown-text hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
}

.markdown-text blockquote {
    padding: 0 1em;
    color: #cccccc;
    border-left: 0.25em solid #dfe2e5;
}

.markdown-text blockquote>:first-child {
    margin-top: 0;
}

.markdown-text blockquote>:last-child {
    margin-bottom: 0;
}

.markdown-text kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
}

.markdown-text h1,
.markdown-text h2,
.markdown-text h3,
.markdown-text h4,
.markdown-text h5,
.markdown-text h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
}

.markdown-text h1 .octicon-link,
.markdown-text h2 .octicon-link,
.markdown-text h3 .octicon-link,
.markdown-text h4 .octicon-link,
.markdown-text h5 .octicon-link,
.markdown-text h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
}

.markdown-text h1:hover .anchor,
.markdown-text h2:hover .anchor,
.markdown-text h3:hover .anchor,
.markdown-text h4:hover .anchor,
.markdown-text h5:hover .anchor,
.markdown-text h6:hover .anchor {
    text-decoration: none;
}

.markdown-text h1:hover .anchor .octicon-link,
.markdown-text h2:hover .anchor .octicon-link,
.markdown-text h3:hover .anchor .octicon-link,
.markdown-text h4:hover .anchor .octicon-link,
.markdown-text h5:hover .anchor .octicon-link,
.markdown-text h6:hover .anchor .octicon-link {
    visibility: visible;
}

.markdown-text h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid #eaecef;
}

.markdown-text h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
}

.markdown-text h3 {
    font-size: 1.25em;
}

.markdown-text h4 {
    font-size: 1em;
}

.markdown-text h5 {
    font-size: 0.875em;
}

.markdown-text h6 {
    font-size: 0.85em;
    color: #cccccc;
}

.markdown-text ul,
.markdown-text ol {
    padding-left: 2em;
}

.markdown-text ul ul,
.markdown-text ul ol,
.markdown-text ol ol,
.markdown-text ol ul {
    margin-top: 0;
    margin-bottom: 0;
}

.markdown-text li>p {
    margin-top: 16px;
}

.markdown-text li+li {
    margin-top: 0.25em;
}

.markdown-text dl {
    padding: 0;
}

.markdown-text dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
}

.markdown-text dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
}

.markdown-text table {
    display: block;
    width: 100%;
    overflow: auto;
}

.markdown-text table th {
    font-weight: 600;
}

.markdown-text table th,
.markdown-text table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
}

.markdown-text table tr {
    background-color: #3c3c3c;
    border-top: 1px solid #c6cbd1;
}

.markdown-text table tr:nth-child(2n) {
    background-color: #555555;
}

.markdown-text img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}

.markdown-text code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
}

.markdown-text code::before,
.markdown-text code::after {
    letter-spacing: -0.2em;
    content: "\\00a0";
}

.markdown-text pre {
    word-wrap: normal;
}

.markdown-text pre>code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
}

.markdown-text .highlight {
    margin-bottom: 16px;
}

.markdown-text .highlight pre {
    margin-bottom: 0;
    word-break: normal;
}

.markdown-text .highlight pre,
.markdown-text pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #555555;
    border-radius: 3px;
}

.markdown-text pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
}

.markdown-text pre code::before,
.markdown-text pre code::after {
    content: normal;
}

.markdown-text .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
}

.markdown-text kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
}

.markdown-text :checked+.radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
}

.markdown-text .task-list-item {
    list-style-type: none;
}

.markdown-text .task-list-item+.task-list-item {
    margin-top: 3px;
}

.markdown-text .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
}

.markdown-text hr {
    border-bottom-color: #eee;
}
    </style>
`