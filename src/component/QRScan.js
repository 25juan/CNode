import React,{Component} from "react" ;
import { RNCamera } from "react-native-camera" ;
import { View,Animated,Easing } from "react-native" ;
export default class QRScan extends Component {
    state = {
        y: new Animated.Value(0),          // 透明度初始值设为0
    };
    componentDidMount(){
        this.animateStart() ;
    }
    animateStart(){
        Animated.timing(
            this.state.y,
            {
                toValue:1,
                duration:4000,
                easing: Easing.linear, //设置匀速运动
            }
        ).start(()=>{
           this.setState({ //这里需要知道setState是异步的
               y:new Animated.Value(0)
           },()=>{
              this.animateStart();
           });
        });
    }
    render(){
        let onBarCodeRead = this.props.onBarCodeRead||(()=>{});
        let { theme } = this.props ;
        let borderColor = { borderColor: theme.MAINCOLOR } ;
        let backgroundColor = { backgroundColor: theme.MAINCOLOR} ;
        return (
            <RNCamera
                style={style.camera}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                onBarCodeRead={(e)=>onBarCodeRead(e)}
                ref={ref => {this.camera = ref;}}
                permissionDialogTitle={'权限申请'}
                type={RNCamera.Constants.Type.back}
                permissionDialogMessage={'App需要使用照相机权限'}>
                <View style={style.container}>
                    <View style={[style.leftTop,style.base,borderColor]}/>
                    <View style={[style.rightTop,style.base,borderColor]}/>
                    <View style={[style.rightBottom,style.base,borderColor]}/>
                    <View style={[style.leftBottom,style.base,borderColor]}/>
                    <Animated.View style={[style.line,backgroundColor,{
                        top:this.state.y.interpolate({
                            inputRange: [0, 0.25, 0.5, 0.75, 1],
                            outputRange: [0,100, 200,100,0],
                        }),
                    }]}/>
                </View>
            </RNCamera>
        )
    }
}
const borderWidth = 2 ;
const style = {
    camera:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    container:{
        height:200,
        width:200,
        backgroundColor:"transparent"
    },
    base:{
        position:"absolute",
        height:50,
        width:50,
    },
    leftTop:{
        left:0,
        top:0,
        borderLeftWidth:borderWidth,
        borderTopWidth:borderWidth,
    },
    rightTop:{
        top:0,
        right:0,
        borderRightWidth:borderWidth,
        borderTopWidth:borderWidth,
    },
    rightBottom:{
        bottom:0,
        right:0,
        borderRightWidth:borderWidth,
        borderBottomWidth:borderWidth,
    },
    leftBottom:{
        bottom:0,
        left:0,
        borderLeftWidth:borderWidth,
        borderBottomWidth:borderWidth,
    },
    line:{
        width:200,
        position:"absolute",
        left:0,
        height : borderWidth
    }
};