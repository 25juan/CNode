import Color from "color";
const MAINCOLOR = "#ff0000" ;
const FabColor = "#ff0000ba" ;
const loadingBackgroundColor = MAINCOLOR ;
const rcColor = MAINCOLOR ; //单复选框的颜色
const touchableBackgroundColor = MAINCOLOR ;
const activeTintColor = MAINCOLOR ;
const headerBackgroundColor = MAINCOLOR ;
const statusBarColor = Color(MAINCOLOR).darken(0.3) ;
const switchCircleColor = "#eee" ;
const tabBarUnderlineColor = Color(MAINCOLOR).darken(0.4) ;
const iosBarStyle = "light-content"; //light-content or dark-content
const inactiveTintColor = "#ddd";
const headerTextColor = "#fff";
const loadingColor = "#fff" ;
const listViewBackgroundColor = "#fff" ;
export default {
    MAINCOLOR,
    touchableBackgroundColor,
    FabColor,
    listViewBackgroundColor,
    switchCircleColor,
    activeTintColor,
    inactiveTintColor,
    headerBackgroundColor,
    headerTextColor,
    iosBarStyle,
    loadingColor,
    loadingBackgroundColor,
    rcColor,
    statusBarColor,
    tabBarUnderlineColor
}