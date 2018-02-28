import markdown_light from "./markdow_light" ;
import markdown_dark from "./markdown_dark" ;
import config from "./config" ;
const normal = config("#37C6C0","一般模式") ;
const dark = config("#333","护眼模式") ;
const red =  config("#dc0707","夕阳红");
const blue = config("#38f","天空蓝") ;
const purple = config("#721f72","高级紫") ;
const orange = config("#2ba818","青青草原") ;
export default {
    appTheme:{
        normal,
        dark,
        red,
        purple,
        orange,
        blue
    },
    markdown_light,
    markdown_dark
}