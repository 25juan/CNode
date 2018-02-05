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
        let { html ,theme} = this.props;
        let  renderHtml = injectScript(html);
        return (
            <WebView
                startInLoadingState={true}
                renderLoading={()=><View style={style.loading}><Loading theme={theme}/></View>}
                scalesPageToFit={true}
                onMessage={this.onMessage.bind(this)}
                ref={webView => this.webView = webView}
                source={{html: renderHtml, baseUrl: ""}}
            />
        )
    }
}
const style = {
    loading:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
};