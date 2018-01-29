import React,{
    Component
} from "react";
import {
    TabNavigator
} from "react-navigation";
import { Icon } from "native-base" ;
import tabs from "./tab";
const activeTintColor = 'rgb(0, 179, 134)' ;
let config = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled:true,
    tabBarOptions: {
        showIcon:true,
        activeTintColor:activeTintColor,
        inactiveTintColor:"#333",
        indicatorStyle:{
            height:0
        },
        iconStyle:{
            marginTop:-2,
        },
        labelStyle:{
            marginTop:4,
        },
        style:{
            backgroundColor:"#fff",
            height:54
        }
    },
};
const parseTabs = (routers)=>{
    let tab = {} ;
    routers.map((v,k)=>{
        let route = {},
            navigationOptions ={};
        let {
            router,
            component,
            label,
            icon,
            title
        } = v ;
        route.screen = component;
        navigationOptions.tabBarLabel = label ;
        navigationOptions.title = title ;
        navigationOptions.headerTitle = title ;
        navigationOptions.header = null ;
        navigationOptions.tabBarIcon = ({ tintColor })=><Icon style={{color:tintColor}} name={icon}/> ;
        route.navigationOptions = navigationOptions ;
        tab[router] = route ;
    });
    return tab ;
};
export default (theme)=>{
    config.tabBarOptions = {...config.tabBarOptions,...theme} ;
    return TabNavigator(parseTabs(tabs),config);
}