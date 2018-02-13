import React, {
    Component
} from "react" ;
import {
    WebView,
    Linking,
    View
} from "react-native" ;
import Loading from "../ScrollViewLoading";
import injectScript from "./script" ;
export default class SuperWebView extends Component {
    webView = null;
    onMessage(e) {
        let data = e.nativeEvent.data;
        let { method ,params } = JSON.parse(data);
        typeof this[method] === "function" ? this[method](params) : "";
        typeof this.props[method] === "function" ? this.props[method](params) : "";
    }
    openLink(data) {
        Linking.canOpenURL(data).then(supported=>{
            if (!supported) {
                console.log("不支持打开该链接!")
            } else {
                Linking.openURL(data).catch(() => {
                    console.error("链接打开失败,请稍后重试.")
                });
            }
        })
    }
    openImage(url) {
        console.log(url);
    }
    render() {
        let { html ,theme} = this.props;
        let  renderHtml = injectScript(html);
        return (
            <WebView
                startInLoadingState={true}
                renderLoading={()=><Loading cover={true} theme={theme}/>}
                scalesPageToFit={true}
                onMessage={this.onMessage.bind(this)}
                ref={webView => this.webView = webView}
                source={{html: renderHtml, baseUrl: ""}}
            />
        )
    }
}