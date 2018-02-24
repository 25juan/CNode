import React,{Component} from "react" ;
import { RNCamera } from "react-native-camera" ;
export default class QRScan extends Component {
    render(){
        let onBarCodeRead = this.props.onBarCodeRead||(()=>{});
        return (
            <RNCamera
                style={style.camera}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                onBarCodeRead={(e)=>onBarCodeRead(e)}
                ref={ref => {this.camera = ref;}}
                permissionDialogTitle={'权限申请'}
                type={RNCamera.Constants.Type.back}
                permissionDialogMessage={'App需要使用照相机权限'}>
            </RNCamera>
        )
    }
}
const style = {
    camera:{
        flex:1
    }
}