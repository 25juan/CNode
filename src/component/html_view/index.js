import React, {
    Component
} from "react" ;
import {
    WebView,
    Linking
} from "react-native" ;
import injectScript from "./script";

export default class SuperWebView extends Component {
    webView = null;
    onMessage(e) {
        console.log(e);
        let data = e.nativeEvent.data;
        let obj = JSON.parse(data);
        typeof this[obj.method] == "function" ? this[obj.method](obj.params) : "";
    }
    openLink(data) {
        Linking.canOpenURL(data).then(supported=>{
            if (!supported) {
                alert("支持打开该链接!")
            } else {
                Linking.openURL(data).catch(() => {
                    alert("链接打开失败,请稍后重试.")
                });
            }
        })
    }
    openImage(url) {
       console.log(url);
    }
    render() {
        let { topic } = this.props;
        return (
            <WebView
                scalesPageToFit={true}
                onMessage={this.onMessage.bind(this)}
                ref={webView => this.webView = webView}
                source={{html: injectScript(topic), baseUrl: " "}}
            />
        )
    }
}