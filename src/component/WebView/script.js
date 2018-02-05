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
function linkEvents() {
    var a = document.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function (event) {
            window.postMessage(JSON.stringify({params: this.href, method: "openLink"}));
            event.preventDefault();
        }
    }
}
function imageEvents() {
    var a = document.getElementsByTagName('img');
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function (event) {
            window.postMessage(JSON.stringify({params: this.getAttribute("src"), method: "openImage"}));
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