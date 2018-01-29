import React,{
    Component
} from "react" ;
import SuperWebView from "../component/html_view" ;
import moment from "moment" ;
export default class Topic extends Component{
    render(){
        let { article } = this.props.navigation.state.params;
        let topic = {} ;
        topic.content = article.content || "";
        topic.title = article.title || "" ;
        topic.visit =article["visit_count"] || "" ;
        topic.create = moment(article["create_at"]).format("YYYY-MM-DD") || " " ;

        console.log(article["create_at"])
        return <SuperWebView topic={topic}/>
    }
}