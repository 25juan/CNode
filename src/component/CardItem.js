import React from "react";
import { CardItem,Text,Card } from "native-base" ;
export default ({ children,divider })=>{
    const style = divider?{borderBottomWidth:1,borderBottomColor:"#ededed"}:{};
    return  <CardItem style={style}> <Text>55</Text> </CardItem>
}