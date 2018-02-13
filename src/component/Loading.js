import React,{ Component} from "react" ;
import ScrollViewLoading from "./ScrollViewLoading" ;
import { Modal ,View} from "react-native";
export default class extends Component{
    render(){
        return (
            <Modal
                onRequestClose={()=>{}}
                visible={this.props.loading} transparent={true}>
                <View style={{flex:1,alignContent:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.2)"}}>
                    <View>
                        <ScrollViewLoading textColor={"#fff"} {...this.props}/>
                    </View>
                </View>
            </Modal>
        )
    }
}