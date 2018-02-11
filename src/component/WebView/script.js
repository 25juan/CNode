const style = `
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />`;

const script = `
    <script>  
function addHttps() {
    var img = document.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
        var src = img[i].getAttribute("src");
        src = (/^https:|^http:/.test(src)) ? src : ("https:" + src);
        img[i].setAttribute("src", src);
    }
}
function postMsg(method,param){
    window.postMessage(JSON.stringify({params: param, method:method}));
}
function each(arr,callback) {
  for(var i = 0 ;i<arr.length ;i++){
      callback(arr[i],i);
  }
}
function openLink(node ,link){
    var url = node.getAttribute(link) ;
    node.onclick = function(event) {
      postMsg("openLink",url);
      event.preventDefault();
    } ;
}
function linkEvents() {
    var a = document.getElementsByTagName('a');
    var buttons  = document.getElementsByTagName('button');
    each(a,function(v) {
      openLink(v,"href");
    });
    each(buttons,function(v) {
      openLink(v,"data-href");
    })
}
function imageEvents() {
    var a = document.getElementsByTagName('img');
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function (event) {
            postMsg("openImage",this.getAttribute("src"))
            event.preventDefault();
        }
    }
}
    window.onload= function() {
        setTimeout(function() {
          window.postMessage(JSON.stringify({params: document.body.clientHeight, method: "setHeight"}));
        },2000)
    }
    addHttps();
    linkEvents();
    imageEvents();
    </script>
`;
export default (html) => `${style} ${html} ${script}`;