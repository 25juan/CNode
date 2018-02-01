import {
    Alert
} from "react-native";
export default (msg="",saveback=()=>{},closeback=()=>{})=>{
    Alert.alert("提示",msg,[
            {text: '取消', onPress: () =>closeback(), style: 'cancel'},
            {text: '确认', onPress: () =>saveback()},
        ],
        { cancelable: false });
}